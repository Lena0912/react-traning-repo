import { Container, InfoWrapper, Info } from './QuizCard.styled';

export const QuizCard = ({
  quiz: { id, topic, level, time, questions },
  onDelete,
}) => {
  
    return (
      <Container level = {level}>
        <h2>{topic}</h2>
        <InfoWrapper>
          <button onClick={() => onDelete(id)}>Delete</button>
          <Info>Level:{level}</Info>
          <Info>Time:{time}min</Info>
          <Info>Questions:{questions}</Info>
        </InfoWrapper>
      </Container>
    );
};