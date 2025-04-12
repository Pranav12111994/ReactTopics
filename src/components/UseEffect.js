import React, {useEffect, useState} from "react";

function UseEffect() {
    const [counter, setCounter] = useState(0);

    // useEffect(() => {
    //     setTimeout(() => {
    //         setCounter(counter => counter+1)
    //     }, 1000)
    // });

    useEffect(() => {
        setTimeout(() => {
            setCounter(counter => counter+1)
        }, 1000)
    }, []);
    // Adding empty array means useEffect will be called once when component will be mounted 

    // useEffect(() => {
    //     setTimeout(() => {
    //         setCounter(counter => counter+1)
    //     }, 1000)
    // }, [counter]);
    // Adding dependancy in array means whenever the value of anything inside [] changes useEffect will be called

    return(
        <div>
            {/* page rendered {counter} times....! */}
            <p>UseEffect with empty array {counter}</p>
        </div>
    );
}

export default UseEffect;