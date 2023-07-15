import { Suspense } from 'react';
import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

// import styled from "styled-components";

export const SharedLayout = () => {
  return (
    <>
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to='/contacts'>Phonebook</NavLink>
    </nav>
    <Suspense fallback={<div>Loading...</div>}>
    <Outlet />
    </Suspense>
    </>
  );
};
