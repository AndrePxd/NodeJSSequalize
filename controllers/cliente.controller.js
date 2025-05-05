const { Cliente } = require('../models');

// Obtener todos los clientes
exports.obtenerClientes = async (req, res) => {
  const clientes = await Cliente.findAll();
  res.json(clientes);
};

// Crear un nuevo cliente
exports.crearCliente = async (req, res) => {
  const cliente = await Cliente.create(req.body);
  res.status(201).json(cliente);
};

// Obtener cliente por ID
exports.obtenerClientePorId = async (req, res) => {
  const cliente = await Cliente.findByPk(req.params.id);
  if (cliente) res.json(cliente);
  else res.status(404).json({ mensaje: 'Cliente no encontrado' });
};

// Actualizar cliente
exports.actualizarCliente = async (req, res) => {
  const actualizado = await Cliente.update(req.body, {
    where: { id: req.params.id },
  });
  res.json({ mensaje: 'Cliente actualizado' });
};

// Eliminar cliente
exports.eliminarCliente = async (req, res) => {
  await Cliente.destroy({ where: { id: req.params.id } });
  res.json({ mensaje: 'Cliente eliminado' });
};
