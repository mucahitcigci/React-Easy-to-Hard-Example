import { useNavigate } from "react-router-dom";
import Increment from "../componenet/Increment";
import Temperature from "../componenet/Temperature";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <Increment />
      <hr />
      <h1>Temperature Control App</h1>
      <Temperature />
      <hr />
//       <button className="search-button" onClick={() => navigate("/dataApi")}>
//         Go To Search Filter
//       </button>
      <hr />
      <button className="search-button" onClick={() => navigate("/quiz")}>
        Start Solving The Quiz
      </button>
    </div>
  );
}

export default Home;
