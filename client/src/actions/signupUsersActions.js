import { signupData } from './type';
import axios from 'axios';

// export const userSignup = (body) => async dispatch => {
//   dispatch({type: signupData})
//   const data = await axios.post('http://localhost:3000/api/auth/signup', body);
//   try {
//       return 
//   } 
//   catch(err) {
//     console.log('Is not working', err);
//   }
// };

export const userSignup = (userInfo) => {
  return {
    type: signupData,
    usersInformation: userInfo
  }
};