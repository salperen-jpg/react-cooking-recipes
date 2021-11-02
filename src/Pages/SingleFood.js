import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useGlobalContext } from '../context';

const SingleFood = () => {
  const { id } = useParams();
  console.log(id);
  const { recipes } = useGlobalContext();
  const [index, setIndex] = useState(id);
  const [item, setItem] = useState(recipes[index - 1]);

  const { author, name, rating, img } = item;

  return (
    <section className='section recipe-section'>
      <div className='section-center'>
        <Link to='/' className='btn btn-primary back-btn'>
          back home
        </Link>
        <h2 className='section-title recipe-name'>{name}</h2>
        <div className='food'>
          <img src={img} alt={name} />
          <div className='food-info'>
            <p>
              <span className='food-data'> Name :</span> {name}
            </p>
            <p>
              <span className='food-data'> Author :</span> {author}
            </p>
            <p>
              <span className='food-data'> Rating :</span>
              <span className='rating-icon food-data'>
                <i className='fas fa-star '></i>
              </span>
              {rating}
            </p>

            <p>
              <span className='food-data'> RECIPE :</span> Lorem ipsum dolor,
              sit amet consectetur adipisicing elit. Explicabo, error?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleFood;
