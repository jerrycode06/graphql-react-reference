import React from "react";
import { useQuery, gql } from "@apollo/client";

const getBooksQuery = gql`
  {
    books {
      name
      id
    }
  }
`;

const BookList = () => {
  const { loading, error, data } = useQuery(getBooksQuery);
  if (loading) return <h3>Loading...</h3>;
  if (error) return <h1>Error...</h1>;
  const { books } = data;
  return (
    <div>
      <ul id="book-list">
        {books && books.map((book) => <li key={book.id}>{book.name}</li>)}
      </ul>
    </div>
  );
};

export default BookList;
