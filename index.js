const config = require('./config');
const woosubsRouter = require('./src/routers/woosubs');
const woosubsRepo = require('./src/repositories/woosubs');
const subsModel = require('./src/repositories/models/subs');
const skusModel = require('./src/repositories/models/skus');
const woocontent = require('woo-utilities/mongoose-woocontent');
const authToken = require('woo-utilities/authTokenHandler');

const init = ({
    publicKey, privateKey, mongoose
}) => {
    config.publicKey = publicKey;
    config.privateKey = privateKey;
    config.mongoose = mongoose;

    authToken.init({
        publicKey,
        privateKey
    });

    woocontent.init({
        mongoose
    });
}

module.exports = {
    init,
    router: {
        woosubs: woosubsRouter
    },
    repository: {
        woosubs: woosubsRepo
    },
    model: {
        subs: subsModel,
        skus: skusModel
    }
}