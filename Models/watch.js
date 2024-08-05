import {Schema,model} from "mongoose";

const watchSchema = new Schema({
    name: String,
    company: String,
    image: String,
    price: Number,
    description: String},{

    timestamps:true
})

const Watch =model("watch",watchSchema)


export default Watch