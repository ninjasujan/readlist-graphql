const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const Locals = require("./configs/Locals");
const graphQLSchema = require("./schema/graphql/schema");
const app = express();

app.use(
    "/graphql",
    graphqlHTTP({
        schema: graphQLSchema,
        graphiql: true,
    })
);

app.listen(Locals.PORT, () => {
    console.log("[Server running on port]", Locals.PORT);
});
