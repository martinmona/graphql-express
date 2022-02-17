import express from "express";
import graphqlHTTP from "express-graphql";
import GraphQLSchema from "./graphql/schema";
import graphqlResolvers from './graphql/resolvers'
import mongoose from "mongoose";

const app = express()

app.use(
  "/graphql",
  graphqlHTTP({
    schema: GraphQLSchema,
    rootValue: graphqlResolvers,
    graphiql: true
  })
)
const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0-uox7n.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`
const options = { useNewUrlParser: true, useUnifiedTopology: true }
mongoose
.connect(uri, options)
.then( () => {
  app.listen(3000, console.log("Server is running at port 3000"))
}
.catch(error => {throw error})
)
