import mongoose, { Document, Model, Schema } from 'mongoose';

// Define your schema
interface NameDocument extends Document {
  name: string;
}

const NameSchema = new Schema<NameDocument>({
  name: { type: String, required: true },
});

// Define your model
interface NameModel extends Model<NameDocument> {}

const Name = mongoose.model<NameDocument, NameModel>('Name', NameSchema);

async function connectToDatabase() {
  if (mongoose.connections[0]?.readyState === 1) {
    return;
  }

  try {
    await mongoose.connect(`${process.env.NEXT_PUBLIC_DB}`);

    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

export { connectToDatabase, Name };
