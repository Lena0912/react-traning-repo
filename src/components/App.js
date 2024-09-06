import { Component } from "react";
import { QuizList } from "./QuizList/QuizList";
import initialQuizItems from '../data.json';
import { SearchBar } from "./SearchBar/SearchBar";
import { QuizForm } from "./QuizForm/QuizForm";

export class App extends Component {
  state = {
    quizItems: initialQuizItems,
    topicFilter: '',
    levelFilter: 'all',
  };

  changeTopicFilter = newFilter => {
    this.setState({
      topicFilter: newFilter,
    });
  };

  changeLevelFilter = newLevel => {
    this.setState({
      levelFilter: newLevel,
    });
  };

  render() {
    const { quizItems, topicFilter, levelFilter } = this.state;
    return (
      <div>
        <QuizForm/>
        <SearchBar
          level={levelFilter}
          topic={topicFilter}
          onChangeTopic={this.changeTopicFilter}
          onChangeLevel={this.changeLevelFilter}
        />
        <QuizList items={quizItems} />
      </div>
    );
  }
}
    

