const path = require('path');
const express       = require('express'),
   // exphbs          = require('express-handlebars'),
   // hbsHelpers      = require('handlebars-helpers'),
   // hbsLayouts      = require('handlebars-layouts'),
    bodyParser      = require('body-parser'),
   // cookieParser    = require('cookie-parser'),
   // errorhandler    = require('errorhandler'),
  //  csrf            = require('csurf'),
  //  morgan          = require('morgan'),
 //   favicon         = require('serve-favicon'),
   
    router          = require('./routes/router'),
    database        = require('./lib/database'),
    seeder          = require('./lib/dbSeeder'),
    app             = express(),
    port            = 3000;
  
// * NOTE :: leave this as require() since this file is built Dynamically from webpack
//const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require('./dist/server/main.bundle');

// Express Engine
//import { ngExpressEngine } from '@nguniversal/express-engine';
// Import module map for lazy loading
//import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';
class Server {

    constructor() {
        this.initViewEngine();
        this.initExpressMiddleWare();
        this.initCustomMiddleware();
        this.initDbSeeder();
        this.initRoutes();
        this.start();
    }

    start() {
        app.listen(port, (err) => {
            console.log('[%s] Listening on http://localhost:%d', process.env.NODE_ENV, port);
        });
    }

    initViewEngine() {
        //app.engine('html',html);
        app.set('view engine', 'html');
     //  app.set('views', join(DIST_FOLDER, 'smacli'));
    }

    initExpressMiddleWare() {
 //       app.use(favicon(__dirname + '/smacli/images/favicon.ico'));
        //app.set('views', path.join(__dirname, 'views'));
     //   app.get('*.*', express.static(join(DIST_FOLDER, 'smacli')));
        app.use(express.static(__dirname + '/dist'));
     //   app.use('/', express.static(path.join(__dirname, './dist')));
 //       app.use(morgan('dev'));
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(bodyParser.json());
     //   app.use(errorhandler());
      //  app.use(cookieParser());
     //   app.use(csrf({ cookie: true }));

    //    app.use((req, res, next) => {
    //        let csrfToken = req.csrfToken();
    //        res.locals._csrf = csrfToken;
    //        res.cookie('XSRF-TOKEN', csrfToken);
    //        next();
    //    });

        process.on('uncaughtException', (err) => {
            if (err) console.log(err, err.stack);
        });
    }

    initCustomMiddleware() {
        if (process.platform === "win32") {
            require("readline").createInterface({
                input: process.stdin,
                output: process.stdout
            }).on("SIGINT", () => {
                console.log('SIGINT: Closing MongoDB connection');
                database.close();
            });
        }

        process.on('SIGINT', () => {
            console.log('SIGINT: Closing MongoDB connection');
            database.close();
        });
    }

    initDbSeeder() {
        database.open(() => {
            //Set NODE_ENV to 'development' and uncomment the following if to only run
            //the seeder when in dev mode
            //if (process.env.NODE_ENV === 'development') {
            //  seeder.init();
            //} 
            seeder.init();
        });
    }

    initRoutes() {
        router.load(app, './controllers');

        // redirect all others to the index (HTML5 history)
      //  app.get('*', (req, res) => {
       //     res.render(join(DIST_FOLDER, 'smacli', 'index.html'), { req });
       //     });
            app.all('/*', (req, res) => {
                res.sendFile(__dirname + '/dist/smacli/index.html');
            });
    }    

}

let server = new Server();