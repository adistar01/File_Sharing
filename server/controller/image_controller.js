const File = require("../models/file.js");
const dotenv = require('dotenv');

dotenv.config();

const uploadImage = async(req, res)=>{
    const fileObj = {
        path: req.file.path,
        name: req.file.originalname
    }
    try{
        const file = await File.create(fileObj);
        //console.log("create");
        // console.log(file)
        res.status(201).json({path: `http://localhost:${process.env.PORT}/imageuploads/${file._id}`})
    }catch(error){
        console.error(error.message);
        res.status(500).json({error: error.message})
    }
};


const downloadImage = async(req, res)=>{
    try{
        const file = await File.findById(req.params.fileId);
        console.log(file);
        file.downloadContent++;
        await file.save();
        return res.download(file.path, file.name);
    }catch(error){
        console.error(error.message);
        return res.status(500).json({error: error.message});
    }
}

module.exports = {
    uploadImage,
    downloadImage
}