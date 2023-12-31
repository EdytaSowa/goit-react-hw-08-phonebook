import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { ContactList } from 'components/ContactList/ContactList';
import { ContactForm } from 'components/ContactForm/ContactForm';

import { selectIsLoading } from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';
import {Filter} from '../components/Filter/Filter';
import css from './Contacts.module.css'
import { Loader } from 'components/Loader/Loader';


export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.app}>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <ContactForm/>
      <div>{isLoading && <Loader/>}</div>
      <Filter />
      <ContactList />
    </div>
  );
}

