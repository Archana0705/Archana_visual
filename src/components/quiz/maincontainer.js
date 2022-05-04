import React, { Component } from "react";
import QuizOptions from "./quizoptions";
import AllQuestions from "./masterData.json"
class MainContainer extends Component {
    constructor() {
        super();
        this.state = {
            allQuestions: [],
            currentIndex: 0,
            correctAnswer: []
        }
    }
    componentDidMount() {
        this.setState({
            allQuestions: AllQuestions.questions
        })
    }
    getNextQuestion = () => {
        this.setState({
            currentIndex: this.state.currentIndex + 1
        })
    }
    render() {
        console.log(this.state);
        const { allQuestions, currentIndex } = this.state
        return (
            <>
                {
                    allQuestions.length !== 0 && (
                        <>
                            <p>{allQuestions[currentIndex].question}</p>
                            <div>
                                <QuizOptions options={allQuestions[currentIndex].answers}
                                    name={allQuestions[currentIndex].question.substr(0, 4)}
                                />
                            </div>
                            <button onClick={this.getNextQuestion}>
                                {(allQuestions.length - 1 == currentIndex) ? 'submit' : 'Next'}
                            </button>
                        </>
                    )
                }
            </>
        )
    }
}

export default MainContainer