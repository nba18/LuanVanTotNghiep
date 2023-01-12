const config = {
    app: {
        port: process.env.PORT || 5000,
    },
    DB: {
        url: process.env.MONGODB_URL || "mongodb+srv://nba18:binhan2001@cluster0.owqua7n.mongodb.net/LVTN?retryWrites=true&w=majority",
    }
};

module.exports = config