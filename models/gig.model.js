import mongoose, { Schema } from "mongoose";

const GigSchema = new Schema({
    userId: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    cat: {
        type: String,
        required: true
    },
    cover: {
        type: String,
        required: false
    },
    images: {
        type: [String],
        required: false
    },
    desc: {
        type: String,
        required: false
    },
    totalStars: {
        type: Number,
        default: 0
    },
    starNumber: {
        type: Number,
        default: 0
    },
    price: {
        type: Number,
        required: true
    },
    shortTitle: {
        type: String,
        required: true
    },
    shortDesc: {
        type: String,
        required: true
    },
    deliveryTime: {
        type: Number,
        required: true
    },
    revisionNumber: {
        type: String,
        required: true
    },
    sales: {
        type: Number,
        default: 0
    },
    features: {
        type: [String],
        required: false
    },
}, {
    timestamps: true
})

export default mongoose.model("Gig", GigSchema);