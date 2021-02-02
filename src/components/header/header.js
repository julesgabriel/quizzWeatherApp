import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import FirstQuizz from "../../pages/FirstQuizz";
import SecondQuizz from "../../pages/SecondQuizz";
import ThirdQuizz from "../../pages/ThirdQuizz";
import Meteo from "../meteo";

export default function Header() {
    return(
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/first-quizz">First</Link>
                        </li>
                        <li>
                            <Link to="/second-quizz">Second</Link>
                        </li>
                        <li>
                            <Link to="/third-quizz">Third</Link>
                        </li>
                    </ul>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route exact path="/">
                        <Meteo/>
                    </Route>
                    <Route exact path="/first-quizz">
                        <FirstQuizz />
                    </Route>
                    <Route exact path="/second-quizz">
                        <SecondQuizz />
                    </Route>
                    <Route exact path="/third-quizz">
                        <ThirdQuizz />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}