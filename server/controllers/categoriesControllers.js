const { request, response } = require('express');

module.exports.getCategories = async (req = request, res = response) => {
  try {
    const categories = require('../../data/categories.json');

    return res.status(200).json({
      ok: true,
      categories,
    });
  } catch (error) {
    return res.status(400).json({
      ok: false,
      error,
    });
  }
};
