import { Container, InfoWrapper, Info, IconWrapper } from './QuizCard.styled';
import { FaBeer } from 'react-icons/fa';
import { HiOutlineTrash } from 'react-icons/hi';
export const QuizCard = ({
  quiz: { id, topic, level, time, questions },
  onDelete,
}) => {
  
    return (
      <Container level={level}>
        <IconWrapper>
          <FaBeer size={32} />
        </IconWrapper>
        <h2>{topic}</h2>
        <InfoWrapper>
          <button onClick={() => onDelete(id)}>
            <HiOutlineTrash />
          </button>
          <Info type="a">Level:{level}</Info>
          <Info type="b">Time:{time}min</Info>
          <Info type="c">Questions:{questions}</Info>
        </InfoWrapper>
      </Container>
    );
};