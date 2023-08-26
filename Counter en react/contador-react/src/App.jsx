import React from "react";
import { Header, Counter, Button } from "./components";

export function App() {
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