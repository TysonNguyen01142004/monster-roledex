import "./search-box.style.css";
const SearchBox = ({ placeholder, type, className, onChangeHandler }) => {
  return (
    <div>
      <input
        placeholder={placeholder}
        type={type}
        className={`search-box ${className}`}
        onChange={onChangeHandler}
      />
    </div>
  );
};
export default SearchBox;
