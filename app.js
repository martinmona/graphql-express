const express = require("express")
const {graphqlHTTP} = require("express-graphql")
const mongoose = require("mongoose")
const graphqlSchema = require("./graphql/schema")
const graphqlResolvers = require("./graphql/resolvers")
const cors = require('cors')

const app = express()
app.use(cors()) 
app.use(
  "/graphql",
  graphqlHTTP({
    schema: graphqlSchema,
    rootValue: graphqlResolvers,
    graphiql: true,
  }))

  const uri = `mongodb+srv://${process.env.MONGO_USER}:martinmona@cluster0.fjp2g.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`
  const options = { useNewUrlParser: true, useUnifiedTopology: true }
  mongoose
    .connect(uri, options)
    .then(() => app.listen(3000, console.log("Server is running")))
    .catch(error => {
      throw error
    })