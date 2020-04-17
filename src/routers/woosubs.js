const returnModel = require('woo-utilities/returnModel');
const AsyncRouter = require('express-async-router').AsyncRouter;
const authToken = require('woo-utilities/authTokenHandler');
const token = require('../constants/token');
const woosubsRepo = require('../repositories/woosubs');

const router = AsyncRouter();

router.post('/itemsubs', authToken.handler(token.ITEM_SUBS), async (req, res) => {
    var os = req.body.os;
    var data = {};
    data[os] = [];

    var subs = await woosubsRepo.getSubItems();
    if (subs)
        data[os] = subs.content[os] || [];

    res.send(returnModel({
        data: data
    }));
});

router.post('/itemskus', authToken.handler(token.ITEM_SKUS), async (req, res) => {
    var os = req.body.os;
    var data = {};
    data[os] = [];

    var skus = await woosubsRepo.getSkuItems();
    if (skus)
        data[os] = skus.content[os] || [];

    res.send(returnModel({
        data: data
    }));
});

module.exports = router;