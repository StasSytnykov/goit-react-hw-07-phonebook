import { ContactListItem } from './ContactListItem';
import { useFilter } from 'hooks/filterHook';
import { useGetContactsQuery } from 'redux/contacts/contactsSlice';

export const ContactsList = () => {
  const { filter } = useFilter();
  const { data: contacts } = useGetContactsQuery();

  const getAddedContacts = () => {
    const toLowerCaseFilter = filter;
    if (!contacts) {
      return;
    }
    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(toLowerCaseFilter)
    );
  };

  const filterContact = getAddedContacts();

  return (
    <div>
      <ul>
        {filterContact &&
          filterContact.map(({ name, phone, id }) => (
            <ContactListItem key={id} name={name} number={phone} id={id} />
          ))}
      </ul>
    </div>
  );
};
