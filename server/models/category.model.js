import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema(
  {
    name: String,
    slug: String,
    // for subcategories
    parent: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('category', categorySchema);
