import React, { useEffect } from 'react';
import { useGlobalContext } from '../context';

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = React.useRef();

  useEffect(() => {
    searchValue.current.focus();
  }, []);

  const searchRecipe = () => {
    setSearchTerm(searchValue.current.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <section className='section search'>
      <form className='search-form' onSubmit={submitHandler}>
        <div className='form-control'>
          <label htmlFor='name'>Search your fav recipe...</label>
          <input
            type='text'
            id='name'
            ref={searchValue}
            onChange={searchRecipe}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
