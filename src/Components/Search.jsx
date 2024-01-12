/* eslint-disable react/prop-types */
function Search({ value, onChange, children }) {
  return (
    <div>
      <label htmlFor="search">{children}</label>
      <input
        id="search"
        type="text"
        value={value}
        onChange={onChange}
        placeholder="search"
      />
    </div>
  );
}

export default Search