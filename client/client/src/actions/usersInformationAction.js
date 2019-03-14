import { usersInformation } from './type';

export const getUserInfo = (information) => {
  return {
    type: usersInformation, 
    info: information 
  }
}