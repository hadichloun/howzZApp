import { listings } from "../listings"

export const resolvers = {
    Query: {
        listings: () => {
            return listings;
        }
    }
    Mutation: {
        deleteListing: (_root, { id }) => {
            for (let i = 0; i < listings.length; i++) {
                if (listings[i].id === id) {
                  return res.send(listings.splice(i, 1));
                }
              }
        }
    }
}