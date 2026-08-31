import mongoose from 'mongoose';

const listingSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: true,
        },
        description:{
            type:String,
            requiered: true,
        },
        address:{
            type: String,
            required: true,
        },
        regularPrice:{
            type: Number,
            requiered: true,
        },
        discountPrice:{
            type: Number,
            requiered: true,
        },
        bathrooms:{
            type: Number,
            requiered: true,
        },
        bedrooms:{
            type: Number,
            requiered: true,
        },
        furnished:{
            type: Boolean,
            requiered: true,
        },
        parking:{
            type: Boolean,
            requiered: true,
        },
        type:{
            type: String,
            requiered: true,
        },
        offer:{
            type: Boolean,
            requiered: true,
        },
        imageUrls:{
            type: Array,
            requiered: true,
        },
        userRef:{
            type: String,
            requiered: true,
        },
        
    }, {timestamps: true}
)

const Listing = mongoose.model('Listing', listingSchema);

export default Listing;