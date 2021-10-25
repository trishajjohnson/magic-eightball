import React, {useState} from 'react';
import answers from './answers';
import "./EightBall.css";
import random from './helpers';

const EightBall = ({answrs=answers}) => {
    const [color, setColor] = useState("black");
    const [eightballText, setEightBallText] = useState("Think of a Question");

    const getRandomAnswer = () => {
        const newState = answrs[random(answrs.length)];
        setColor(newState.color);
        setEightBallText(newState.msg);
    }

    return (
        <div className="Eightball">
            <h1>Magic Eight Ball</h1>
            <div className="Eightball-answer" onClick={() => getRandomAnswer()} style={{backgroundColor: color}}>
                <p className="Eightball-text">{eightballText}</p>
            </div>
            {/* <button className="Eightball-button" >Get Answer</button> */}
        </div>
    )
}

export default EightBall;