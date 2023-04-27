import PropTypes from 'prop-types';
import css from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter, getFilter } from 'redux/contacts-slice';

function Filter() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const changeFieldFilter = e => dispatch(changeFilter(e.currentTarget.value));

  return (
    <label className={css.label}>
      <p className={css.text}>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        value={filter}
        onChange={changeFieldFilter}
      />
    </label>
  );
}

Filter.prototype = {
  filter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

export default Filter;
