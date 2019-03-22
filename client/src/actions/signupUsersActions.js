import { signupData } from './type';

export const userSignup = userInfo => {
  return {
    type: signupData,
    usersInformation: userInfo,
  };
};
