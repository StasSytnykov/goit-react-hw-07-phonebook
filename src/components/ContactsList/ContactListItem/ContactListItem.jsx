import PropTypes from 'prop-types';
import { useDeleteContactMutation } from 'redux/contacts/contactsSlice';
import style from './ContactsListItem.module.css';

export const ContactListItem = ({ name, number, id }) => {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();
  return (
    <li className={style.list}>
      <p>
        {name}: {number}
      </p>
      <button
        className={style.button}
        disabled={isLoading}
        onClick={() => deleteContact(id)}
        ype="button"
      >
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
