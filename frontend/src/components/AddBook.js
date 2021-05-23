import React from "react";
import { useQuery, gql } from "@apollo/client";

const getAuthorsQuery = gql`
  {
    authors {
      name
      id
    }
  }
`;

const AddBook = () => {
  const { loading, error, data } = useQuery(getAuthorsQuery);
  if (loading) return <h3>Loading...</h3>;
  if (error) return <h3>Error...</h3>;
  const { authors } = data;
  console.log(authors);
  return (
    <form id="add-book">
      <div className="field">
        <label>Book Name</label>
        <input type="text" />
      </div>
      <div className="field">
        <label>Genre:</label>
        <input type="text" />
      </div>
      <div className="field">
        <label>Author</label>
        <select>
          <option>Select Author</option>
          {authors &&
            authors.map((author) => (
              <option key={author.id}>{author.name}</option>
            ))}
        </select>
      </div>

      <button>+</button>
    </form>
  );
};

export default AddBook;
