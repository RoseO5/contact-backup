import { MongoClient } from 'mongodb';

let clientPromise;

if (process.env.MONGODB_URI) {
  if (process.env.NODE_ENV === 'development') {
    if (!global._mongoClient) {
      global._mongoClient = new MongoClient(process.env.MONGODB_URI);
      global._mongoPromise = global._mongoClient.connect();
    }
    clientPromise = global._mongoPromise;
  } else {
    clientPromise = new MongoClient(process.env.MONGODB_URI).connect();
  }
}

export default clientPromise;
