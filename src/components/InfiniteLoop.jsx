import { useState, useEffect } from 'react';

//componentDidMount     = Only run the side effect once.
//componentDidUpdate    = Will run every time a condition updates.
//componentWillUnmount  = Will run when the component un-mounts.

const InfiniteLoop = () => {
  //const [data, setData] = useState(null);
  const [count, setCount] = useState(0);

  //   useEffect(() => {
  //     fetch('https://jsonplaceholder.typicode.com/posts')
  //       .then((response) => response.json())
  //       .then((data) => setData(data));
  //         .catch((error) => console.error(error.message))
  //   }, []);

  useEffect(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  console.log('rendered');
  return <p>Mounted</p>;
};

export default InfiniteLoop;
