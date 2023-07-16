import css from './Filter.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from '../../redux/contacts/selectors';
import { setFilter } from '../../redux/contacts/filterSlice';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleChange = event => {
    const { value } = event.currentTarget;
    dispatch(setFilter(value));
  };

  return (
    <div className={css.filter}>

    <Box>
      <TextField label="Find contacts by Name"  className={css.filterName}
        type="text"
        name="filter"
        placeholder="Enter filter"
        value={filter}
        onChange={handleChange}/>
    </Box>


     
    
    </div>
  );
};
