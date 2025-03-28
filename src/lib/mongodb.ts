import { MongooseCache } from "@/types/database";
import mongoose, { ConnectOptions } from "mongoose";

const URI = process.env.MONGODB_URI!;
if (!URI) throw new Error("Please define MONGODB_URI in .env.local");

declare global {
  // eslint-disable-next-line no-var
  var mongooseCache: MongooseCache;
}

const cached: MongooseCache = global.mongooseCache || {
  conn: null,
  promise: null,
};
if (!global.mongooseCache) {
  global.mongooseCache = cached;
}

export async function connectToDB() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    const opts: ConnectOptions = {};
    cached.promise = mongoose.connect(URI, opts).then((mongoose) => mongoose);
  }

  cached.conn = await cached.promise;
  return cached.conn;
}
