const { model } = require("mongoose");

const userLastRequestTime = {};

const debounceTime = 1000;
const debounceMiddleware = (req, res, next) => {
  const userId = req?.user?.uid;
  if (!userId) {
    return res
      .status(401)
      .json({ message: "Unauthorized - User not authenticated" });
  }

  const now = Date.now();

  if (
    userLastRequestTime[userId] &&
    now - userLastRequestTime[userId] < debounceTime
  ) {
    return res
      .status(429)
      .json({ message: "Please wait before making another request." });
  }
  userLastRequestTime[userId] = now;
  next();
};
module.exports = debounceMiddleware;
