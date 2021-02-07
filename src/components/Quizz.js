import {Questions} from "./Questions";
import React from "react";

export const Quizz = (props) => {
    function handleSubmit() {

    }
    const {data} = props;
    return (
        <div>
            <Questions data={data}/>
        </div>
    )
}