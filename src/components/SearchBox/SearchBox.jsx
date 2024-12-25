import css from "./SearchBox.module.css";
import { useSelector, useDispatch } from "react-redux";
import { changeNameFilter, changeNumberFilter} from "../../redux/filters/slice";
import {selectFilters} from "../../redux/filters/selectors";

const SearchBox = () => {
  const dispatch = useDispatch();
  const { name, number } = useSelector(selectFilters);
  
  return (
      <div className={css.searchBoxContainer}>
      <label className={css.searchBoxLabel} htmlFor="search">Find contacts by name</label>
      <input className={css.searchBoxInput} type="text" name="search" value={name}
        onChange={(e) => dispatch(changeNameFilter(e.target.value))} placeholder="Search by name"></input>
      <label className={css.searchBoxLabel} htmlFor="numberSearch">Find contacts by number</label>
      <input
        className={css.searchBoxInput}
        type="text"
        name="numberSearch"
        value={number}
        onChange={(e) => dispatch(changeNumberFilter(e.target.value))}
        placeholder="Search by number"
      />
      </div>
  )
}

export default SearchBox