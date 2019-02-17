const mongoose = require("mongoose");

const server = "127.0.0.1:27017";
const database ="ReactMap";

try {
    mongoose.connect(`mongodb://${server}/${database}`, { useNewUrlParser: true });
} catch (e) {
    console.log("***")
}

let MessagesSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true,
        unique: true
    },
    message: {
        type: String,
        required:true,
    },
    latitude: {
        type: String,
        required:true,
    },
    longitude: {
        type: String,
        required:true,
    }

});

module.exports = mongoose.model("Messages", MessagesSchema);