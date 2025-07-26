import React, { useEffect, useState } from "react";
import { Container, Row, Col, Dropdown } from "react-bootstrap";
import ListCard from "../../components/UI/ListCard";
import { getMovie } from "../services/GetServices";


const Movie = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [selectedType, setSelectedType] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [startDate, setStartDate] = useState(new Date());

  const getMovieData = async () => {
    try {
      const response = await getMovie();
      const movies = response.data.Search || [];
      setData(movies);
      setFilter(movies); // initially show all
    } catch (error) {
      console.log("Failed to fetch movies", error);
    }
  };

  useEffect(() => {
    getMovieData();
  }, []);

  // Filter handler
  const handleFilter = (type, year) => {
    let filtered = data;

    if (type) {
      filtered = filtered.filter((item) => item.Type === type);
    }

    if (year) {
      filtered = filtered.filter((item) => item.Year === year);
    }

    setFilter(filtered);
  };

  // Update filter on type or year change
  useEffect(() => {
    handleFilter(selectedType, selectedYear);
  }, [selectedType, selectedYear]);

  // Extract unique types and years for dropdown options
  // const uniqueTypes = [...new Set(data.map((item) => item.Type))];
  // const uniqueYears = [...new Set(data.map((item) => item.Year))];

  return (
    <Container fluid className="bg-dark text-white py-3">
      <Row className="mb-3">
        <Col md={9}></Col>
        <Col md={3} className="d-flex justify-content-evenly">
          <Dropdown onSelect={(e) => setSelectedType(e)}>
            <Dropdown.Toggle variant="success" id="dropdown-type">
              {selectedType || "Select Type"}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>All</Dropdown.Item>
              <Dropdown.Item>Movie</Dropdown.Item>
              <Dropdown.Item>Series</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          {/* <Dropdown onSelect={(e) => setSelectedYear(e)}>
            <Dropdown.Toggle variant="success" id="dropdown-year">
              {selectedYear || "Select Year"}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item eventKey="">All</Dropdown.Item>
              {uniqueYears.map((year) => (
                <Dropdown.Item key={year} eventKey={year}>
                  {year}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown> */}
         <DatePicker selected={startdate}/>

        </Col>
      </Row>

      <Row>
        {filter.length > 0 ? (
          filter.map((curEle) => (
            <Col key={curEle.imdbID} xl={2} className="my-4">
              <ListCard movieData={curEle} />
            </Col>
          ))
        ) : (
          <Col>
            <p>No movies match the filter criteria.</p>
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default Movie;
