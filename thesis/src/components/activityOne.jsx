import React, { useState, useEffect, useRef, useCallback } from "react";
import "./activityOne.css";
import "../defaults.css";
import { HomeLink, EndOfGame, ROUNDCOUNT, CorrectnessLabel } from "../defaults.jsx";
import cloud from "../images/cloud.png";
import star from "../images/star.svg";

/* define fix positions for stars */
const leftCloudPositions = [
    { top: 55, left: 20 }, { top: 27, left: 35 }, { top: 52, left: 6 }, 
    { top: 60, left: 28 }, { top: 20, left: 25 }, { top: 32, left: 17 }, 
    { top: 42, left: 38 } 
];
const rightCloudPositions = [
    { top: 33, left: 67 }, { top: 19, left: 75 }, { top: 59, left: 68 }, 
    { top: 39, left: 90 }, { top: 54, left: 80 }, { top: 48, left: 57 }, 
    { top: 27, left: 84 }  
];

function ActivityOne() {
    const [allStars, setAllStars] = useState({ left: [], right: [] }); /* positions of stars in the left and right cloud*/
    const [firstPos, setFirstPos] = useState(null); /* start point of a line */
    const [secondPos, setSecondPos] = useState(null); /* end point of a line */
    const [lines, setLines] = useState([]); /* stored lines */
    const firstPosRef = useRef(firstPos); 
    const secondPosRef = useRef(secondPos);
    const [isCorrect, setIsCorrect] = useState(false); /* tracks if the stars are correctly connected */
    const [displayCorrectness, setCorrectnessLabel] = useState(false); /* enables a message that confirmes correctness */
    const [roundCount, setRoundCount] = useState(1); /* counts the amount of repetitions played */
    const [firstCloudCount, setFirstCloudCount] = useState(0); /* track #stars in left cloud */
    const [secondCloudCount, setSecondCloudCount] = useState(0); /* track #stars in right cloud */
    const [isCheckedLeft, setIsLeftChecked] = useState(false);
    const [isCheckedRight, setIsRightChecked] = useState(false);
    const [checkBoxCorrectness, setCheckBoxCorrectness] = useState(false);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 }); /* mouse position */
    const [offsets, setOffsets] = useState({ offsetx: 0, offsety: 0 }); /* offsets */

    const updateOffsets = () => {
        const vw = window.innerWidth / 10;
        const vh = window.innerHeight / 10;
        const offsetx = 4.35 * vh;
        const offsety = 1.45 * vw;
        setOffsets({ offsetx, offsety });
    };

    const generateStars = useCallback((count, positions, cloudSide) => {
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
                }}
                onClick={() => handleStarClick({ ...pos, cloudSide })}
            />
        ));
    }, []);

    useEffect(() => {
        updateOffsets(); 
        window.addEventListener('resize', updateOffsets);

        return () => {
            window.removeEventListener('resize', updateOffsets);
        };
    }, []);

    useEffect(() => {
        const handleMouseMove = (event) => {
            setMousePos({ x: event.clientX - offsets.offsetx, y: event.clientY - offsets.offsety });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [offsets]);

    useEffect(() => {
        setFirstCloudCount(Math.floor(Math.random() * leftCloudPositions.length) + 1);
        setSecondCloudCount(Math.floor(Math.random() * rightCloudPositions.length) + 1);
    }, []); 
    
    useEffect(() => {
        if (leftCloudPositions.length > 0 && rightCloudPositions.length > 0) {
            const starsInFirstCloud = generateStars(firstCloudCount, leftCloudPositions, 'left');
            const starsInSecondCloud = generateStars(secondCloudCount, rightCloudPositions, 'right');
    
            setAllStars({ left: starsInFirstCloud, right: starsInSecondCloud });
        }
    }, [firstCloudCount, secondCloudCount, generateStars]);

    useEffect(() => {
        firstPosRef.current = firstPos;
    }, [firstPos]);
    
    useEffect(() => {
        secondPosRef.current = secondPos;
    }, [secondPos]);

    /* tracks clicked stars */ 
    const handleStarClick = (position) => {
        if (!firstPosRef.current) {
            setFirstPos(position);
        } 
        else if (!secondPosRef.current) {
            setSecondPos(position);
    
            setLines(prevLines => [
                ...prevLines,
            { start: firstPosRef.current, end: position }
            ]);
            setFirstPos(null);
            setSecondPos(null);
        }
    };

    const checkInput = () => {
        setCorrectnessLabel(true);
        const seenPositions = new Set();
        
        if (lines.length !== Math.min(firstCloudCount, secondCloudCount)) {
            setIsLeftChecked(false);
            setIsRightChecked(false);
            setLines([]);
            return;
        }

        for (const line of lines) {
            const { start, end } = line;
            if (!((start.cloudSide === 'left' && end.cloudSide === 'right') || 
                  (start.cloudSide === 'right' && end.cloudSide === 'left'))) {
                setIsLeftChecked(false);
                setIsRightChecked(false);
                setLines([]);
                return;
            }
    
            const startPos = `${start.top}-${start.left}`;
            const endPos = `${end.top}-${end.left}`;
    
            if (seenPositions.has(startPos) || seenPositions.has(endPos)) {
                setIsLeftChecked(false);
                setIsRightChecked(false);
                setLines([]);
                return;
            }
            seenPositions.add(startPos);
            seenPositions.add(endPos);
        }

        if  (!!!isCheckedLeft && !!!isCheckedRight) {
            setCheckBoxCorrectness(true);
            return;
        }
        setCheckBoxCorrectness(false);

        if (firstCloudCount > secondCloudCount && (!!!isCheckedLeft || isCheckedRight)) {
            setIsLeftChecked(false);
            setIsRightChecked(false);
            setLines([]);
            return;
        }
        else if (secondCloudCount > firstCloudCount && (!!!isCheckedRight || isCheckedLeft)) {
            setIsLeftChecked(false);
            setIsRightChecked(false);
            setLines([]);
            return;
        }

        setIsCorrect(true);
        setRoundCount(roundCount + 1);
    };

    const handleNext = () => {
        setFirstCloudCount(Math.floor(Math.random() * leftCloudPositions.length) + 1);
        setSecondCloudCount(Math.floor(Math.random() * rightCloudPositions.length) + 1);

        if (leftCloudPositions.length > 0 && rightCloudPositions.length > 0) {
            const starsInFirstCloud = generateStars(firstCloudCount, leftCloudPositions, 'left');
            const starsInSecondCloud = generateStars(secondCloudCount, rightCloudPositions, 'right');
    
            setAllStars({ left: starsInFirstCloud, right: starsInSecondCloud });
        }
        setIsLeftChecked(false);
        setIsRightChecked(false);
        setCheckBoxCorrectness(false);
        setIsCorrect(false);
        setCorrectnessLabel(false);
        setLines([]);
    };

    const handleLeftCheckboxChange = (event) => {
        setIsLeftChecked(event.target.checked);
    };

    const handleRightCheckboxChange = (event) => {
        setIsRightChecked(event.target.checked);
    };


    /* the game is finished */
    if (roundCount >= ROUNDCOUNT) {
        /* Message that the game is completed */
        return <EndOfGame levelName="Mengen Vergleich" levelNr={1} />;
    }

    return (
        <div className="container" >
            <div className="white-box-regular" >
                <HomeLink />
                <span className="title-text">Verbinde die Sterne miteinander. Wähle die Wolke mit MEHR Sternen aus:</span>
                <div style={{ position: "relative", height: "100%", width: "100%" }}>
                    <input
                        type="checkbox"
                        checked={isCheckedLeft}
                        onChange={handleLeftCheckboxChange}
                        style={{ position: "absolute", top: "6%", left: "25%", height: "5%", width: "5%", zIndex: 2 }}
                    />
                    <img src={cloud} alt="Cloud" style={{ position: "absolute", top: "8%", left: "0%", height: "44vh", width: "28vw" }} />
                    {allStars.left}
                    <input
                        type="checkbox"
                        checked={isCheckedRight}
                        onChange={handleRightCheckboxChange}
                        style={{ position: "absolute", top: "6%", left: "75%", height: "5%", width: "5%", zIndex: 2 }}
                    />
                    <img src={cloud} alt="Cloud" style={{ position: "absolute", top: "8%", right: "1%", height: "44vh", width: "28vw" }} />
                    {allStars.right}
                    <svg style={{ position: "absolute", top: 0, left: 0, height: "100%", width: "100%", pointerEvents: "none" }}>
                        {lines.map((line, index) => (
                            <line key={index}
                                  x1={`calc(${line.start.left}% + 1.4vw)`} y1={`calc(${line.start.top}% + 1.4vw)`}
                                  x2={`calc(${line.end.left}% + 1.4vw)`} y2={`calc(${line.end.top}% + 1.4vw)`}
                                  stroke="black" strokeWidth="2" />
                        ))}
                        {firstPos && (
                            <line
                                x1={`calc(${firstPos.left}% + 1.4vw)`} y1={`calc(${firstPos.top}% + 1.4vw)`}
                                x2={mousePos.x} y2={mousePos.y}
                                stroke="black" strokeWidth="2" />
                        )}
                    </svg>
                {isCorrect && displayCorrectness && <CorrectnessLabel message="Richtig" isVisible={true}/>}
                {!!!isCorrect && displayCorrectness && !!!checkBoxCorrectness && <div className="correctness-label-default">Versuche es nochmals!</div>}
                {checkBoxCorrectness && <div className="correctness-label-efault">Wähle das richtige Kästchen!</div>}
                </div>
                <button onClick={isCorrect ? handleNext : checkInput} className="button-default" 
                    style={{ top: '90%', left: '50%' }} >
                    {isCorrect ? "Weiter" : "Prüfen"}
                </button>
            </div>
        </div>
    );
};

export default ActivityOne;