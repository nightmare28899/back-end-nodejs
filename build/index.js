"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routesApp = require('./routes');
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use(express_1.default.json({ limit: '50mb' }));
app.use(express_1.default.urlencoded({ limit: '50mb', extended: true }));
const whitelist = ['http://127.0.0.1:5500', 'http://localhost:4200', 'http://192.168.1.226:4200'];
const options = {
    origin: (origin, callback) => {
        if (whitelist.includes(origin) || !origin) {
            callback(null, true);
        }
        else {
            callback(new Error('Not allowed by CORS'));
        }
    }
};
app.use((0, cors_1.default)(options));
app.get('/', (_req, res) => {
    res.send('Hola desde mi server!');
});
routesApp(app);
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
