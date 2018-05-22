import React, { Component } from 'react';  
import { usersInformation } from '../../actions/type';
import fontawesome from '@fortawesome/fontawesome'
import faStar from '@fortawesome/fontawesome-free-solid/faStar'
import axios from 'axios';
import moment from 'moment'

fontawesome.library.add(faStar)

import '../Businesses/Business.scss';

class Reviews extends Component {
  constructor() {
    super();

    this.state = {};
  }

  async componentWillMount() {
    try {
    const { data } = await axios.get(`http://localhost:3000/api/reviews/getReviews/${location.pathname.split('/businessProfile/').join('').split('~')[1]}`)
    this.setState({
      data:data,
      moment: moment(data.createdat).fromNow()
    });
    console.log('this is the axios to get the reviews: ', data);
    }
    finally {
    }
  }

  render() {
    return(
      <div>
        {
        !!this.state.data ?
        
          
          this.state.data.map(review => 
            <div key={`${review.id}`} className='reviewEntry'>
              <div className='reviewPhotoAndName'>
                <img className='reviewPhoto' src={`${review.profilepicture}`}/>
                <div className='reviewerName'>
                  {review.name}
                </div>
              </div>
              <div className='reviewRating'>
                {
                  Array(Math.ceil(review.rating) || 1).fill(1).map((star, i) => {
                    return (
                      <div key={`${i} ${review.id} star`}><i className="fas fa-star starIcon"></i></div>
                    )
                  }) 
                }
                <div className='reviewTime'>
                  {this.state.moment}
                </div> 
                </div>
                <div className='reviewText'>
                  {review.comment}
                </div>  
                 
            </div>
          )
        :     
        <div>'This business has no reviews'</div>
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  // usersData is the key coming from our root reducers with the value of our reducer file
  getUsersInformation: state.getUsersInformation
  
});


export default Reviews;