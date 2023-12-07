import bcryptjs from 'bcryptjs';
import { Schema, model } from 'mongoose'

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    lowercase: true,
    index: { unique: true }
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    default: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
  }

}, { timestamps: true })


userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next()

  try {
    this.password = bcryptjs.hashSync(this.password, 10)
  } catch (error) {
    console.log(error);
    throw new Error("Error al codificar la contraseña");
  }
})

userSchema.methods.comparePassword = async function(frontendPassword) {
  return await bcryptjs.compare(frontendPassword, this.password)
}

export const User = model('User', userSchema)