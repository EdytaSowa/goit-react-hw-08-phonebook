import { useDispatch, useSelector } from 'react-redux';

import { selectContacts, selectFilter } from 'redux/contacts/selectors';

import css from './ContactList.module.css';
import { deleteContact } from 'redux/contacts/operations';
import PhoneIphoneTwoToneIcon from '@mui/icons-material/PhoneIphoneTwoTone';
import Button from '@mui/material/Button';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase().trim())
  );

  const dispatch = useDispatch();
  const handleDelete = id => dispatch(deleteContact(id));

  return (
    <ul className={css.list}>
      {filteredContacts.map(contact => (
        <li className={css.listItem} key={contact.id}>
          <PhoneIphoneTwoToneIcon sx={{fontSize: 20}}/>
          {' '}
          <span className={css.span}> {contact.name} {contact.number}</span>

          <Button variant="contained"  className={css.button}
            type="button"
            onClick={() => handleDelete(contact.id)}  sx={{fontSize: 12}}>
          Delete
      </Button>


          {/* <button
            className={css.button}
            type="button"
            onClick={() => handleDelete(contact.id)}
          >
            {' '}
            Delete{' '}
          </button> */}
        </li>
      ))}
    </ul>
  );
};
