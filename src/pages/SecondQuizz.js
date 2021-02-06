import {Quizz} from "../components/Quizz";
import {QuizzNumberTwo} from "../data/SecondData";

export default function SecondQuizz() {
    return (
        <main className="container">
            {
                <div className="quizz-header">
                    <h1>{QuizzNumberTwo.title}</h1>
                    <span>{QuizzNumberTwo.description} :</span>
                </div>
            }
            <br/>
            <Quizz data={QuizzNumberTwo}/>
        </main>
    )
}