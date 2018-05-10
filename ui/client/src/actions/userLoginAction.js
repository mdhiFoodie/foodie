import { userLogin } from './type';

export const usersInfo = (info) => {
  return {
    type: userLogin,
    usersInformation: info
  };
};

