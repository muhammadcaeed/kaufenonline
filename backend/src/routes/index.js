import express from 'express';
import path from 'path';
import users from './users';
import response from '../helpers/response';

const routes  = express.Router();

routes.use(response.setHeadersForCORS);

routes.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

routes.use('/users', users);

routes.get('/api-health', (req, res) => {
  res.status(200).json({ message: 'Ok' });
});

routes.use(function(req, res) {
  response.sendNotFound(res);
});

module.exports = routes;
