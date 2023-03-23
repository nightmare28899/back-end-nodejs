import express from 'express';
import cors from 'cors';
const routesApp = require('./routes');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

const whitelist = ['http://127.0.0.1:5500', 'http://localhost:4200', 'http://192.168.1.226:4200'];
const options = {
    origin: (origin: any, callback: any) => {
        if (whitelist.includes(origin) || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    }
}

app.use(cors(options));

app.get('/', (_req, res) => {
    res.send('Hola desde mi server!');
});

routesApp(app);

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});