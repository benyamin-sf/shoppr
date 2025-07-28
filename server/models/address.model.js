import mongoose from 'mongoose';

const addressSchema = new mongoose.Schema(
  {
    fullName: String,
    phone: String,
    street: String,
    city: String,
    postalCode: String,
    country: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('address', addressSchema);
