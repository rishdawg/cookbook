import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import ReactModal from 'react-modal';
import '../w3.css';
import './home.css';



class Singularsnack extends Component{
  constructor(props) {
    super(props);
    const ingred = this.props.ingredients;
    this.ingredlistItems = ingred.map((ingred) =>
      <li>{ingred}</li>
    );
    const instruc = this.props.instructions;
    this.instruclistItems = instruc.map((instruc) =>
      <li>{instruc}</li>
    );
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
          className="w3-black marg modal"
        >
          <div>
          <button onClick={this.closeModal}>close</button>
          <ul>{this.ingredlistItems}</ul>
          <ol>{this.instruclistItems}</ol>
          </div>
          </Modal>
      </div>
    )
  }
}
export default Singularsnack;
