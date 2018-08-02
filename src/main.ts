import * as http from 'http';
import * as express from 'express';
import routes from './routes';

try {
    const app = express();
    const httpServer = http.createServer(app);
    
    //Registering the application routes
    app.use(routes);
    
    const HTTP_PORT = 3000;
    httpServer.listen(HTTP_PORT, '::', () => {
       console.log('App running on port ' + HTTP_PORT);
    });
    
} catch (exception) {
    console.log(exception);
}