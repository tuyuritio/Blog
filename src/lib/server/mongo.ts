import { MongoClient } from "mongodb";
import { DATABASE_URL } from "$env/static/private";

let client = new MongoClient(DATABASE_URL);

try {
	await client.connect();
} catch (_) {
	throw new Error("数據庫接続失敗");
}

let database = client.db("Blog");
const Mongo = {
	note: database.collection("note"),
	profile: database.collection("profile"),
	chronicle: database.collection("chronicle")
}

Mongo.profile.createIndex({ key: 1 }, { unique: true });
Mongo.note.createIndex({ ID: 1 }, { unique: true });

export default Mongo;
