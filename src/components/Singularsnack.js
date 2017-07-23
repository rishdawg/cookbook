import React, { Component } from 'react';
import './home.css';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
class Singularsnack extends Component{
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

  render(){
    return(
      <div className="w3-card-4 w3-container w3-half w3-mobile"onClick={this.openModal}>
        <img className="w3-image" src={this.props.image} alt={this.props.title}/>
        <h1 className="w3-center w3-cyan"><b>{this.props.title}</b></h1>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
        >
          <div>
          <h2>Hello</h2>
          <button onClick={this.closeModal}>close</button>
          <div>I am a modal</div>
          </div>
          </Modal>
      </div>
    )
  }
}
export default Singularsnack;
