import React from 'react';
import { Link } from 'react-router-dom';

const Recipe = ({ name, author, rating, id, img }) => {
  return (
    <article className='recipe'>
      <div className='img-container'>
        <img src={img} alt='' className='recipe-image' />
        <h3 className='rating'>
          <span className='rating-icon'>
            <i className='fas fa-star'></i>
          </span>

          {rating}
        </h3>
        <span className='search-icon'>
          <i className='fas fa-search'></i>
        </span>
      </div>
      <div className='recipe-footer'>
        <h3>{name}</h3>
        <h4>{author}</h4>
        <Link to={`/recipes/${id}`} className='btn btn-primary btn-details'>
          Details
          <span className='icon-btn'>
            <i class='fas fa-angle-double-right'></i>
          </span>
        </Link>
      </div>
    </article>
  );
};

export default Recipe;
