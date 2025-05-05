const express = require('express');
const router = express.Router();
const {
  obtenerPedidos,
  crearPedido,
  obtenerPedidoPorId,
  actualizarPedido,
  eliminarPedido
} = require('../controllers/pedido.controller');

// Ya no uses /pedidos aquí porque se monta con app.use('/pedidos', ...)
router.get('/', obtenerPedidos);
router.post('/', crearPedido);
router.get('/:id', obtenerPedidoPorId);
router.put('/:id', actualizarPedido);
router.delete('/:id', eliminarPedido);

module.exports = router;
