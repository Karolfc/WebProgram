import React, { useEffect } from "react";
import { Header, Counter, Button } from "./components";

const initCounterState = +window.localStorage.getItem("counter") ?? 0 

export function App() {

useEffect( () => {
    //se ejecuta
    console.log("counter changed")
    localStorage.setItem('counter', JSON.stringify(counter));
}, [counter])

    return(
        <>
            <div>
                <Header/>
                <Counter/>
                <div className="buttonGroup">
                    <Button type="Substract"></Button>
                    <Button type="Add"></Button>
                </div>
            </div>
        </>
    )
}