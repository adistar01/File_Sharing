const express = require('express');
const { uploadImage, downloadImage } = require("../controller/image_controller")
const upload = require("../utils/upload.js")

const router = express.Router();

router.post('/upload', upload.single('file'), uploadImage);
router.get('/imageuploads/:fileId', downloadImage);

module.exports = router;