import winston from 'winston';
import { Loggly } from 'winston-loggly-bulk';
import dotenv from 'dotenv';

dotenv.config();

winston.add(
  new Loggly({
    token: process.env.LOGGLY_TOKEN as string,
    subdomain: 'salcar',
    tags: ['Meteor', 'BarkBistros'],
    json: true,
  })
);

export { winston };
