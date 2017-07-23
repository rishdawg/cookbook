import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import ReactModal from 'react-modal';
import '../w3.css';
import './home.css';
class Modalcreate extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    return (
      <div className="marg">
        <button onClick={this.openModal} className="w3-blue">Open Modal</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          className="w3-black marg modal"
        >

          <button onClick={this.closeModal}>close</button>
          <div>I am a modal</div>
        </Modal>
      </div>
    );
  }
}
export default Modalcreate;
