const mongoose = require("mongoose");
const configs = require("../configs/Locals");

const connectToDB = () => {
    mongoose.connect(configs.MONGODB_URL);

    mongoose.connection.on("connected", () => {
        console.log("[Database connected]");
    });

    mongoose.connection.on("error", () => {
        console.log("[Db connection error]");
    });
};

module.exports = connectToDB;
