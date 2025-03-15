import { model, Schema } from "mongoose";

const transactionSchema = new Schema(
  {
    amount: { type: Number, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true }
);

const creditSchema = new Schema({
  name: { type: String, required: true },
  imageUrl: { type: String, required: true },
  important: { type: Boolean, required: true },
  transactions: [transactionSchema],
});

const Credit = model("Credit", creditSchema);

export default Credit;
