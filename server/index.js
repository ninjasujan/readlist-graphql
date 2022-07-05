const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const Locals = require("./configs/Locals");
const graphQLSchema = require("./schema/graphql/schema");
const connectDatabase = require("./provider/mongodb");

const app = express();

app.use(
    "/graphql",
    graphqlHTTP({
        schema: graphQLSchema,
        graphiql: true,
    })
);

app.listen(Locals.PORT, () => {
    connectDatabase();
    console.log("[Server running on port]", Locals.PORT);
});
