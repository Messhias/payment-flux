const _ = require('lodash');

module.exports = (req, rest, next) => {
    const bundle = res.locals.bundle;

    if (bundle.errors) {
        const errors = parseErrors(bundle.errors);
        res.status(500).json({ errors });
    } else {
        next();
    }
}

const parseErrors = (nodeRestfulErrors) => {
    const errors = [];

    _.forIn(nodeRestfulErrors, errors => errors.push(error.message));

    return errors;
}
