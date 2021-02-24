const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");

const app = express();

// bind express with graphql
app.use(
  "/graphql",
  graphqlHTTP({
    // pass in a schema property
    schema,
    graphiql: true,
  })
);

app.listen(4000, () => console.log(`Listening on Port 4000`));
