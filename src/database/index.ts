import { MongoClient } from "mongodb"

const user = "hadichloun"
const userPassword = "dRNKDfuqQ6v7w4sG"
const cluster = "cluster0.vg5vg"

const url =
`mongodb+srv://${user}:${userPassword}@${cluster}.vg5vg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`


export const connectDatabase = async () => {
    const client = await MongoClient.connect(url, { useNewUrlParser: true })
}

    const db = client.db("main")

    return {
        listings: db.collection("test_listings")
    }
}