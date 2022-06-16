import { ContactListItem } from './ContactListItem';
import { useContacts } from 'hooks/contactsHook';
import { useFilter } from 'hooks/filterHook';
import { useGetContactsQuery } from 'redux/contacts/contactsSlice';

export const ContactsList = () => {
  // const { contacts, deleteContact } = useContacts();
  const { filter } = useFilter();
  const { data: contacts } = useGetContactsQuery();
  console.log(contacts);

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
        {contacts &&
          contacts.map(({ name, phone, id }) => (
            <ContactListItem
              key={id}
              name={name}
              number={phone}
              id={id}
              // deleteContact={deleteContact}
            />
          ))}
      </ul>
    </div>
  );
};
