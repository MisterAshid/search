const Search = ({ searchValue, handleChange }) => {
  return (
    <div>
      <p>Search.Value: {searchValue}</p>
      <input placeholder="Search" onChange={handleChange}></input>
    </div>
  );
};

export default Search;
