const { request, response } = require('express');

module.exports.getProducts = (req = request, res = response) => {
  try {
    const products = require('../../data/products.json');

    return res.status(200).json({
      ok: true,
      products,
    });
  } catch (error) {
    return res.status(400).json({
      ok: false,
      error,
    });
  }
};
