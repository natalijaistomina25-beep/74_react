import { useState } from "react";
import Button from "../Button/Button";

const Feedback = () => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "white",
        display: "flex",
        alignItems: "center",
        gap: "10px",
        flexWrap: "wrap"
      }}
    >
      {/* Like section */}
      <span>{likes}</span>
      <Button text="Like" onClick={() => setLikes(likes + 1)} />

      {/* Dislike section */}
      <Button text="Dislike" onClick={() => setDislikes(dislikes + 1)} />
      <span>{dislikes}</span>

      {/* Reset button */}
      <Button
        text="Reset Results"
        onClick={() => {
          setLikes(0);
          setDislikes(0);
        }}
      />
    </div>
  );
};

export default Feedback;
