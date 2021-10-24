import { useQuery } from 'react-query';

import { GET_ALL_USERS_QY } from './keys';
import usersApi from '@Services/users';
export const useGetAllUsers = () => {
  const users = useQuery(GET_ALL_USERS_QY, usersApi.getUsers, {});
  return users;
};
