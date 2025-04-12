import React, { useState } from 'react';

function ReactHooks() {
    const [color, setColor] = useState('Red');
    function changeColor()  {
        setColor('Blue');
    }
    const [car, setCar] = useState({
        company: "Maruti",
        year: "2016",
        model: "4Wheeler",
        color: "Red"
    });
    function changeCarObj() {
        setCar((prev) => {
            return {...prev, color : "Blue"}
        })
    }
    const [counter, setCounter] = useState(0);
    function increaseCounter() {
        setCounter(counter+1);
    }
    const [advCounter, setAdvCounter] = useState(0);
    function advCounterIncrease() {
        setAdvCounter((advCounter) => advCounter+1)
        setAdvCounter((advCounter) => advCounter+1)
        setAdvCounter((advCounter) => advCounter+1)
        setAdvCounter((advCounter) => advCounter+1)
    }
	return(
        <div>
            <p>Simple Use State</p>
            <p>color is {color}</p>
            <button onClick={changeColor}>Change Color</button>
            <p>Use state object</p>
            <div>My car brand is {car.company}</div>
            <div>My cars color is {car.color}</div>
            <button onClick={changeCarObj}>change car color</button>
            <p>Simple Counter</p>
            <div>{counter}</div>
            <button onClick={increaseCounter}>increase counter</button>
            <p>Advance useState</p>
            <p>count increase by 4: {advCounter}</p>
            <button onClick={advCounterIncrease}>Adv Counter Increase</button>
        </div>
    );
};

export default ReactHooks;