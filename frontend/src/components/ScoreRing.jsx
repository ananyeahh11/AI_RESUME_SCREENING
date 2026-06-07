import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function ScoreRing({ score }) {
  return (
    <div
      style={{
        width: 90,
        height: 90,
      }}
    >
      <CircularProgressbar
        value={score}
        text={`${score}`}
      />
    </div>
  );
}

export default ScoreRing;