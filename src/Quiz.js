import React, { Component } from 'react'
import QuizQuestion from './QuizQuestion.js'
import QuizEnd from './QuizEnd.js'

let quizData = require('./quiz_data.json')

class Quiz extends Component {
    constructor(props) {
        super(props)
        this.state = {quiz_position: 1}
    }

    render() {

        const isQuizEnd = true;
        return (
            <div>
                { isQuizEnd ? <QuizQuestion quiz_question={quizData.quiz_questions[0]} /> : <QuizEnd /> }
            </div>
        )
    }
}

export default Quiz;