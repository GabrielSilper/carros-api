import { Schema, model } from 'mongoose';
import ICar from '../interfaces/ICar';

const CarSchema = new Schema<ICar>(
  {
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
    type: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
  },
  {
    toJSON: {
      transform: (_, ret): void => {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
      },
    },
  }
);

const CarModel = model<ICar>('Car', CarSchema);

export default CarModel;
