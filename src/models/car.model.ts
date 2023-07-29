import { Schema, model } from 'mongoose';
import ICar from '../interfaces/ICar';

const CarSchema = new Schema<ICar>(
  {
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
