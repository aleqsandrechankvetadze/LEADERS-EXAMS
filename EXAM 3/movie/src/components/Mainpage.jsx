import React from 'react'

export default function Mainpage() {
  const search = [
    {
      "Title": "The Lego Movie",
      "Year": "2014",
      "imdbID": "tt1490017",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTg4MDk1ODExN15BMl5BanBnXkFtZTgwNzIyNjg3MDE@._V1_SX300.jpg"
    },
    {
      "Title": "The Simpsons Movie",
      "Year": "2007",
      "imdbID": "tt0462538",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMzIxN2IzOGItOTcyZi00MTkzLWE4ZjktZTdlOWFiYWE4NzlmXkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
      "Title": "Scary Movie",
      "Year": "2000",
      "imdbID": "tt0175142",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BZGRmMGRhOWMtOTk3Ni00OTRjLTkyYTAtYzA1M2IzMGE3NGRkXkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
      "Title": "The Super Mario Bros. Movie",
      "Year": "2023",
      "imdbID": "tt6718170",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BOGZlN2EzOTYtMzUzOS00NTM3LTg0MTQtZDVjZGM4YmJlNWNhXkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
      "Title": "Bee Movie",
      "Year": "2007",
      "imdbID": "tt0389790",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjE1MDYxOTA4MF5BMl5BanBnXkFtZTcwMDE0MDUzMw@@._V1_SX300.jpg"
    },
    {
      "Title": "Scary Movie 2",
      "Year": "2001",
      "imdbID": "tt0257106",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BZjZlOTgzNmUtNjZlYS00NWFjLTg4ZDktMWY4NDIxMjVjZjdhXkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
      "Title": "The Lego Batman Movie",
      "Year": "2017",
      "imdbID": "tt4116284",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTcyNTEyOTY0M15BMl5BanBnXkFtZTgwOTAyNzU3MDI@._V1_SX300.jpg"
    },
    {
      "Title": "Scary Movie 3",
      "Year": "2003",
      "imdbID": "tt0306047",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNDE2NTIyMjg2OF5BMl5BanBnXkFtZTYwNDEyMTg3._V1_SX300.jpg"
    },
    {
      "Title": "Scary Movie 4",
      "Year": "2006",
      "imdbID": "tt0362120",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjExNDQwM2QtYjFiNy00N2ZlLWE4ZGEtODdmYjY5NDdhNWE3XkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
      "Title": "Not Another Teen Movie",
      "Year": "2001",
      "imdbID": "tt0277371",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNjllYzVjNjItYjQ2Ni00OGU4LTlkYjItMDYxOTBlM2YzNDA5XkEyXkFqcGc@._V1_SX300.jpg"
    }
  ];

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', padding: 20 }}>
      {search.map(movie => (
        <div key={movie.imdbID} style={{ 
          width: 200, 
          margin: 10, 
          border: '1px solid #ccc', 
          borderRadius: 10, 
          padding: 10, 
          textAlign: 'center' 
        }}>
          <img 
            src={movie.Poster} 
            alt={movie.Title} 
            style={{ width: '100%', height: 'auto', borderRadius: 8 }} 
          />
          <h3 style={{ fontSize: 16 }}>{movie.Title}</h3>
          <p style={{ color: '#777' }}>{movie.Year}</p>
        </div>
      ))}
    </div>
  );
}
