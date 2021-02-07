import {Questions} from "./Questions";
import React from "react";

export const Quizz = (props) => {
    const {data} = props;
    return (
        <div>
            <Questions data={data}/>
        </div>
    )
}