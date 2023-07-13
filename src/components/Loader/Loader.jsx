import { Bars } from 'react-loader-spinner';
import css from './Loader.module.css'


export const Loader = () => {
  return (
    <div className={css.Loader}>
   <Bars
      height="300"
      width="300"
      color="#000000"
      ariaLabel="bars-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
    </div>
  );
}

