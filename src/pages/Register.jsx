import css from './Register.module.css'

const Register = () => {
  return (
    <form className={css.form}>
      <label>Name</label>
      <input type="text" />

      <label>E-mail</label>
      <input type="text" />

      <label>Password</label>
      <input type="password" />

      <button>Register</button>
    </form>
  );
};

export default Register;
