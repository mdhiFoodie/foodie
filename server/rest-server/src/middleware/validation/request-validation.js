import Joi from 'joi';

export default {
  signUp: {
    body: {
      email: Joi.string().email(),
      phone: Joi.string().regex(/^[0-9]{10,10}$/),
      contactName: Joi.string().regex(/^[a-zA-Z]{3,30}$/),
      username: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
      password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
    }
  },
  login: {
    body: {
      email: Joi.string().email(),
      password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
    }
  },
}
