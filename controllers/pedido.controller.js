const { Pedido } = require('../models');

// Obtener todos los pedidos
exports.obtenerPedidos = async (req, res) => {
  const pedidos = await Pedido.findAll();
  res.json(pedidos);
};

// Crear un nuevo pedido
exports.crearPedido = async (req, res) => {
  const pedido = await Pedido.create(req.body);
  res.status(201).json(pedido);
};

// Obtener pedido por ID
exports.obtenerPedidoPorId = async (req, res) => {
  const pedido = await Pedido.findByPk(req.params.id);
  if (pedido) res.json(pedido);
  else res.status(404).json({ mensaje: 'Pedido no encontrado' });
};

// Actualizar pedido
exports.actualizarPedido = async (req, res) => {
  await Pedido.update(req.body, { where: { id: req.params.id } });
  res.json({ mensaje: 'Pedido actualizado' });
};

// Eliminar pedido
exports.eliminarPedido = async (req, res) => {
  await Pedido.destroy({ where: { id: req.params.id } });
  res.json({ mensaje: 'Pedido eliminado' });
};
