const services = require('../services');

const addUrl = async (value) => {
    console.log(value);
    return await services.insertURL(value);
};

module.exports = {
    addUrl
}