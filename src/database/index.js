import mongoose from 'mongoose';

class Database {
  constructor() {
    this.mongo();
  }

  mongo() {
    mongoose
      .connect(
        'mongodb://mongo:5GB6G2AFaEeeG1bE-6BbfFE-3-h1dgF6@roundhouse.proxy.rlwy.net:20203',
      )
      .then(() => {
        console.log('MongoDB Connected');
      })
      .catch((err) => {
        console.log(`Error: ${err}`);
      });
  }
}

export default new Database();
