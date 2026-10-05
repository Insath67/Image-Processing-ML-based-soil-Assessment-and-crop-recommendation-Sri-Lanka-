import SensorCard from "../components/SensorCard";
import FertilityCard from "../components/FertilityCard";

function Dashboard() {
  return (
    <div>
      <h1>Soil Fertility Dashboard</h1>

      <SensorCard
        name="pH"
        value="6.4"
        unit=""
      />

      <SensorCard
        name="Nitrogen"
        value="42"
        unit="mg/kg"
      />

      <SensorCard
        name="Phosphorus"
        value="28"
        unit="mg/kg"
      />

      <SensorCard
        name="Potassium"
        value="55"
        unit="mg/kg"
      />

      <SensorCard
        name="Moisture"
        value="63"
        unit="%"
      />

      <SensorCard
        name="Temperature"
        value="27.5"
        unit="°C"
      />

      <SensorCard
        name="EC"
        value="1.4"
        unit="mS/cm"
      />

      <FertilityCard status="Medium" />
    </div>
  );
}

export default Dashboard;