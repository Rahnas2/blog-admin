const cloudinary = require('../config/cloudinary')

const uploadToCloudinary = (fileBuffer) => {
    return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
            { folder: "blog-admin" },
            (error, result) => {
                if (error) return reject(error);
                resolve(result);
            }
        );
        stream.end(fileBuffer); // pipe buffer to Cloudinary
    });
};


module.exports = uploadToCloudinary