import { useState } from "react";
import Button from "../Button/Button";
import "./Feedback.css";

const Feedback = () => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  return (
    <div className="feedback">
      <span className="counter">{likes}</span>
      <Button text="Like" onClick={() => setLikes(prev => prev + 1)} />

      <Button text="Dislike" onClick={() => setDislikes(prev => prev + 1)} />
      <span className="counter">{dislikes}</span>

      <div className="reset">
        <Button
          text="Reset Results"
          onClick={() => {
            setLikes(0);
            setDislikes(0);
          }}
        />
      </div>
    </div>
  );
};

export default Feedback;