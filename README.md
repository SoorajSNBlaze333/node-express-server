# Simple Node Express Server

### Setup and Run the server
1. Fork from the repository or click use this template.
2. Install nodemon globally by using 
```shell
npm i -g nodemon
```
> nodemon is just a monitor script that detects changes in your server code and rebuilds it automatically.

3. Install all the dependencies by using 
```shell
npm i
```
4. Run the server script by using 
```shell
npm run start
```
> start script can be modified in the package.json file. By default it executes ```nodemon server.js```.

5. You can also manually run ```nodemon server.js``` on your terminal to get the same result.

6. The server will open on http://localhost:8000 by default. You can change the port number in the ```server.js``` file. By default it is 
```javascript
const port = 8000;
```
