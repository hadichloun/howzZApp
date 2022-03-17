import { gql } from "apollo-server-express";

export const typeDefs = gql`
type Listing {
    id: string!;
    title: string!;
    image: string!;
    address: string!;
    price: int!;
    numOfGuests: int!;
    numOfBeds: int!;
    numberOfBaths: int!;
    rating: int!;
}

type Query {
    listings: [Listing!]!
}

type Mutation {
    deleteListing(id: ID!): Listing!
}
`