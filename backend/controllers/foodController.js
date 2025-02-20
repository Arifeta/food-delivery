import foodModel from "../models/foodModel.js";
import fs from 'fs'

// add food item
const addFood = async (req, res) => {

    let image_filename = `${req.file.filename}`

    const food = new foodModel({
        name: req.body.name,
        decription: req.body.decription,
        price: req.body.price,
        category: req.body.category,
        image: image_filename
    })
    try {
        await food.save();
        res.json({
            success: true,
            message: "Food added successfully"
        })
    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: "Failed to add food"
        })
    }

}

export {addFood}