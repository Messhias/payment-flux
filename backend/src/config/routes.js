const express = require('express');

module.exports = function(server) {
    // BASE URL
    const router = express.Router();
    server.use('/api', router);

    // billing cycle routes
    const billingCycle = require('../api/billingCycle/billingCycleServices');
    billingCycle.register(router, '/billingCycles');
}
