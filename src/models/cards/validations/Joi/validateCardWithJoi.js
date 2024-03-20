const JoiCardSchema = require('./cardSchema');
const Joi = require('joi');


const validateCardWithJoi = card => JoiCardSchema.validate(card);
module.exports = validateCardWithJoi;