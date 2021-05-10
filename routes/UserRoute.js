const router = require('express').Router();

const {sendData, getData, deleteData, updateData} = require('../config/userConfig')

router.post("/", sendData);
router.get("/", getData);
router.delete("/:id", deleteData);
router.put("/:id", updateData);


module.exports = router;