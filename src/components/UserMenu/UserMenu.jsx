import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const name=user.name;

  return (
    <div className={css.wrapper}>
      {/* <p className={css.username}>Welcome, {user.name}</p> */}
    <p>Welcome, <span className={css.name}> {name.charAt(0).toUpperCase() + name.slice(1)}</span></p>
  

      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};
