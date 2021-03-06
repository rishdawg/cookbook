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
      <div className="w3-card-4 w3-container w3-half w3-mobile "onClick={this.openModal}>
        <img className="wdt hgt" src={this.props.image} alt={this.props.title}/>
        <h1 className="w3-center w3-cyan"><b>{this.props.title}</b></h1>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          overlayClassName = "overlay"
          className="marg modal"
        >
          <div>

            <header className="w3-container w3-cyan">
              <span onClick={this.closeModal} className="w3-button w3-display-topright w3-xlarge w3-hover-red">&times;</span>
              <h2 className="w3-center">{this.props.title}</h2>
            </header>

          <div className="w3-container  w3-white ">

            <div className="w3-half w3-left w3-mobile">
              <ul>{this.ingredlistItems}</ul>
            </div>
            <div className="w3-half w3-right w3-white">
              <ol>{this.instruclistItems}</ol>
            </div>
          </div>



            <footer className="w3-container w3-cyan w3-center">
              <h3>The Rish Dawg  Process</h3>
            </footer>
          </div>
          </Modal>
      </div>
    )
  }
}
export default Singularsnack;
