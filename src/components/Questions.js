import React, {useState, useEffect} from 'react'

export const Questions = (props) => {
    const [score, setScore] = useState(0)
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        if (loaded) {
            if (score === 10) {
                alert('Gagner!')
            } else {
                alert(`Votre Score est actuellement de ${score}`)
            }
        } else {
            setLoaded(true)
        }
    }, [score])

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

    function handleSubmit(e) {
        let id = e.target.getAttribute('data-id')
        const AnswerQuizz = props.data.questions[id - 1].correctAnswer
        let idDiv = document.getElementById(id)
        let targetedDiv = idDiv.getElementsByClassName('input_radio')
        for (let element of targetedDiv) {
            if (element.checked) {
                if (parseInt(element.value) === AnswerQuizz) {
                    idDiv.classList.add('questions--correct')
                    for (let el of targetedDiv) {
                        el.classList.add('disable')
                    }
                    setScore(score + 1)
                }
            }
        }
    }

    const QuizzQuestions = props.data.questions.map((element, index) => {
        const array = [element.correctAnswer, element.wrongAnswerOne, element.wrongAnswerTwo]
        const myShuffledArray = shuffle(array);
        return (
            <div className="questions" key={index} id={element.id}>
                <h3>{element.label}</h3>
                {
                    myShuffledArray.map((el, i) => {
                        return (
                            <div key={i}>
                                <span>{generateAnswersLetters(i) + " | "}</span>
                                <input className="input_radio" type="radio" id="A" name={element.logic} value={el}/>
                                <label htmlFor={generateAnswersLetters(index)}>{el}</label>
                            </div>
                        )
                    })
                }
                <input type="button" value="Vérifier la question" data-id={element.id} onClick={handleSubmit}
                       className="button"/>
            </div>
        )
    });
    return <div>{QuizzQuestions}</div>;

}

