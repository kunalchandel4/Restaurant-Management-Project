const PORT = 3000;
const path = require('path');
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();
server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use('/api', router);
server.listen(PORT, () => console.log(`JSON Server is running on port ${PORT}`));

//frontend x backend
//5500 x 3000

//step 1:install npm package "json-server"
//step 2: create server.js
//step 3: setup database, re-run server
//step 4: go to location on browser