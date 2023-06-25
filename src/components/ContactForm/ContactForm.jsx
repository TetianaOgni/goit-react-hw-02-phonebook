import React, { Component } from 'react';
import shortid from 'shortid';


class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  
  handleInputChange=(event)=>{

  this.setState({
    [event.target.name]: event.target.value, 
  })

  }
  handleSubmit=event=>{
    event.preventDefault()

    const contactData = {
        name: this.state.name,
        number: this.state.number,}
     
   this.props.onSubmitProps(contactData)

   this.reset()
}

reset=()=>{
    this.setState({name:'', number:''})
}

  nameInputId = shortid.generate();
  phoneInputId = shortid.generate();

  render() {
    const {name, number} = this.state
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor={this.nameInputId}>Name</label>
          <input
            value={name}
            onChange={this.handleInputChange}
            type="text"
            name="name"
            id={this.nameInputId}
            pattern="^[a-zA-Zа-яА-Я]+(([' \s][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <label htmlFor={this.phoneInputId}>Number</label>
          <input
            value={number}
            onChange={this.handleInputChange}
            type="tel"
            name="number"
            pattern="\\+?\\d{1,4}[-\\s]?\\(\\d{1,3}\\)[-\\s]?\\d{1,4}[-\\s]?\\d{1,4}[-\\s]?\\d{1,9}"            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required/>
          <button type="submit">Add contact</button>
        </form>
       
      </div>
    );
  }
}


export default ContactForm;
