import { useRouter } from 'next/router';
import { USER_DATA, USER_TOKEN } from '../constants/localStorage';
import store from '../../store';
import {
  setUserData,
  setUserToken,
  userLogout,
} from '../../components/User/actions';
import { showToastError } from '../toast';

function useAuth() {
  const route = useRouter();

  function login(user) {
    const newUser = {
      id: user.id,
      email: user.email,
      name: user.name,
    };

    localStorage.setItem(USER_DATA, JSON.stringify(newUser));
    localStorage.setItem(USER_TOKEN, user.token);
    store.dispatch(setUserData(newUser));
    store.dispatch(setUserToken(user.token));
    route.push('/notes');
  }

  function userIsLogged() {
    const state = store.getState();
    const { user } = state;
    const userLocalStorage = {
      data: JSON.parse(localStorage.getItem(USER_DATA)),
      token: localStorage.getItem(USER_TOKEN),
    };

    if ((!user.data || !user.token) && !userLocalStorage.token) {
      return false;
    }

    return true;
  }

  function checkAuth() {
    const state = store.getState();
    const { user } = state;
    const userLocalStorage = {
      data: JSON.parse(localStorage.getItem(USER_DATA)),
      token: localStorage.getItem(USER_TOKEN),
    };

    if ((!user.data || !user.token) && !userLocalStorage.token) {
      route.push('login');
      showToastError('Entre na sua conta para ter acesso a essa página.');
    } else if ((!user.data || !user.token) && userLocalStorage.token) {
      store.dispatch(setUserToken(userLocalStorage.token));
      store.dispatch(setUserData(userLocalStorage.data));
    }
  }

  function logout() {
    localStorage.removeItem(USER_DATA);
    localStorage.removeItem(USER_TOKEN);
    store.dispatch(userLogout());
  }

  return { login, checkAuth, logout, userIsLogged };
}

export default useAuth;
