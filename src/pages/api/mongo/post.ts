import { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";
import clientPromise from "./lib/mongodb";
import { IPost } from "@/types/types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const client: MongoClient = await clientPromise;
  const db = client.db("resi-lift");

  switch (req.method) {
    case "POST":
      const { name, phone, message, email } = req.body;

      const postObject: IPost = {
        name,
        email,
        phone,
        message,
      };

      const result = await db.collection("posts").insertOne(postObject);
      const myPost = await db
        .collection("posts")
        .findOne({ _id: result.insertedId });

      res.json(myPost);
      break;

    default:
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
