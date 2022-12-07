import mongoose from 'mongoose';

export type User = {
  username: string,
  password: string
} 

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Username obrigatório'],
    minlength: [4, 'O nome do usuário deve ter no mínimo 4 caracteres']
  },
  password: { 
    type: String,
    required: true
  }
})

userSchema.set('toJSON', {
  transform: (document, returnedObj) => {
    returnedObj.id = returnedObj._id.toString()
    delete returnedObj._id
    delete returnedObj.__v
    delete returnedObj.password
  }
})

const UserModel = mongoose.model('User', userSchema)

export default UserModel