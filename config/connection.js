require('dotenv').config();

const Sequelize = require('sequelize');

const sequelize = process.env.DB_URL
  ? new Sequelize(process.env.DB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
      host: 'localhost',
      dialect: 'postgres',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

module.exports = sequelize;




// router.post('/', (req, res) => {
//   // create a new tag
//   Tag.create(req.body)
//   .then((tag) => {
//     res.json(tag);
//   })
//   .catch((err) => {
//     res.json(err);
//   });
// });

// router.put('/:id', (req, res) => {
//   // update a tag's name by its `id` value
//   Tag.update(req.body, {
//     where: {
//       id: req.params.id
//     }
//   })
//   .then((tag) => {
//     res.json(tag);
//   })
//   .catch((err) => {
//     res.json(err);
// });
// });

// router.delete('/:id', (req, res) => {
//   // delete on tag by its `id` value
//   Tag.destroy({
//     where: {
//       id: req.params.id
//     }
//   })
//   .then((tag) => {
//     res.json(tag);
//   })
//   .catch((err) => {
//     res.json(err);
//   });
// });