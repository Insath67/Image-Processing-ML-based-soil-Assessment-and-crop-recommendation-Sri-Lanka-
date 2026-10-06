import { useParams } from "react-router-dom";

function AnalysisResult() {

  const { id } = useParams();

  return (
    <div>
      <h1>Soil Analysis Result</h1>

      <h2>Sample ID: {id}</h2>

      <p>
        The nutrient and fertility results will appear here.
      </p>
    </div>
  );
}

export default AnalysisResult;