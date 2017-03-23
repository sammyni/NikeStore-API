const Joi = require('joi');

const schema1 = Joi.object().keys({
    name: Joi.string().required(),
    attachment_url: Joi.string().required(),
}).with('name', 'attachment_url');

const schema2 = Joi.object().keys({
    id: Joi.string().required()
});

const schema3 = Joi.object().keys({
    name: Joi.string().required(),
    attachment_url: Joi.string().required(),
    id: Joi.string().required()
}).with('name', 'attachment_url');

module.exports = {
    schema1, schema2,
    schema3
};
