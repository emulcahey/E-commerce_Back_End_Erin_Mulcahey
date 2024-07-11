const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');
const express = require('express');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tags = await Tag.findAll({
      include: {
        model: Product,
        through: ProductTag,
      }
      })
    res.status(200).json(tags);
  } catch (err) {
    res.status(500).json({ err: 'Failed to retrieve tags'});
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tags = await Tag.findOne({
      where: {
        id: req.params.id
      },
      include: {
        model: Product,
        through: ProductTag,
      }
    })
    res.status(200).json(tags);
  } catch (err) {
    res.status(500).json({ err: 'Failed to retrieve tag'});
  }
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create({
    tag_name: req.body.tag_name
  })
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(req.body, {
    where: {
      id: req.params.id
    }
});
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id
    }
  })
});

module.exports = router;
