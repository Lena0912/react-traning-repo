import { Container, InfoWrapper, Info, ActionBar } from './QuizCard.styled';
import Modal from 'react-modal';
import { HiOutlineTrash } from 'react-icons/hi';
import { Component } from 'react';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

export class QuizCard extends Component {
  state = {
    isModalOpen: false
  };

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };


  render() {
    const {isModalOpen} = this.state
    const {
      quiz: { id, topic, level, time, questions },
      onDelete,
    } = this.props;
    return (
      <Container $level={level}>
        <h2>{topic}</h2>
        <InfoWrapper>
          <Info type="a">Level:{level}</Info>
          <Info type="b">Time:{time}min</Info>
          <Info type="c">Questions:{questions}</Info>
        </InfoWrapper>
        <ActionBar>
          <button onClick={() => onDelete(id)}>
            <HiOutlineTrash />
          </button>
          <button onClick={this.openModal}>Open modal</button>
        </ActionBar>

        <Modal
          isOpen={isModalOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <p>{topic}</p>
          <button onClick={this.closeModal}>Close</button>
        </Modal>
      </Container>
    );
  } 
}

