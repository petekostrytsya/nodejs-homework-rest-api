const jwt = require('jsonwebtoken');
const { User } = require('../models/user');

const { HttpError } = require('../helpers');

const { SECRET_KEY } = process.env;

const authentificate = async (req, res, next) => {
    const { authorazation = ''} = req.header;
    const [bearer, token] = authorazation.split(' ');
    if (bearer !== "Bearer" || !token) {
        next(HttpError(401));
    }
    try {
        const { id } = jwt.verify(token, SECRET_KEY);
        const user = await User.findById(id);
        if (!user || !user.token || user.token !== token) {
            next(HttpError(401, 'Email or password is wrong'));
        }
        req.user = user;
        next();
    } catch {
      next(HttpError(401));  
    }
}

module.exports = authentificate;