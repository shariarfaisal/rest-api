const express = require('express')
const router = express.Router()
const authenticate = require('../middleware/authenticate')
const contactController = require('../controllers/contact')
//Get --> find()
router.get('/',contactController.getAllContactController)

// post --> save()
router.post('/',authenticate,contactController.postNewContactController)


//get single data --> findById
router.get('/:id',contactController.getSingleContact)

//update single data --> findByIdAndUpdate
router.put('/:id',authenticate,contactController.editContact)
//delete single data --> findByIdAndRemove
router.delete('/:id',authenticate,contactController.deleteContact)



module.exports = router
