require("dotenv").config();

const { MongoClient, ServerApiVersion } = require("mongodb");

async function run() {
    const client = new MongoClient(process.env.MONGO_URI, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        },
    });

    try {
        await client.connect();

        const result = await client.db("admin").command({ ping: 1 });

        console.log("✅ Connected!");
        console.log(result);

    } catch (err) {

        console.error(err);

    } finally {

        await client.close();

    }
}

run();