const Joi = require('joi');

const ilPhoneRegex = /^(?:(?:(\+?972|\(\+?972\)|\+?\(972\))(?:\s|\.|-)?([1-9]\d?))|(0[23489]{1})|(0[57]{1}[0-9]))(?:\s|\.|-)?([^0\D]{1}\d{2}(?:\s|\.|-)?\d{4})$/;
const houseNumberRegex = /^[\d]+[\w]*/;
const zipRegex = /^[\d]{4,10}$/;

const JoiCardSchema = Joi.object({
    title: Joi.string()
        .min(2)
        .max(256)
        .required(),
    subtitle: Joi.string()
        .min(2)
        .max(256)
        .required(),
    description: Joi.string()
        .min(2)
        .max(1024)
        .required(),
    phone: Joi.string()
        .ruleset.regex(ilPhoneRegex)
        .rule({ message: 'Must be a valid Israel phone nr. ☎' })
        .required(),
    web: Joi.string().
        uri(),
    email: Joi.string()
        .email()
        .required(),
    image:
        Joi.object()
            .keys({
                url: Joi.string()
                    .uri()
                    .allow(""),
                alt: Joi.string()
                    .min(2)
                    .max(256)
                    .allow("")
                    .required()
            })
            .required(),
    address:
        Joi.object()
            .keys({
                state: Joi.string()
                    .min(2)
                    .max(256)
                    .allow(""),
                country: Joi.string()
                    .min(2)
                    .max(256)
                    .required(),
                city: Joi.string()
                    .min(2)
                    .max(256)
                    .required(),
                street: Joi.string()
                    .min(2)
                    .max(256)
                    .required(),
                houseNumber: Joi.string()
                    .ruleset
                    .regex(houseNumberRegex)
                    .rule({ message: "Must be a valid house number" }),
                zip: Joi.string()
                    .ruleset
                    .regex(zipRegex),

            })
            .required(),
    bizNumber: Joi.number()
        .allow(""),
    user_id: Joi.string().allow("")

});

module.exports = JoiCardSchema;

