const config = {
    app: {
        port: process.env.PORT || 5000,
    },
    DB: {
        url: process.env.MONGODB_URL || "mongodb+srv://nba18:binhan2001@cluster0.owqua7n.mongodb.net/LVTN?retryWrites=true&w=majority",
        // url: process.env.MONGODB_URL || "mongodb+srv://LVTN:binhan2001@lvtn.ynnkqgb.mongodb.net/LVTN",
        // url: process.env.MONGODB_URL || "mongodb+srv://LVTN:binhan2001@lvtn.ynnkqgb.mongodb.net/LVTN?retryWrites=true&w=majority"

    }
};

module.exports = config