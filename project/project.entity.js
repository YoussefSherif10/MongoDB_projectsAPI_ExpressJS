const mongoose = require('mongoose')
const {Schema} = require("mongoose");

const projectSchema = new Schema({
    premiseType: {type: String, required: true, default:""},
    size: {type: String, required: true, default:""},
    budget: {type: Number, required: true, default:0},
    ownership: {type: Number, required: true, default:0},
});

const projectModel = mongoose.model('projects', projectSchema);
module.exports = projectModel;


