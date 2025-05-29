import { Row, Button, Card, Col } from 'react-bootstrap';

const ListCard=({movieData})=> {
  const {Poster, imdbID, Title, Year, Type} = movieData;
  return (
    <>
     <Card>
      <Card.Img className='img-thumbnail' variant="top" src={Poster} alt={imdbID} />
      <Card.Body>
        <Card.Title className='fs-6'>{Title}</Card.Title>
        <Row className='my-2'>
          <Col xl={8}>
        <Card.Text className='fs-6'>{Year}</Card.Text>
        </Col>
        <Col xl={4}>
        <Card.Text className='fs-6 text-uppercase text-end'>{Type}</Card.Text>
        </Col>
        </Row>
        <Button variant="primary">Go to Link</Button>
      </Card.Body>
    </Card>
    
      
       
        
      
      
   
    
    </>
  );
}

export default ListCard;