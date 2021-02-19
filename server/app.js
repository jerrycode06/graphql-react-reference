const express = require("express");
const graphqlHTTP = require("express-graphql");

const app = express();

// bind express with graphql
app.use(
  "/graphql",
  graphqlHTTP({
    // pass in a schema property
  })
);

app.listen(4000, () => console.log(`Listening on Port 4000`));
