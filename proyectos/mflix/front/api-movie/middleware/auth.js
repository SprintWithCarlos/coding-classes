const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
  const jwtToken = req.header('Authorization');
  if (!jwtToken) {
    return res.status(401).json({
      message: 'Denied Access, Authentication requested',
    });
  }
  try {
    const payload = jwt.verify(jwtToken, process.env.SECRET_JWT);
    req.user = payload;
    return next();
  } catch (error) {
    return res.status(400).json({
      message: 'Denied Access. Invalid Authentication',
    });
  }
};
module.exports = auth;
