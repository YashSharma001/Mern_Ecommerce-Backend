import mongoose from "mongoose";

const schema = new mongoose.Schema(
    {
        shippingInfo: {
            address: {
                type: String,
                required: [true, "Please enter address"],
            },
            city: {
                type: String,
                required: [true, "Please enter city"],
            },
            state: {
                type: String,
                required: [true, "Please enter state"],
            },
            country: {
                type: String,
                required: [true, "Please enter country"],
            },
            pinCode: {
                type: Number,
                required: [true, "Please enter pincode"],
            },
        },

        user: {
            type: String,
            ref: "User",
            required: true,
        },

        subtotal: {
            type: Number,
            required: true,
        },

        tax: {
            type: Number,
            required: true,
        },

        shippingCharges: {
            type: Number,
            default: 0,
        },

        discount: {
            type: Number,
            default: 0,
        },

        total: {
            type: Number,
            required: true,
        },

        status: {
            type: String,
            enum: ["Processing", "Shipped", "Delivered"],
            default: "Processing",
        },

        orderItems: [
            {
                name: String,
                photo: String,
                price: Number,
                quantity: Number,
                productId: {
                    type: mongoose.Types.ObjectId,
                    ref: "Product"
                },
            }
        ]

    }
    , {
        timestamps: true,
    }
)



export const Order = mongoose.model("Order", schema);