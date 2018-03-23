import { MongoClient, Db } from "mongodb";

export class DbClient {
  public db: MongoClient;

  public async connect() {
    this.db = await MongoClient.connect("mongodb://localhost:27017/earthdawn");
    console.log("Connected to db");
    return this.db;
  }
}
