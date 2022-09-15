import PropTypes from 'prop-types';
import contactListItem from './ContactListItem.module.css';

const ContactListItem = ({ name, number, id, onDeleteContact }) => {
  return (
    <li className={contactListItem.item}>
      {name}: {number}
      <button
        className={contactListItem.btn}
        onClick={() => onDeleteContact(id)}
      >
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactListItem;
