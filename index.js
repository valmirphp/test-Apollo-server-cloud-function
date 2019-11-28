const { ApolloServer, gql } = require('apollo-server-cloud-functions');

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
    type Query {
        hello(name: String): String
    }
`;

// Provide resolver functions for your schema fields
const resolvers = {
    Query: {
        hello: (_, {name}) => `Hello ${name || 'World'}!`,
    },
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
    playground: true,
    introspection: true,
});

exports.handler = server.createHandler();
// gcloud functions deploy apollo-function --runtime nodejs10 --trigger-http --entry-point handler  --project adonisjs-tests
