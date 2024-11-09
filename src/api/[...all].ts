import jsonServer from 'json-server';
import { createServer } from 'http';
import { NowRequest, NowResponse } from '@vercel/node';

const handler = (req: NowRequest, res: NowResponse) => {
  const server = jsonServer.create();
  const router = jsonServer.router('db.json'); // Path to your db.json file
  const middlewares = jsonServer.defaults();

  server.use(middlewares);
  server.use(router);

  createServer(server).listen(3000, () => {
    console.log('JSON Server is running');
  });
};

export default handler;
