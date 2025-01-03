/* activity6.jsx */
import React, { useState, useEffect, useCallback } from "react";
import "../styles/activity6.css";
import "../defaults.css";
import {
  HomeLink,
  EndOfGame,
  CorrectnessLabel,
  checkButtonTop,
} from "../defaults";
import { predefinedSetsA6 } from "./predefinedSets.jsx";

/* this exercise recycled a lot from activity3.jsx */
function Activity6({ difficulty }) {
  const [activeCoins, setActiveCoins] = useState(new Set());
  const [roundCount, setRoundCount] = useState(0);
  const [leftCoinsTen, setLeftCoinsTen] =
    useState(0); /* same as activity3.jsx */
  const [leftCoinsOne, setLeftCoinsOne] =
    useState(0); /* same as activity3.jsx */
  const [rightCoinsTen, setRightCoinsTen] =
    useState(0); /* same as activity3.jsx */
  const [rightCoinsOne, setRightCoinsOne] =
    useState(0); /* same as activity3.jsx */
  const [leftCoinsVisibleOne, setLeftCoinsVisibleOne] =
    useState(0); /* same as activity3.jsx */
  const [leftCoinsVisibleTen, setLeftCoinsVisibleTen] =
    useState(0); /* same as activity3.jsx */
  const [rightCoinsVisibleOne, setRightCoinsVisibleOne] =
    useState(0); /* same as activity3.jsx */
  const [rightCoinsVisibleTen, setRightCoinsVisibleTen] =
    useState(0); /* same as activity3.jsx */
  const [isCorrect, setIsCorrect] = useState(false);
  const [displayCorrectness, setCorrectnessLabel] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [displayMinus, setDisplayMinus] =
    useState(
      true
    ); /* lets the "-" disappear if no coins are left on the right side */
  const [selectedSet, setSelectedSet] = useState([]);

  /* Hints */
  const [hintCrossAllCoins, setHintCrossAllCoins] = useState(false);
  const [hintNothingToSwap, setHintNothingToSwap] = useState(false);
  const [hintSomethingToSwap, setHintSomethingToSwap] = useState(false);

  /* selects a predefined set of numbers */
  useEffect(() => {
    const sets =
      difficulty === "easy" ? predefinedSetsA6.easy : predefinedSetsA6.hard;
    const randomSet = sets[Math.floor(Math.random() * sets.length)];
    setSelectedSet(randomSet);
  }, [difficulty]);

  /* same as activity3.jsx */
  const generateNewNumbers = useCallback(() => {
    if (selectedSet.length > 0) {
      const { left, right } = selectedSet[roundCount];
      setLeftCoinsTen(Math.floor(left / 10));
      setLeftCoinsOne(left % 10);
      setRightCoinsTen(Math.floor(right / 10));
      setRightCoinsOne(right % 10);
      setLeftCoinsVisibleTen(Math.floor(left / 10));
      setLeftCoinsVisibleOne(left % 10);
      setRightCoinsVisibleTen(Math.floor(right / 10));
      setRightCoinsVisibleOne(right % 10);

      /* variables are reset for the next round */
      setDisplayMinus(true);
      setActiveCoins(new Set());
      setIsCorrect(false);
      setCorrectnessLabel(false);
      setInputValue("");
    }
  }, [roundCount, selectedSet]);

  useEffect(() => {
    generateNewNumbers();
  }, [generateNewNumbers]);

  /* similar to activity3.jsx */
  const CoinRowUpper = ({ coinsTen, coinsOne, type }) => (
    <div className="coin-stack-A6">
      {Array.from({ length: coinsTen }, (_, i) => {
        const coinKey = `${type}-tens-${i}`;
        const isActive = activeCoins.has(coinKey);
        const className = `coin-A6 ${type}-coin ${isActive ? "active-coin-A6" : ""}`;
        return (
          <div
            key={`ten-${i}`}
            className={className}
            style={{ cursor: "pointer" }}
            onClick={() => handleCoinClick(type, "tens", i)}
          >
            10
          </div>
        );
      })}
      {Array.from({ length: coinsOne }, (_, i) => {
        const coinKey = `${type}-ones-${i}`;
        const isActive = activeCoins.has(coinKey);
        const className = `coin-A6 ${type}-coin ${isActive ? "active-coin-A6" : ""}`;
        return (
          <div
            key={`one-${i}`}
            className={className}
            style={{ cursor: "pointer" }}
            onClick={() => handleCoinClick(type, "ones", i)}
          >
            1
          </div>
        );
      })}
    </div>
  );

  /* similar to activity3.jsx */
  const CoinRowLower = ({ coinsTen, coinsOne, type }) => (
    <div className="coin-stack-A6">
      {Array.from({ length: coinsTen }, (_, i) => (
        <div key={`ten-${i}`} className={`coin-A6 ${type}-coin`}>
          10
        </div>
      ))}
      {Array.from({ length: coinsOne }, (_, i) => (
        <div key={`one-${i}`} className={`coin-A6 ${type}-coin`}>
          1
        </div>
      ))}
    </div>
  );

  /* similar to activity3.jsx */
  const handleCoinClick = (type, denomination, index) => {
    let nrRightTens = rightCoinsVisibleTen;
    let nrRightOnes = rightCoinsVisibleOne;
    const coinKey = `${type}-${denomination}-${index}`;
    const oppositeType = type === "left" ? "right" : "left";

    setActiveCoins((prevActiveCoins) => {
      const newActiveCoins = new Set(prevActiveCoins);
      if (newActiveCoins.has(coinKey)) {
        newActiveCoins.delete(coinKey);

        const maxCoins = denomination === "tens" ? leftCoinsTen : leftCoinsOne;
        for (let i = 0; i < maxCoins; i++) {
          const oppositeCoinKey = `${oppositeType}-${denomination}-${i}`;
          if (newActiveCoins.has(oppositeCoinKey)) {
            newActiveCoins.delete(oppositeCoinKey);
            break;
          }
        }

        if (denomination === "tens") {
          setLeftCoinsVisibleTen((prevCount) => prevCount + 1);
          setRightCoinsVisibleTen((prevCount) => prevCount + 1);
          nrRightTens += 1;
        } else {
          setLeftCoinsVisibleOne((prevCount) => prevCount + 1);
          setRightCoinsVisibleOne((prevCount) => prevCount + 1);
          nrRightOnes += 1;
        }
      } else if (
        (denomination === "tens" &&
          leftCoinsVisibleTen > 0 &&
          rightCoinsVisibleTen > 0) ||
        (denomination === "ones" &&
          leftCoinsVisibleOne > 0 &&
          rightCoinsVisibleOne > 0)
      ) {
        newActiveCoins.add(coinKey);

        const maxCoins = denomination === "tens" ? leftCoinsTen : leftCoinsOne;
        for (let i = 0; i < maxCoins; i++) {
          const oppositeCoinKey = `${oppositeType}-${denomination}-${i}`;
          if (!newActiveCoins.has(oppositeCoinKey)) {
            newActiveCoins.add(oppositeCoinKey);
            break;
          }
        }

        if (denomination === "tens") {
          setLeftCoinsVisibleTen((prevCount) => prevCount - 1);
          setRightCoinsVisibleTen((prevCount) => prevCount - 1);
          nrRightTens -= 1;
        } else if (leftCoinsVisibleOne > 0 && rightCoinsVisibleOne > 0) {
          setLeftCoinsVisibleOne((prevCount) => prevCount - 1);
          setRightCoinsVisibleOne((prevCount) => prevCount - 1);
          nrRightOnes -= 1;
        }
      }

      if (nrRightTens === 0 && nrRightOnes === 0) {
        setDisplayMinus(false);
      } else {
        setDisplayMinus(true);
      }

      return newActiveCoins;
    });
  };

  /* checks if exercise was solved correctly, enables useful hints if not */
  const checkInput = () => {
    setCorrectnessLabel(true);
    setHintCrossAllCoins(false);
    setHintNothingToSwap(false);
    setHintSomethingToSwap(false);
    const leftVal = leftCoinsOne + leftCoinsTen * 10;
    const rightVal = rightCoinsOne + rightCoinsTen * 10;
    if (parseInt(inputValue) === leftVal - rightVal) {
      setIsCorrect(true);
      setHintCrossAllCoins(false);
      setHintNothingToSwap(false);
    } else {
      if (
        (leftCoinsVisibleOne > 0 && rightCoinsVisibleOne > 0) ||
        (leftCoinsVisibleTen > 0 && rightCoinsVisibleTen > 0)
      ) {
        setHintCrossAllCoins(true);
      }
      if (
        leftCoinsVisibleTen > 0 &&
        leftCoinsVisibleOne === 0 &&
        rightCoinsVisibleOne > 0
      ) {
        setHintSomethingToSwap(true);
      }
    }
  };

  /* increases roundCount and triggers the generation of new nubers */
  const handleNext = () => {
    if (roundCount < selectedSet.length - 1) {
      setRoundCount((prevCount) => prevCount + 1);
    }
    generateNewNumbers();
  };

  /* similar to activity3.jsx */
  const handleConversion = () => {
    if (
      leftCoinsVisibleTen === 0 ||
      leftCoinsVisibleOne > 0 ||
      rightCoinsVisibleOne === 0
    ) {
      setHintNothingToSwap(true);
      setHintCrossAllCoins(false);
      setHintSomethingToSwap(false);
    }
    if (
      (leftCoinsVisibleOne > 0 && rightCoinsVisibleOne > 0) ||
      (leftCoinsVisibleTen > 0 && rightCoinsVisibleTen > 0)
    ) {
      setHintCrossAllCoins(true);
      setHintNothingToSwap(false);
      setHintSomethingToSwap(false);
      return;
    }

    if (
      leftCoinsVisibleTen > 0 &&
      rightCoinsVisibleTen === 0 &&
      leftCoinsVisibleOne === 0
    ) {
      const newLeftCoinsTen = leftCoinsTen - 1;
      const newLeftCoinsVisibleTen = leftCoinsVisibleTen - 1;
      const newLeftCoinsOne = leftCoinsOne + 10;
      const newLeftCoinsVisibleOne = leftCoinsVisibleOne + 10;

      setLeftCoinsTen(newLeftCoinsTen);
      setLeftCoinsOne(newLeftCoinsOne);
      setLeftCoinsVisibleOne(newLeftCoinsVisibleOne);
      setLeftCoinsVisibleTen(newLeftCoinsVisibleTen);
    }
  };

  /* game is finished */
  if (roundCount >= Math.max(1, selectedSet.length - 1)) {
    return (
      <EndOfGame
        levelName="Münzen subtrahieren"
        levelNr={5}
        difficulty={difficulty}
      />
    );
  }

  /* numbers to be dispplayed are computed */
  const leftVal = leftCoinsOne + leftCoinsTen * 10;
  const rightVal = rightCoinsOne + rightCoinsTen * 10;

  /* renders all visible components on the page */
  return (
    <div className="container">
      <div className="white-box-large">
        <HomeLink />
        {difficulty === "easy" && (
          <div className="title-text">
            Klicke auf die Münzen, um sie zu streichen. Löse die Rechnung:
          </div>
        )}
        {difficulty === "hard" && (
          <div className="title-text">
            Klicke auf die Münzen, um sie zu streichen. Tausche eine grössere
            für kleinere falls nötig. Löse die Rechnung:
          </div>
        )}

        {difficulty === "hard" && (
          <button
            onClick={handleConversion}
            className="header-button"
            style={{ marginTop: "1vh" }}
          >
            Tauschen
          </button>
        )}

        <div className="equation-row">
          <span className="equation-part">{leftVal}</span>
          <span className="equation-part">-</span>
          <span className="equation-part">{rightVal}</span>
        </div>

        <div className="coin-row-A6">
          <div className="coin-container-A6">
            <span className="equal-sign">=</span>
            <CoinRowUpper
              coinsTen={leftCoinsTen}
              coinsOne={leftCoinsOne}
              type="left"
            />
          </div>
          <span className="minus-sign">-</span>
          <div className="coin-container-A6">
            <CoinRowUpper
              coinsTen={rightCoinsTen}
              coinsOne={rightCoinsOne}
              type="right"
            />
          </div>
        </div>

        <div className="coin-row-A6">
          <div className="coin-container-A6">
            <span className="equal-sign">=</span>
            <CoinRowLower
              coinsTen={leftCoinsVisibleTen}
              coinsOne={leftCoinsVisibleOne}
              type="left"
            />
          </div>
          {displayMinus && <span className="minus-sign">-</span>}
          <div className="coin-container-A6">
            <CoinRowLower
              coinsTen={rightCoinsVisibleTen}
              coinsOne={rightCoinsVisibleOne}
              type="right"
            />
          </div>
        </div>

        <div className="equation-row">
          <span className="equation-part">{leftVal}</span>
          <span className="equation-part">-</span>
          <span className="equation-part">{rightVal}</span>

          <span className="equal-sign">=</span>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder=""
            className="info-input-A6"
            style={{
              marginLeft: `${leftVal < 10 ? "5vw" : "3vw"}` /* adapt margin based on numbers for better visuals */,
            }}
            readOnly={isCorrect}
          />
        </div>

        {/* hint rendering based on some conditions */}
        {isCorrect && displayCorrectness && (
          <CorrectnessLabel message="Richtig!" isVisible={true} left="79.5%" />
        )}
        {!isCorrect && displayCorrectness && (
          <CorrectnessLabel
            message="Überprüfe das Kästchen!"
            isVisible={true}
            left="79.5%"
          />
        )}
        {hintNothingToSwap && (
          <CorrectnessLabel
            message="Hier sollst du nicht tauschen!"
            isVisible={true}
            left="73.5%"
            top="76%"
          />
        )}
        {hintCrossAllCoins && (
          <CorrectnessLabel
            message="Streiche so viele Münzen, wie du kannst!"
            isVisible={true}
            left="73.5%"
            top="76%"
          />
        )}
        {hintSomethingToSwap && (
          <CorrectnessLabel
            message="Hier kannst du tauschen!"
            isVisible={true}
            left="73.5%"
            top="76%"
          />
        )}
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

export default Activity6;
