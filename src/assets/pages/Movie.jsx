import axios from "axios";
import React, { useEffect, useState } from "react";
import ListCard from "../../components/UI/ListCard";
import { Container, Row, Col } from "react-bootstrap";

const Movie = () => {

  const API = "http://www.omdbapi.com/?s=iron&apikey=61ca2fdb";
  const [data, setData] = useState([]);
  //   const response = await axios.get(API);

  const getMovieData = async () => {
    try {
      const response = await axios.get(API);
      setData(response.data.Search || []);
    } catch (error) {
      console.log("Failed to fetch move", error);
    }
  };

  useEffect(() => {
    getMovieData();
  }, []);

  return (
  <Container fluid className="bg-dark">
     <Row>
     {data.map((curEle)=>{
            return <>         
                <Col xl={2} className="my-4"> 
               <ListCard key={data.imdbID} movieData={curEle} />
               </Col>
            </>
     })}
    
     </Row>
</Container>
  )
};

export default Movie;
