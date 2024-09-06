export const QuizCard = ({
  quiz: { id, topic, level, time, questions },
  onDelete,
}) => {
  
    return (
      <div>
        <h2>{topic}</h2>
        <div>

          <button onClick={ () => onDelete(id)}>Delete</button>
          <p>Level:{level}</p>
          <p>Time:{time}min</p>
          <p>Questions:{questions}</p>
        </div>
      </div>
    );
};