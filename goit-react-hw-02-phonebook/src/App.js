import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactForm from './Components/ContactForm.jsx';
import Filter from './Components/Filter';
import ContactItem from './Components/ContactItem.jsx';
import style from './ModuleStyles/PhoneBook.module.css';
export default class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleFilter = (e) => {
    this.setState({ filter: e.target.value });
  };

  showFilteredContacts = () => {
    const { filter, contacts } = this.state;

    return contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()));
  };

  addContact = (name, number) => {
    let contactCard = { name: name, number: number, id: uuidv4() };

    this.setState((prevState) => {
      return { contacts: [...prevState.contacts, contactCard] };
    });
  };

  deleteContact = (id) => {
    this.setState((prevState) => {
      return {
        contacts: prevState.contacts.filter((contact) => contact.id !== id),
      };
    });
  };

  render() {
    const { contacts, filter } = this.state;

    return (
      <div className={style.phonebook}>
        <h2>Phonebook</h2>
        <ContactForm contacts={contacts} addContact={this.addContact} />
        <h2>Contacts</h2>
        {contacts.length > 1 && <Filter handleFilter={this.handleFilter} filter={filter} />}
        <ul>
          {this.showFilteredContacts().map(({ name, id, number }) => (
            <ContactItem
              key={id}
              onRemove={this.deleteContact}
              name={name}
              id={id}
              number={number}
            />
          ))}
        </ul>
      </div>
    );
  }
}
