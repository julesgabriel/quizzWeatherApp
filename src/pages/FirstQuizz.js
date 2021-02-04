import {Quizz} from "../components/Quizz";
import {QuizzNumberOne} from "../data/FirstData";

export default function FirstQuizz(){
    console.log(QuizzNumberOne)
    return(
        <main>
            {
                <div>
                    <h1>{QuizzNumberOne.title}</h1>
                    <span>{QuizzNumberOne.description}</span>
                </div>
            }
            <br/>
            <Quizz data={QuizzNumberOne}/>
        </main>
    )
}