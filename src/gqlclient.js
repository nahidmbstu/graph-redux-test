import ApolloClient from "apollo-boost";

const client = new ApolloClient({
    uri: "https://fakerql.com/graphql"
});

export default client;

  