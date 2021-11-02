import React from 'react';
import RecipeList from '../Components/RecipeList';
import SearchForm from '../Components/SearchForm';
const Home = () => {
  return (
    <main>
      <SearchForm />
      <RecipeList />
    </main>
  );
};

export default Home;
