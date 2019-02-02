const Contact = require('../modals/Contact')


const getAllContactController = (req,res,next) => {
  Contact.find()
  .then(contacts => {
    res.status(200).json({
      message: 'All Contacts',
      contacts
    })
  })
  .catch(err =>{
    console.log(err);
    res.status(500).json({
      message: 'Error Occured',
      error: err
    })
  })
}


const postNewContactController = (req,res,next) => {
  const contact = new Contact({
     name: req.body.name,
     phone: req.body.phone,
     email: req.body.email
  })

  contact.save()
  .then(data => {
    res.status(201).json({
      message: 'Contact Added',
      contact: data
    })
  })
  .catch(err =>{
    console.log(err);
    res.status(500).json({
      message: 'Error Occured',
      error: err
    })
  })
}

const getSingleContact = (req,res,next) => {
  let id = req.params.id

  Contact.findById(id)
        .then(contact => {
          res.status(200).json(
            contact
          )
        })
        .catch(err =>{
          console.log(err);
          res.status(500).json({
            message: 'Error Occured',
            error: err
          })
        })
}


const deleteContact = (req,res,next) => {
  let id = req.params.id

  Contact.findByIdAndRemove(id)
          .then(result => {
            res.json({
              message: 'Contact Deleted',
              result
            })
          })
          .catch(err =>{
            console.log(err);
            res.status(500).json({
              message: 'Error Occured',
              error: err
            })
          })
}

const editContact = (req,res,next) => {
  let id = req.params.id
  let updatedContact = {
    name: req.body.name,
    phone: req.body.phone,
    email: req.body.email
  }
  Contact.findByIdAndUpdate(id,{$set: updatedContact})
          .then(contact => {
            Contact.findById(contact._id)
                    .then(newContact => {
                      res.json({
                        message: 'Update Successfully',
                        newContact
                      })
                    })
          })
          .catch(err =>{
            console.log(err);
            res.status(500).json({
              message: 'Error Occured',
              error: err
            })
          })
}

module.exports = {
   getAllContactController,
   postNewContactController,
   getSingleContact,
   deleteContact,
   editContact
}
