import jsonServer, { Express } from "json-server";
import { Request, Response, NextFunction } from "express";

const server: Express = jsonServer.create();
const router = jsonServer.router("./db.json");
const middlewares = jsonServer.defaults({
    static: "./build",
});

const port: number = 5000;

server.use(middlewares);
server.use(
    jsonServer.rewriter({
        "/api/*": "/$1",
    })
);

server.use(router);
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
