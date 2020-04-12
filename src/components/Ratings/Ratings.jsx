import React from "react";
import PropTypes from 'prop-types';
import { EmptyStar, FullStar,HalfStar } from '../UI/Icons/Icons.jsx';

const Ratings = (props) => {

    function createStars(){

        let stars = [];
        const ratingsValue = props.ratings;
        const flooredRatingsValue = Math.floor(props.ratings);
        const remainingRatingsValue = (ratingsValue-flooredRatingsValue).toFixed(1);
        const defaultCount = remainingRatingsValue > 0 ? 4 : 5;
        const remainingRatings = defaultCount - flooredRatingsValue;

        for(let i =0; i < flooredRatingsValue ; i++){
            stars.push(<span className={`${props.fullStarIcon}`} key={`${i}i`}><FullStar /></span>);
        }
        if(remainingRatingsValue > 0){
            stars.push(<span className={`${props.halfStarIcon}`} key={'j'}><HalfStar /></span>);
        }
        if(remainingRatings){
            for(let k =0; k < remainingRatings; k++){
                stars.push(<span className={`${props.emptyStarIcon}`} key={`${k}k`}><EmptyStar /></span>);
            }
        }
        return stars;
    }

    return (
        <div className={`${props.containerClassName}`}>
            { createStars() }{ props.totalVotes ? <span className='total-rating-votes'>({props.totalVotes})</span> : null}
        </div>
    );

}

Ratings.prototypes = {
    ratings: PropTypes.number.isRequired,
    totalVotes: PropTypes.number,
    containerClassName: PropTypes.string,
    fullStarIcon: PropTypes.string,
    halfStarIcon: PropTypes.string,
    emptyStarIcon: PropTypes.string,
}

export default Ratings;