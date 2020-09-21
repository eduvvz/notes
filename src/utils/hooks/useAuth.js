import { useRouter } from 'next/router';
import { USER_DATA, USER_TOKEN } from '../constants/localStarage';
import store from '../../store';
import { setUserData, setUserToken } from '../../components/User/actions';

function useAuth() {
  const route = useRouter();

  function login(user) {
    const newUser = {
      id: user.id,
      email: user.email,
      name: user.name,
    };

    localStorage.setItem(USER_DATA, JSON.stringify(newUser));
    localStorage.setItem(USER_TOKEN, JSON.stringify(user.token));
    store.dispatch(setUserData(user));
    store.dispatch(setUserToken(user.token));
    route.push('/notes');
  }

  function checkAuth() {}

  return [login, checkAuth];
}

export default useAuth;
