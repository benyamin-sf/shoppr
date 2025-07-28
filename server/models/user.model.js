import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    fullName: String,
    email: { type: String, unique: true, required: true },
    phoneNumber: { type: String, unique: true, required: true },
    password: String,
    role: { type: String, enum: ['user', 'seller', 'admin'], default: 'user' },
    addresses: [AddressSchema],
    wishlist: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('user', userSchema);
