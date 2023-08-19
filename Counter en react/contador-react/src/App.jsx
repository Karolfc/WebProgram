import React from "react";
import { Header, Counter, Button } from "./components";

export function App() {
    return(
        <>
            <div>
                <Header/>
                <Counter/>
                <Button type="-"></Button>
                <Button type="+"></Button>
            </div>
        </>
    )
}