const express = require('express');
const { createItem, getItems, getItemById, updateItem, deleteItem } = require('../controllers/itemController');
const router = express.Router();

router.post('/create-item', createItem);
router.get('/getItems', getItems);
router.get('/get-item/:id', getItemById);      // Added leading slash
router.put('/update-item/:id', updateItem);    // Added leading slash
router.delete('/delete-item/:id', deleteItem); // Added leading slash

module.exports = router;