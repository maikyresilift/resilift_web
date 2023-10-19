/// <reference types="next" />
/// <reference types="next/types/global" />

// Extend the NodeJS namespace with your global variables
declare namespace NodeJS {
  interface Global {
    _mongoClientPromise?: Promise<MongoClient>;
  }
}
