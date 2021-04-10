import React, { Component } from 'react'
import ApolloClient from "apollo-boost"
import { ApolloProvider } from "react-apollo"
import User from "./components/User"


const client = new ApolloClient({
  uri: "http://localhost:3000/graphql"
})

export default class App extends Component {
  render() {
    return (
      <div>
        <h2>Hello</h2>
        <ApolloProvider client={client} >
          <User />
        </ApolloProvider>
      </div>
    )
  }
}
