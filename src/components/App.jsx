import React, { lazy } from 'react';

// import { ContactForm } from './ContactForm/ContactForm';
// import { Filter } from './Filter/Filter';
// import { ContactList } from './ContactList/ContactList';
// import { Loader } from './Loader/Loader';
// import { useEffect } from 'react';
// import { selectIsLoading, selectError } from '../redux/selectors';
// import { useDispatch } from 'react-redux';

// import { useSelector } from 'react-redux';
// import { fetchContacts } from '../redux/operations';
// import css from './App.module.css';
import { SharedLayout } from 'utils/SharedLayout';
import { Route, Routes } from 'react-router-dom';

const Home = lazy(()=> import('../pages/Home'));
const Login = lazy(()=> import('../pages/Login'));
const Register = lazy(()=> import('../pages/Register'));
const Phonebook = lazy(()=> import('../pages/Phonebook'))


// const MyComponent = lazy(() => import("path/to/MyComponent"));


export const App = () => {
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  return (
    <div
      // className={css.app}
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   flexDirection: 'column',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 20,
      //   color: '#010101',
      // }}
    >
    
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route path='/' element={<Home/>}>Home</Route>
        <Route path='/register' element={<Register/>}>Register</Route>
        <Route path='/login' element={<Login/>}>Login</Route>
        <Route path='/contacts' element={<Phonebook/>}>Login</Route>
        <Route/>
        {/* <Route path="some-path" element={<MyComponent />} /> */}
        {/* Inne trasy */}
      </Route>
    </Routes>
  

      {/* <h1>Phonebook</h1>
      <ContactForm />

      <h2> Contacts </h2>
      <Filter />
      {isLoading && !error && <Loader />}
      <ContactList /> */}
    </div>
  );
};
