import { Schema, model } from 'mongoose';
import ICar from '../interfaces/ICar';

const CarSchema = new Schema<ICar>({
  // _id: {
  //   type: Number,
  //   required: true,
  // },
  name: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const CarModel = model<ICar>('Car', CarSchema);

export default CarModel;
