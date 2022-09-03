import PropTypes from 'prop-types'

import './contactList.css';

const ContactList = ({ filteredContacts, onDeleteContact }) => {
  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => {
        return (
          <li className="contacts-list__item" key={id}>
            {name}: {number}
            <button
              className="contacts-list__item_button"
              onClick={() => onDeleteContact(id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;

ContactList.propTypes = {
  filteredContacts: PropTypes.array.isRequired,
	onDeleteContact: PropTypes.func.isRequired,
};