"use client";
import Stars from "../../components/Stars/Stars";
function App() {
  return (
    <Stars>
      <div className="h-screen bg-black">
        <div className="main__container">
          <Stars />
          <div className="score__section"></div>
        </div>
      </div>
    </Stars>
  );
}

export default App;
