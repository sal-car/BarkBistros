import winston from 'winston';
import { Loggly } from 'winston-loggly-bulk';
import { LOGGLY_TOKEN } from './token';

winston.add(
  new Loggly({
    token: LOGGLY_TOKEN,
    subdomain: 'salcar',
    tags: ['Meteor', 'BarkBistros'],
    json: true,
  })
);

export { winston };
