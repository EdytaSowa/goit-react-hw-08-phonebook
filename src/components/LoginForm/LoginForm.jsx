import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import css from './LoginForm.module.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <Box className={css.box}>
        <TextField label="Email" variant="outlined" type="email" name="email" className={css.item}/>
        <TextField label="Password" variant="outlined" type="password" name="password" />
        
      </Box>

  
      <Button variant="contained" type="submit">
        Log in
      </Button>
    </form>
  );
};
