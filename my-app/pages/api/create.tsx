import { connectToDatabase, Name } from '../../db';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ message: 'Name is required' });
    }

    try {
      await connectToDatabase();

      // Create a new document using the Name model
      const newName = new Name({ name });
      await newName.save();

      res.status(201).json(newName);
    } catch (error) {
      console.error('Error saving name:', error);
      res.status(500).json({ message: 'Name save failed' });
    }
  } else {
    res.status(405).end(); // Method not allowed
  }
}
