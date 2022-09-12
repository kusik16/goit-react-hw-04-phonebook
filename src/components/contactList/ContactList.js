import PropTypes from 'prop-types';
import contactList from './ContactList.module.css';

const ContactList = ({ filteredContacts, onDeleteContact }) => {
  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => {
        return (
          <li className={contactList.item} key={id}>
            {name}: {number}
            <button
              className={contactList.btn}
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
  filteredContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
