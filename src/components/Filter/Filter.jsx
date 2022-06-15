import { useFilter } from 'hooks/filterHook';
import style from './Filter.module.css';

export const Filter = () => {
  const { filter, changeFilter } = useFilter();

  return (
    <div>
      <label>
        <p>Find contacts by name</p>
        <input
          className={style.input}
          value={filter}
          type="text"
          name="filter"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={event => changeFilter(event.target.value)}
        />
      </label>
    </div>
  );
};
