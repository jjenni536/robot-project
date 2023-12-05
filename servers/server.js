const http = require(`http`)
const app = express()

http.createServer((req, res) => {
res.end(`working`);
}).listen(3000)