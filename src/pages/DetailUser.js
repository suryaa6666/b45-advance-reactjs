import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

// import necessary hooks from react-router-dom
import { useParams } from "react-router-dom";

import dataFilm from "../fakeData/data";

const DetailUser = () => {
  const [data, setData] = useState(null);

  // call that hooks here and store to variable
  const params = useParams();

  console.log("ini paramsku :", params);

  console.log("ini data filmku:", dataFilm);

  // don't worry about this, we'll cover later
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${params.robert}`)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        console.log(json);
      });
    return () => {
      setData(null);
    };
  }, []);

  return (
    // code element inside Container
    // display information that stored in data
    // console.log first to see what information that you get from fetching
    <Container className="text-center">
      <h1>{data?.name}</h1>
      <h1>{data?.phone}</h1>
      {dataFilm.map((value, index) => (
        <>
          <img src={value.image} />
          <h1>{value.title}</h1>
          <h1>{value.year}</h1>
        </>
      ))}
    </Container>
  );
};

export default DetailUser;
