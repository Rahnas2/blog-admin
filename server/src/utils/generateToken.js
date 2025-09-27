const jwt = require("jsonwebtoken");

const accessToken = (user) => {
  return jwt.sign(
    { id: user._id, userName: user.userName },
    process.env.ACCESS_JWT_SECRET,
    { expiresIn: process.env.ACCESS_JWT_EXPIRES_IN || "15m" }
  );
};

const refreshToken = (user) => {
  return jwt.sign(
    { id: user._id, userName: user.userName },
    process.env.REFRESH_JWT_SECRET,
    { expiresIn: process.env.REFRESH_JWT_EXPIRES_IN || "7d" }
  );
};

module.exports = { accessToken, refreshToken };
