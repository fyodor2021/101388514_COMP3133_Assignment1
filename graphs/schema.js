const {gql} = require('apollo-server-express')
const typeDefs = gql`
    type User {
        username: String!
        email: String!
        password: String!
    }
    type Employee{
        _id: ID!
        first_name: String!
        last_name: String!
        email: String!
        gender: String!
        salary: Float!
    }
    type Query{
        login(email:String,username:String, password: String!): User
        getAllEmployees: [Employee]
        getEmployeeById(_id:String!): Employee
    }
    type Mutation{
        signup(input: UserInput):String
        addNewEmployee(input: EmployeeInput): Employee
        updateEmployeeById(_id: String!, input: EmployeeInput): Employee
        deleteEmployeeById(_id:String!):String
    }
    input EmployeeInput{
        first_name: String!
        last_name: String!
        email: String!
        gender: String!
        salary: Float!
    }
    input UserInput {
        username: String!
        email: String!
        password: String!
    }
`

module.exports = typeDefs;