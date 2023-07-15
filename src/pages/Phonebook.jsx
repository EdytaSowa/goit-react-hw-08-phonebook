import { ContactForm } from '../components/ContactForm/ContactForm';
import { Filter } from '../components/Filter/Filter';
import { ContactList } from '../components/ContactList/ContactList';
import { Loader } from '../components/Loader/Loader';
import { useEffect } from 'react';
import { selectIsLoading, selectError } from '../redux/selectors';
import { useDispatch } from 'react-redux';

import { useSelector } from 'react-redux';
import { fetchContacts } from '../redux/operations';
import css from '../components/App.module.css';

const Phonebook = () => {
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);
  
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(fetchContacts());
    }, [dispatch]);
  
    return (
        <div className={css.app}
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 20,
          color: '#010101',
        }}>
         <h1>Phonebook</h1>
        <ContactForm />
  
        <h2> Contacts </h2>
        <Filter />
        {isLoading && !error && <Loader />}
        <ContactList />
        
        
        </div>
        
        )
}

export default Phonebook;