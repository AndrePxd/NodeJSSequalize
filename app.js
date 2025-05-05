var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const clienteRoutes = require('./routes/cliente.routes'); 
const pedidoRoutes = require('./routes/pedido.routes'); 

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/clientes', clienteRoutes); 
app.use('/api/pedidos', pedidoRoutes); 

const PORT = process.env.PORT || 2000; 
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`)); 

module.exports = app;
