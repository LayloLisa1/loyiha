import mongoose from "mongoose";
import Joi from "joi";

const { Schema, model } = mongoose;

const taskSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, { timestamps: true });

export default model('Task', taskSchema);
