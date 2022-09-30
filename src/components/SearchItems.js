import React from "react";
import Header from "./Header";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const MovieCard = ({ movie }) => {
  const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <>
      <Card
        style={{
          width: "25rem",
          top: "20px",
          marginRight: "20px",
          marginLight: "20px",
          marginBottom: "20px",
          float: "left",
        }}
      >
        <Card.Img variant="top" src={posterUrl} class="overflow-hidden" />
        <Card.Body>
          <Card.Title>{movie.original_title}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </>
  );
};
const SearchItems = ({ keyword, searchResults }) => {
  const title = keyword;
  const searchResultsHtml = searchResults.map((object, i) => {
    return <MovieCard movie={object} key={i} />;
  });
  return (
    <>
      <Header text={title} />
      {searchResultsHtml}
    </>
  );
};

export default SearchItems;
