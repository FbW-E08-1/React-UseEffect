import { useEffect } from 'react';
import einstein from '../assets/einstein.jpg';

const Pic = () => {
  useEffect(() => {
    let interval = setInterval(() => {
      console.log('Mounted');
    }, 1000);

    //Cleanup our rubbish
    return () => {
      clearInterval(interval);
      console.log('Unmounted');
    };
  }, []);

  return (
    <aside>
      <img src={einstein} alt='' />
    </aside>
  );
};

export default Pic;
