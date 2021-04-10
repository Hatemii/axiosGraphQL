import React, { Component, Fragment } from 'react'
import gql from "graphql-tag"
import { Query } from "react-apollo"

const UsersQuery = gql`
    query UsersQuery {
        users {
            id
            name
            age
        }
    }
`

export default class User extends Component {
    render() {
        return (
            <div>
                <Fragment>
                    <Query query={UsersQuery}>
                        {
                            ({ loading, error, data }) => {
                                if (loading) return <h4>Loading . . .</h4>
                                if (error) return <h4>Error</h4>

                                return (
                                    <Fragment>

                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>ID</th>
                                                    <th>NAME</th>
                                                    <th>AGE</th>
                                                </tr>
                                            </thead>
                                            {data.users.map((user, x) => (
                                                <tbody key={x}>
                                                    <tr >
                                                        <td>{user.id}</td>
                                                        <td>{user.name}</td>
                                                        <td>{user.age}</td>
                                                    </tr>
                                                </tbody>
                                            ))
                                            }
                                        </table>
                                    </Fragment>
                                )
                            }
                        }
                    </Query>
                </Fragment>
            </div>
        )
    }
}
