import http from 'http';
import url from 'url';
import { calculator, checkQuery } from './utils.js';

const PORT = process.env.PORT || 8000;

export const server = http.createServer(async (req, res) => {
    const path = url.parse(req.url as string).path;
    const strings = checkQuery(path as string);
    if (strings) {
        const template = calculator(strings as Array<string>);
        res.end(template);
    } else {
        res.end(
            `<h2> Formato no soportado, el formato tiene que ser  localhost/8000/calculator?a=NUMERO&b=NUMERO`
        );
    }
});
server.listen(PORT);
