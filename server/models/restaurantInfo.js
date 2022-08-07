import mongoose from "mongoose";

const restaurantSchema = mongoose.Schema({
    name: String,
    title: String,
    desc: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
    
})

const Restaurant = mongoose.model('Restaurant', restaurantSchema)

export default Restaurant