import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "'first name' is required."],
      maxLength: [25, 'First name should be less than 25 characters.'],
    },
    lastName: {
      type: String,
      required: [true, "'last name' is required."],
      maxLength: [50, 'Last name should be less than 50 characters.'],
    },
    email: {
      type: String,
      unique: true,
      required: [true, "'email address' is required."],
    },
    phoneNumber: {
      type: String,
      unique: true,
      required: [true, "'phone number' is required."],
    },
    password: String,
    role: { type: String, enum: ['user', 'seller', 'admin'], default: 'user' },
    addresses: [AddressSchema],
    wishlist: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
  },
  {
    timestamps: true,
  }
);

userSchema.method('fullName', function () {
  return `${this.firstName} ${this.lastName}`;
});

export default mongoose.model('user', userSchema);
