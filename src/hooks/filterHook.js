import { useDispatch, useSelector } from 'react-redux';
import { contactsActions } from 'redux/contacts';
import { onFilterChange } from 'redux/contacts/contactsSlice';

export const useFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(onFilterChange);
  const onChangeFilter = changeFilter =>
    dispatch(contactsActions.changeFilter(changeFilter));

  return { filter, changeFilter: onChangeFilter };
};
