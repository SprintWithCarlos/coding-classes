const isAdmin = (req, res, next) => {
  if (!req.user.isAdmin) {
    return res.status(403).json({
      message: 'You are not allowed to this area',
    });
  }
  return next();
};

module.exports = isAdmin;
