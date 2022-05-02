import React,{useState,useEffect} from 'react';
import PropTypes from 'prop-types';

import './movie-list.scss';

import { SwiperSlide,swiper, Swiper } from 'swiper/react';

import {Link} from 'react-router-dom';

import Button from '../button/Button';

import pmdbApi,{ category} from '../../api/pmdbApi';

import apiConfig from '../../api/apiConfig';

import MovieCard from  '../movie-card/MovieCard';

const MovieList = props => {

    const[items, setItems] = useState([]);

    useEffect(() =>{
        const getList = async () =>{
            let response = null;
            const params = {}

            if( props.type !=='similar'){
                switch( props.category ){
                    case category.movie:
                       response = await pmdbApi.getMoviesList(props.type,{params}) ;
                       break;

                       default:
                           response = await pmdbApi.getTvList(props.type,{params})
                }
            }else{
                response = await pmdbApi.simlar(props.category,props.id);
            }
            setItems(response.results);
        }
        getList();
    },[])
  return (
    <div className="movie-list">
      <Swiper
        grabCursor={true}
        spaceBetween={10}
        slidesPerView={'auto'}
      >
          {
              items.map((item,i)=>(
                  <SwiperSlide key={i}>
                      <MovieCard  item={item} category={props.category}/>
                  </SwiperSlide>
              ))
          }
      </Swiper>

    </div>
  )
}

MovieList.propTypes = {
    category: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
}

export default MovieList