const config = require('./config');
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
        woosubs: () => require('./src/routers/woosubs')
    },
    repository: {
        woosubs: () => require('./src/repositories/woosubs')
    },
    model: {
        subs: () => require('./src/repositories/models/subs'),
        skus: () => require('./src/repositories/models/skus')
    }
}