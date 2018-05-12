import { signupData } from './type';
import axios from 'axios';

export const userSignup = (userInfo) => {
  return {
    type: signupData,
    usersInformation: userInfo
  }
};