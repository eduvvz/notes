import { useRouter } from 'next/router';
import { USER_DATA } from '../constants/localStarage';
import store from '../../store';
import { setUserData } from '../../components/User/actions';

function useAuth() {
  const route = useRouter();

  function login(user) {
    localStorage.setItem(USER_DATA, JSON.stringify(user));
    store.dispatch(setUserData(user));
    route.push('/notes');
  }

  function checkAuth() {}

  return [login, checkAuth];
}

export default useAuth;
