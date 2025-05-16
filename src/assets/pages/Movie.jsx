import axios from "axios";
import React, { useEffect, useState } from "react";

const Movie = () => {
  const [data, setData] = useState([]);
  const API = "https://dog.ceo/api/breeds/image/random";

  //   const response = await axios.get(API);

  const getMovieData = async () => {
    try {
      const response = await axios.get(API);
      console.log(response);
      setData(response.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovieData();
  }, []);

  return <ul>
    {
        data.map((curEle)=>{
            return <Card key={}/>
        })
    }
  </ul>;
};

export default Movie;
