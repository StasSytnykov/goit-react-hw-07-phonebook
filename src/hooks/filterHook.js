import { useDispatch, useSelector } from 'react-redux';
import { filterAction } from 'redux/contacts/filterSlice';
import { onFilterChange } from 'redux/contacts/filterSlice';

export const useFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(onFilterChange);
  const onChangeFilter = event => dispatch(filterAction.changeFilter(event));

  return { filter, changeFilter: onChangeFilter };
};
