const mongoose = require('mongoose');

const ObjectId = mongoose.Schema.Types.ObjectId; 

const subTaskSchema = mongoose.Schema({
    title: {type: String, required: true},
    status: {type: String, required: true},

    todo_id: {type: ObjectId, ref: "Todo"}, // Reference to the Todo model  

});

module.exports = mongoose.model('SubTask', subTaskSchema);
