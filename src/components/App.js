import { Component } from "react";
import { QuizList } from "./QuizList/QuizList";
import initialQuizItems from '../data.json';

export class App extends Component {
  state = {
    quizItems: initialQuizItems,
  };
  render() {
    const { quizItems } = this.state;
    return (
      <div>
        <QuizList items={quizItems} />
      </div>
    );
  }
}
    

