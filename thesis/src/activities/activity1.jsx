/* activity1.jsx */
import React, { useState, useEffect, useRef, useCallback } from "react";
import "../styles/activity1.css";
import "../defaults.css";
import {
  HomeLink,
  EndOfGame,
  CorrectnessLabel,
  checkButtonTop,
} from "../defaults.jsx";
import { predefinedSetsA1 } from "./predefinedSets.jsx";
import cloud from "../images/cloud.png";
import star from "../images/star.svg";

/* define fixed positions for stars */
const leftCloudPositions = [
  { top: 52, left: 15 },
  { top: 27, left: 32 },
  { top: 40, left: 6 },
  { top: 48, left: 26 },
  { top: 16, left: 25 },
  { top: 32, left: 14 },
  { top: 35, left: 33 },
];
const rightCloudPositions = [
  { top: 25, left: 67 },
  { top: 12, left: 77 },
  { top: 50, left: 71 },
  { top: 29, left: 90 },
  { top: 43, left: 82 },
  { top: 43, left: 61 },
  { top: 21, left: 84 },
];

const starSize = 4; /* Size of the star in percentage */
const yOffset = 3; /* Additional y-axis offset in percentage to shift the lines downwards */
const xOffset = 2; /* Additional x-axis offset in percentage to shift the lines to the left */

function Activity1({ difficulty }) {
  const [allStars, setAllStars] = useState({
    left: [],
    right: [],
  }); /* positions of stars in the left and right cloud */
  const [firstPos, setFirstPos] = useState(null); /* start point of a line */
  const [secondPos, setSecondPos] = useState(null); /* end point of a line */
  const [lines, setLines] = useState([]); /* stored lines */
  const [connectedStars, setConnectedStars] = useState(
    new Set()
  ); /* tracks connected stars */
  const firstPosRef = useRef(firstPos);
  const svgRef = useRef(null);
  const [isCorrect, setIsCorrect] =
    useState(false); /* tracks if the stars are correctly connected */
  const [displayCorrectness, setDisplayCorrectness] =
    useState(false); /* enables a message that confirms correctness */
  const [roundCount, setRoundCount] =
    useState(0); /* counts the number of repetitions played */
  const [firstCloudCount, setFirstCloudCount] =
    useState(0); /* track #stars in left cloud */
  const [secondCloudCount, setSecondCloudCount] =
    useState(0); /* track #stars in right cloud */
  const [isCheckedLeft, setIsLeftChecked] = useState(false);
  const [isCheckedRight, setIsRightChecked] = useState(false);

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 }); /* mouse position */
  const [inputValue, setInputValue] = useState("");
  const touchEventRef = useRef(false);

  const [selectedSet, setSelectedSet] = useState([]);

  /* Hint that can be enabled */
  const [hintClickBox, setHintClickBox] = useState(false);
  const [hintConnectStars, setHintConnectStars] = useState(false);

  /* loads the numbers of stars to be generated */
  useEffect(() => {
    const sets =
      difficulty === "easy" ? predefinedSetsA1.easy : predefinedSetsA1.hard;
    const randomSet = sets[Math.floor(Math.random() * sets.length)];
    setSelectedSet(randomSet);
  }, [difficulty]);

  /* upon clicking a star this function checks for validity */
  const handleStarPosition = useCallback(
    (position) => {
      if (!firstPosRef.current) {
        setFirstPos(position);
      } else {
        /* Check if stars are on different sides */
        if (
          firstPosRef.current.cloudSide !== position.cloudSide &&
          !connectedStars.has(
            `${firstPosRef.current.top}-${firstPosRef.current.left}`
          ) &&
          !connectedStars.has(`${position.top}-${position.left}`)
        ) {
          setLines((prevLines) => [
            ...prevLines,
            { start: firstPosRef.current, end: position },
          ]);

          setConnectedStars((prevConnectedStars) => {
            const newConnectedStars = new Set(prevConnectedStars);
            newConnectedStars.add(
              `${firstPosRef.current.top}-${firstPosRef.current.left}`
            );
            newConnectedStars.add(`${position.top}-${position.left}`);
            return newConnectedStars;
          });
        }
        setFirstPos(null);
      }
    },
    [connectedStars]
  );

  /* triggers the behaviour if a star is clicked */
  const handleStarClick = useCallback(
    (e, position) => {
      if (touchEventRef.current) {
        touchEventRef.current = false;
        return;
      }
      handleStarPosition(position);
    },
    [handleStarPosition]
  );

  /* triggers the behaviour if a star was touched (touch event on a touchscreen) */
  /* used such that no click event is triggered but only a touch event */
  const handleTouchStart = useCallback(
    (e, position) => {
      e.preventDefault();
      touchEventRef.current = true;
      handleStarPosition(position);
    },
    [handleStarPosition]
  );

  /* renders the used number of stars at the beginning of each round */
  const generateStars = useCallback(
    (count, positions, cloudSide) => {
      return positions.slice(0, count).map((pos, index) => (
        <img
          key={`${cloudSide}-${index}`}
          src={star}
          className="star-A1"
          alt="Star"
          style={{
            position: "absolute",
            top: `${pos.top}%`,
            left: `${pos.left}%`,
            width: `${starSize}%`,
          }}
          draggable={false}
          onClick={(e) => handleStarClick(e, { ...pos, cloudSide })}
          onTouchStart={(e) => handleTouchStart(e, { ...pos, cloudSide })}
        />
      ));
    },
    [handleStarClick, handleTouchStart]
  );

  /* dynamic line rendering */
  /* AI: the computations for the correct mouse position and the svgRef were done with ChatGPT */
  useEffect(() => {
    /* if played if a mouse */
    const handleMouseMove = (event) => {
      if (svgRef.current) {
        const rect = svgRef.current.getBoundingClientRect();
        setMousePos({
          x: event.clientX - rect.left,
          y: event.clientY - rect.top,
        });
      }
    };

    /* if played with a touchscreen */
    const handleTouchMove = (event) => {
      if (svgRef.current && event.touches.length === 1) {
        const rect = svgRef.current.getBoundingClientRect();
        setMousePos({
          x: event.touches[0].clientX - rect.left,
          y: event.touches[0].clientY - rect.top,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  /* Computes the correct screen cordinates to connect the stars */
  /* AI: ChatGPT assistance */
  const calculateCoordinates = (position, svgRect) => {
    return {
      x: ((position.left + xOffset) / 100) * svgRect.width,
      y: ((position.top + yOffset) / 100) * svgRect.height,
    };
  };

  const generateNewCounts = useCallback(() => {
    let leftCount, rightCount;

    if (selectedSet.length > 0) {
      leftCount = selectedSet[roundCount].left;
      rightCount = selectedSet[roundCount].right;
    }

    setFirstCloudCount(leftCount);
    setSecondCloudCount(rightCount);
  }, [roundCount, selectedSet]);

  /* checks if the activity is done */
  useEffect(() => {
    if (selectedSet.length === 0) return;
    generateNewCounts();
  }, [generateNewCounts, selectedSet]);

  useEffect(() => {
    if (leftCloudPositions.length > 0 && rightCloudPositions.length > 0) {
      const starsInFirstCloud = generateStars(
        firstCloudCount,
        leftCloudPositions,
        "left"
      );
      const starsInSecondCloud = generateStars(
        secondCloudCount,
        rightCloudPositions,
        "right"
      );

      setAllStars({ left: starsInFirstCloud, right: starsInSecondCloud });
    }
  }, [firstCloudCount, secondCloudCount, generateStars]);

  useEffect(() => {
    firstPosRef.current = firstPos;
  }, [firstPos]);

  /* checks if exercise was correctly solved and enabled needed hints */
  const checkInput = () => {
    if (lines.length === 0) {
      setHintConnectStars(true);
      return;
    }
    setHintConnectStars(false);

    if (lines.length !== Math.min(firstCloudCount, secondCloudCount)) {
      setHintConnectStars(true);
      setIsLeftChecked(false);
      setIsRightChecked(false);
      return;
    }
    setHintConnectStars(false);

    if (difficulty === "easy") {
      if (!isCheckedLeft && !isCheckedRight) {
        setHintClickBox(true);
        return;
      }
      setHintClickBox(false);

      if (
        firstCloudCount > secondCloudCount &&
        (!isCheckedLeft || isCheckedRight)
      ) {
        setDisplayCorrectness(true);
        return;
      } else if (
        secondCloudCount > firstCloudCount &&
        (!isCheckedRight || isCheckedLeft)
      ) {
        setDisplayCorrectness(true);
        return;
      }
    } else {
      if (inputValue === "") {
        setHintClickBox(true);
        return;
      }
      setHintClickBox(false);

      if (
        (inputValue === "<" && firstCloudCount < secondCloudCount) ||
        (inputValue === ">" && firstCloudCount > secondCloudCount) ||
        (inputValue === "=" && firstCloudCount === secondCloudCount)
      ) {
        setIsCorrect(true);
      } else {
        setIsCorrect(false);
        setDisplayCorrectness(true);
        return;
      }
    }
    setDisplayCorrectness(true);
    setIsCorrect(true);
  };

  /* resets all varibales and loads the next exercise */
  const handleNext = () => {
    generateNewCounts();

    if (leftCloudPositions.length > 0 && rightCloudPositions.length > 0) {
      const starsInFirstCloud = generateStars(
        firstCloudCount,
        leftCloudPositions,
        "left"
      );
      const starsInSecondCloud = generateStars(
        secondCloudCount,
        rightCloudPositions,
        "right"
      );

      setAllStars({ left: starsInFirstCloud, right: starsInSecondCloud });
    }
    setIsLeftChecked(false);
    setIsRightChecked(false);
    setInputValue("");
    setHintClickBox(false);
    setIsCorrect(false);
    setDisplayCorrectness(false);
    setLines([]);
    setFirstPos(null);
    setSecondPos(null);
    setConnectedStars(new Set());
    setRoundCount((prevRoundCount) => prevRoundCount + 1);
  };

  const handleLeftCheckboxChange = (event) => {
    if (event.target.checked) {
      setIsLeftChecked(true);
      setIsRightChecked(
        false
      ); /* Uncheck the right checkbox when left is checked */
    } else {
      setIsLeftChecked(false);
    }
  };

  const handleRightCheckboxChange = (event) => {
    if (event.target.checked) {
      setIsRightChecked(true);
      setIsLeftChecked(
        false
      ); /* Uncheck the left checkbox when right is checked */
    } else {
      setIsRightChecked(false);
    }
  };

  const handleButtonClick = (value) => {
    setInputValue(value);
  };

  /* The game is finished */
  if (roundCount >= Math.max(1, selectedSet.length - 1)) {
    /* Message that the game is completed */
    return (
      <EndOfGame
        levelName="Mengen Vergleich"
        levelNr={1}
        difficulty={difficulty}
      />
    );
  }

  /* renders all the visible components of the page */
  return (
    <div className="container">
      <div className="white-box-regular">
        <HomeLink />
        {difficulty === "easy" && (
          <span className="title-text">
            Verbinde die Sterne miteinander. Wähle die Wolke mit MEHR Sternen
            aus:
          </span>
        )}
        {difficulty === "hard" && (
          <span className="title-text">
            Verbinde die Sterne miteinander. Wähle {"<, >, ="} passend:
          </span>
        )}
        <div className="div-A1">
          {difficulty === "easy" && (
            <input
              type="checkbox"
              checked={isCheckedLeft}
              onChange={handleLeftCheckboxChange}
              style={{
                position: "absolute",
                marginTop: "1vh",
                left: "25%",
                height: "5%",
                width: "5%",
                zIndex: 2,
                cursor: "pointer",
              }}
            />
          )}
          {difficulty === "hard" && (
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder=""
              className="info-input-A1"
              readOnly={isCorrect}
            />
          )}
          <img
            src={cloud}
            alt="Cloud"
            className="cloud-A1"
            style={{ left: "0%" }}
          />
          {allStars.left}
          {difficulty === "easy" && (
            <input
              type="checkbox"
              checked={isCheckedRight}
              onChange={handleRightCheckboxChange}
              style={{
                position: "absolute",
                marginTop: "1vh",
                left: "75%",
                height: "5%",
                width: "5%",
                zIndex: 2,
                cursor: "pointer",
              }}
            />
          )}
          <img
            src={cloud}
            alt="Cloud"
            className="cloud-A1"
            style={{ right: "1%" }}
          />
          {allStars.right}
          <svg
            ref={svgRef}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              height: "100%",
              width: "100%",
              pointerEvents: "none",
            }}
          >
            {lines.map((line, index) => {
              const svgRect = svgRef.current.getBoundingClientRect();
              const startCoords = calculateCoordinates(line.start, svgRect);
              const endCoords = calculateCoordinates(line.end, svgRect);

              return (
                <line
                  key={index}
                  x1={startCoords.x}
                  y1={startCoords.y}
                  x2={endCoords.x}
                  y2={endCoords.y}
                  stroke="black"
                  strokeWidth="2"
                />
              );
            })}
            {/* AI: coordinates computation made with ChatGPT */}
            {firstPos &&
              !secondPos &&
              (() => {
                const svgRect = svgRef.current.getBoundingClientRect();
                const startCoords = calculateCoordinates(firstPos, svgRect);

                return (
                  <line
                    x1={startCoords.x}
                    y1={startCoords.y}
                    x2={mousePos.x}
                    y2={mousePos.y}
                    stroke="black"
                    strokeWidth="2"
                  />
                );
              })()}
          </svg>
          {difficulty === "hard" && (
            <div>
              <div className="button-container-A1">
                <button
                  className="operator-button-A1"
                  onClick={() => handleButtonClick("<")}
                >
                  {"<"}
                </button>
                <button
                  className="operator-button-A1"
                  onClick={() => handleButtonClick("=")}
                >
                  {"="}
                </button>
                <button
                  className="operator-button-A1"
                  onClick={() => handleButtonClick(">")}
                >
                  {">"}
                </button>
              </div>
              <div className="label-container-A1">
                <span className="operator-label-A1">kleiner als</span>
                <span className="operator-label-A1">gleich</span>
                <span className="operator-label-A1">größer als</span>
              </div>
            </div>
          )}
          {isCorrect && displayCorrectness && (
            <CorrectnessLabel
              message="Richtig!"
              isVisible={true}
              top="76%"
              left="77%"
            />
          )}
          {!isCorrect && displayCorrectness && !hintClickBox && (
            <CorrectnessLabel
              message="Überprüfe das Kästchen!"
              isVisible={true}
              top="76%"
              left="77%"
            />
          )}
          {hintClickBox && difficulty === "easy" && (
            <CorrectnessLabel
              message="Wähle das richtige Kästchen aus!"
              isVisible={true}
            />
          )}
          {hintClickBox && difficulty === "hard" && (
            <CorrectnessLabel
              message="Wähle <, =, > passend!"
              isVisible={true}
            />
          )}
          {hintConnectStars && (
            <CorrectnessLabel
              message="Verbinde die Sterne miteinander!"
              isVisible={true}
            />
          )}
        </div>
        <button
          onClick={isCorrect ? handleNext : checkInput}
          className="button-default"
          style={{ top: `${checkButtonTop}%`, left: "50%" }}
        >
          {isCorrect ? "🌟 Weiter 🌟" : "Prüfen"}
        </button>
      </div>
    </div>
  );
}

export default Activity1;
