import PropTypes from 'prop-types';
import ContactListItem from 'components/contactListItem/ContactListItem';

const ContactList = ({ filteredContacts, onDeleteContact }) => {
  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => {
        return (
          <ContactListItem
            key={id}
            id={id}
            name={name}
            number={number}
            onDeleteContact={onDeleteContact}
          />
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
