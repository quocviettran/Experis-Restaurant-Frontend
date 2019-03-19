const { Client } = require('pg')

const client = new Client({
  user: 'oxlqhtagsoimrg',
  password: 'f5bd99b4783afd04fbc88a37dea5c12cf9170a575e181090a8b0988cb01c8b57',
  database: 'dfl2l5d2b95812',
  port: '5432',
  host: 'ec2-54-246-92-116.eu-west-1.compute.amazonaws.com',
  ssl: true
});

client.connect();

module.exports = client;