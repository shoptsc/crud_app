const router = require('express').Router();

const {sendData, getData, deleteData, updateData} = require('../config/userConfig')

router.post("/api", sendData);
router.get("/api", getData);
router.delete("/api/:id", deleteData);
router.put("/api/:id", updateData);


module.exports = router;