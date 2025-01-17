/* difficultySelections.jsx */
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./difficultySelection.css";
import "../defaults.css";
import { HomeLink } from "../defaults";
import star from "../images/star.svg";

/* Basic localstorage function to store arrays */
/* Handles the watched tutorials in the local storage */
/* AI: chatGPT was used to guarantee the correct access to the local storage */
const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    if (
      storedValue !== null &&
      JSON.parse(storedValue).map(Number).length < 18
    ) {
      return initialValue;
    }
    return storedValue !== null
      ? JSON.parse(storedValue).map(Number)
      : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

function DifficultySelection() {
  /* this creates an array to track the played tutorials if it doesn't exist yet */
  const [tutorialProgress] = useLocalStorage(
    "tutorialProgress",
    Array(18).fill(0)
  );
  const { level, title } = useParams();
  const navigate = useNavigate();

  /* upon clicking on a difficulty this handles the further routing */
  /* AI: for correct routing ChatGPT was used */
  const handleSelection = (selectedDifficulty) => {
    const number = parseInt(level.slice(-1));
    let arrPos = number;
    if (number === 0) {
      arrPos = 10;
    }
    if (
      tutorialProgress[selectedDifficulty === "easy" ? arrPos : arrPos + 10]
    ) {
      navigate(`/${level}/${selectedDifficulty}`);
    } else {
      navigate(`/tutorial/${parseInt(level.slice(-1))}${selectedDifficulty}`);
    }
  };

  /* visible components of the difficulty selection page which appears after selecting a level in the overview page */
  return (
    <div className="container">
      <div className="white-box-small">
        <HomeLink top="-15%" />
        <span className="title-text">{title}</span>
        <span className="medium-text">Wähle eine Schwierigkeitsstufe:</span>
        <div className="difficulty-buttons">
          <button
            onClick={() => handleSelection("easy")}
            className="blue-square"
          >
            Einfach
            <div className="stars-upper">
              <img
                src={star}
                alt="Star"
                className="star"
                style={{ paddingRight: "2%" }}
              />
            </div>
          </button>
          <button
            onClick={() => handleSelection("hard")}
            className="blue-square"
          >
            Schwierig
            <div className="stars-upper">
              <img
                src={star}
                alt="Star"
                className="star"
                style={{ paddingRight: "5%" }}
              />
              <img
                src={star}
                alt="Star"
                className="star"
                style={{ paddingLeft: "5%" }}
              />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default DifficultySelection;
