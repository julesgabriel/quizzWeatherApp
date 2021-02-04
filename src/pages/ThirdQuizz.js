import {Quizz} from "../components/Quizz";
import {QuizzNumberThree} from "../data/ThirdData";

export default function FirstQuizz() {
    console.log(QuizzNumberThree)
    return (
        <main>
            {
                <div>
                    <h1>{QuizzNumberThree.title}</h1>
                    <span>{QuizzNumberThree.description}</span>
                </div>
            }
            <br/>
            <Quizz data={QuizzNumberThree}/>
        </main>
    )
}