import css from "./SearchBox.module.css";
import { useSelector, useDispatch } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);
  
  return (
      <div className={css.searchBoxContainer}>
      <label className={css.searchBoxLabel} htmlFor="search">Find contacts by name</label>
      <input className={css.searchBoxInput} type="text" name="search" value={filter}
        onChange={(e) => dispatch(changeFilter(e.target.value))}></input>

      </div>
  )
}

export default SearchBox