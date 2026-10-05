import { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({ N: '', P: '', K: '', ph: '' });
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  // Input වල අගයන් වෙනස් වෙද්දී State එකට දාගැනීම
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Submit බොත්තම එබුවාම පයිතන් Backend එකට දත්ත යැවීම
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // ඔයාගේ Flask සර්වර් එකේ ලින්ක් එක
      const response = await fetch('http://127.0.0.1:5000/predict', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          N: parseFloat(formData.N),
          P: parseFloat(formData.P),
          K: parseFloat(formData.K),
          ph: parseFloat(formData.ph)
        })
      });
      
      const data = await response.json();
      if (data.status === 'success') {
        setResult(data);
      } else {
        alert("Error: " + data.message);
      }
    } catch (error) {
      console.error("Connection Error:", error);
      alert("Backend එකට සම්බන්ධ විය නොහැක! Python Server එක On ද යන්න තහවුරු කරන්න.");
    }
    setLoading(false);
  };

  return (
    <div className="dashboard-container">
      <h2 className="header">🌾 Climate-Aware Crop Recommendation</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="input-grid">
          <div className="input-group">
            <label>Nitrogen (N)</label>
            <input type="number" name="N" value={formData.N} onChange={handleChange} required placeholder="Ex: 40" />
          </div>
          <div className="input-group">
            <label>Phosphorus (P)</label>
            <input type="number" name="P" value={formData.P} onChange={handleChange} required placeholder="Ex: 50" />
          </div>
          <div className="input-group">
            <label>Potassium (K)</label>
            <input type="number" name="K" value={formData.K} onChange={handleChange} required placeholder="Ex: 40" />
          </div>
          <div className="input-group">
            <label>Soil pH</label>
            <input type="number" step="0.1" name="ph" value={formData.ph} onChange={handleChange} required placeholder="Ex: 6.5" />
          </div>
        </div>
        
        <button type="submit" className="submit-btn" disabled={loading}>
          {loading ? "Analyzing Data..." : "Get Recommendation"}
        </button>
      </form>

      {/* Backend එකෙන් උත්තරේ ආවාම පෙන්වන කාඩ් එක */}
      {result && (
        <div className="result-card">
          <h3>Best Crop Match:</h3>
          <p className="crop-name">🌱 {result.recommended_crop}</p>
          
          <p style={{fontSize: '14px', color: '#666'}}>
            Live Weather Applied: Temp {result.realtime_weather_used?.temperature}°C | Rain {result.realtime_weather_used?.rainfall}mm
          </p>
          
          <div className="shap-explanation">
            💡 <strong>Why this crop?</strong> <br />
            {result.explanation}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;