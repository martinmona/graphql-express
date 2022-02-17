import express from "express";
import graphqlHTTP from "express-graphql";
import GraphQLSchema from "./graphql/schema";
import graphqlResolvers from './graphql/resolvers'

const app = express()

app.use(
  "/graphql",
  graphqlHTTP({
    schema: GraphQLSchema,
    rootValue: graphqlResolvers,
    graphiql: true
  })
)

app.listen(3000, () => console.log("Server is running at port 3000"))
