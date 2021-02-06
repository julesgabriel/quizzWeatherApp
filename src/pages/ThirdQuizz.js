import {Quizz} from "../components/Quizz";
import {QuizzNumberThree} from "../data/ThirdData";

export default function ThirdQuizz() {
    console.log(QuizzNumberThree)
    return (
        <main className="container">
            {
                <div className="quizz-header">
                    <h1>{QuizzNumberThree.title}</h1>
                    <span>{QuizzNumberThree.description} :</span>
                </div>
            }
            <br/>
            <Quizz data={QuizzNumberThree}/>
        </main>
    )
}