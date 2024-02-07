import mongoose, { mongo } from "mongoose";

export const connectDB = (uri:string) => {
    mongoose.connect(uri, {
        dbName: "Ecommerce",
    })
        .then((c) => console.log(`DB connected to ${c.connection.host}`))
        .catch((e) => console.log(e));
}