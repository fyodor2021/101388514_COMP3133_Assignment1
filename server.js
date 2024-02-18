const express = require('express')
const mongoose = require('mongoose')
const typeDefs = require('./graphs/schema.js')
const resolvers = require('./graphs/resolvers.js')
const {ApolloServer} = require('apollo-server-express')

const DB_HOST = "cluster0.ahnfv68.mongodb.net"
const DB_USER = "vedoorbbs"
const DB_PASSWORD = "kNKXWYEupar28ZPH"
const DB_NAME = "comp3133_assignment1"

const DB_CONNECTION_STRING = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`
mongoose.connect(DB_CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(success => {
    console.log('Success Mongodb connection')
}).catch(err => {
    console.log('Error Mongodb connection');
})
const app  = express();
const server = new ApolloServer({
    typeDefs,
    resolvers
});


async function startServer() {
    await server.start();
    server.applyMiddleware({app});
}


startServer();
app.listen({port: 4000},()=> {
    console.log(`Server ready at http://localhost:4000${server.graphqlPath}`)
})