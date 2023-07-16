import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import css from './RegisterForm.module.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <Box className={css.box}>
        <TextField
          label="Username"
          variant="outlined"
          type="text"
          name="name"
          className={css.item}
        />
        <TextField
          label="Email"
          variant="outlined"
          type="email"
          name="email"
          className={css.item}
        />
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          name="password"
          className={css.item}
        />
      </Box>

    
      <Button variant="contained" type="submit">
        Register
      </Button>
    </form>
  );
};
