import { Bars } from 'react-loader-spinner';
import css from './Loader.module.css'


export const Loader = () => {
  return (
    <div className={css.Loader}>
   <Bars
      height="300"
      width="300"
      color="rgb(22, 37, 102)"
      ariaLabel="bars-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
    </div>
  );
}

