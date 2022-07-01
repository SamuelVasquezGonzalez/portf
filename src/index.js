require('colors');
const app = require('./config/server');
require('./routes/rutas');


app.listen(app.get('Puerto'), ()=>{
    console.log('SERVIDOR INICIADO'.bgGreen)
});