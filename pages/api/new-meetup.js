import { MongoClient } from 'mongodb';

const uri = "mongodb+srv://mosswilliam711:F58WCF2BjI58rnXk@cluster0.9jgvmfr.mongodb.net/?retryWrites=true&w=majority";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    const { title, image, address, description } = data;

    const client = await MongoClient.connect(uri);
    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const result = await meetupsCollection.insertOne(data);

    client.close();

    res.status(201).json({message: 'Meetup inserted!'});
  }
}

export default handler;
