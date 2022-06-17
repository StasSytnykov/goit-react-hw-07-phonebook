import { ContactListItem } from './ContactListItem';
import { useFilter } from 'hooks/filterHook';
import { useGetContactsQuery } from 'redux/contacts/contactsSlice';
import { useMemo } from 'react';

export const ContactsList = () => {
  const { filter } = useFilter();
  const { data: contacts } = useGetContactsQuery();

  const filteredContacts = useMemo(() => {
    return (
      contacts?.filter(contact =>
        contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
      ) ?? []
    );
  }, [filter, contacts]);

  return (
    <div>
      <ul>
        {filteredContacts &&
          filteredContacts.map(({ name, phone, id }) => (
            <ContactListItem key={id} name={name} number={phone} id={id} />
          ))}
      </ul>
    </div>
  );
};
