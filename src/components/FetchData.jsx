import { useState, useEffect } from 'react';

const FetchData = () => {
  const [data, setData] = useState(null);
  const [search, setSearch] = useState(0);

  const url = `https://jsonplaceholder.typicode.com/posts/${search}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchData();
  }, [url]);
  console.log(url);

  return (
    <div>
      {data && <p>{data.title}</p>}
      <button onClick={() => setSearch((prevSearch) => prevSearch + 1)}>
        Next post
      </button>
    </div>
  );
};

export default FetchData;
