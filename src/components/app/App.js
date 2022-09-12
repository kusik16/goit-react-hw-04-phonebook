import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import ContactForm from '../contactForm/ContactForm';
import Filter from '../filter/Filter';
import ContactList from '../contactList/ContactList';

import app from './App.module.css';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    if (localStorage.getItem('contacts')) {
      setContacts(JSON.parse(localStorage.getItem('contacts')));
    }
  }, []);

  const onFilter = e => {
    setFilter(e.target.value);
  };

  const onAddContact = (name, number) => {
    if (contacts.filter(contact => contact.name === name).length >= 1) {
      alert(`${name} is already in contacts`);
      return;
    }

    if (contacts.filter(contact => contact.number === number).length >= 1) {
      alert(`${number} is already in contacts`);
      return;
    }

    const newUser = {
      name,
      number,
      id: nanoid(),
    };

    localStorage.setItem('contacts', JSON.stringify([newUser, ...contacts]));

    setContacts([newUser, ...contacts]);
  };

  const onDeleteContact = id => {
    localStorage.setItem(
      'contacts',
      JSON.stringify(contacts.filter(contact => contact.id !== id))
    );

    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const filteredContacts = !filter
    ? contacts
    : contacts.filter(
        contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase()) ||
          (contact.number + '').includes(filter)
      );

  return (
    <div>
      <h1 className={app.title}>Phonebook</h1>
      <ContactForm onAddContact={onAddContact} />
      <h2 className={app.title}>Contacts</h2>
      <Filter onFilter={onFilter} />
      <ContactList
        filteredContacts={filteredContacts}
        onDeleteContact={onDeleteContact}
      />
    </div>
  );
};

export default App;
