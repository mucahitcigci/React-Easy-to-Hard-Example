import React from "react";
import { useNavigate } from "react-router-dom";

export default function HomeButton() {
  const navigate = useNavigate();
  return (
    <div>
      <button className="search-button" onClick={() => navigate("/")}>
        {" "}
        Go To Home Button
      </button>{" "}
    </div>
  );
}
