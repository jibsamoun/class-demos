import mongoose from 'mongoose';

let models = {}

main()

async function main() {
    console.log('Connecting to mongodb!')
    await mongoose.connect('mongodb+srv://jibrilsamoun:pa55word@cluster0.ou4vk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    console.log('Successfully connected to mongodb!')

    const userSchema = new mongoose.Schema({
        name: String,
        icecream: String
    })
    models.User = mongoose.model('User', userSchema)
    console.log('mongoose models created')
}

export default models;