export const Questions = (props) => {
    function shuffle(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

    function generateAnswersLetters(i) {
        if (i === 0) {
            return "a"
        } else if (i === 1) {
            return "b"
        } else {
            return "c"
        }
    }



    const QuizzQuestions = props.data.questions.map((element, index) => {
        const array = [element.correctAnswer, element.wrongAnswerOne, element.wrongAnswerTwo]
        const myShuffledArray = shuffle(array);
        return (
            <div className="questions" key={index}>
                <h3>{element.label}</h3>
                {
                    myShuffledArray.map((el, i) => {
                        return (
                            <div>
                                <span>{generateAnswersLetters(i) + " | "}</span>
                                <input type="radio" id="A" name={element.logic} value={generateAnswersLetters(i)}/>
                                <label htmlFor={generateAnswersLetters(index)}>{el}</label>
                            </div>
                        )
                    })
                }
            </div>
        )
    });
    return <div>{QuizzQuestions}</div>;

}

