import app from './app'



const cors = require('cors');


app.use(cors());


app.listen(app.get('port'))

console.log('Server on port', app.get('port'))