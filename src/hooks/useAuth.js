// export const selectIsLoggedIn = state => state.auth.isLoggedIn;

// export const selectUser = state => state.auth.user;

// export const selectIsRefreshing = state => state.auth.isRefreshing;

import { useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  selectUser,
  selectIsRefreshing,
  selectIsLoading,
} from 'redux/auth/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const isRefreshing = useSelector(selectIsRefreshing);
  const isLoading = useSelector(selectIsLoading);
  return {
    isLoading,
    isLoggedIn,
    isRefreshing,
    user,
  };
};
