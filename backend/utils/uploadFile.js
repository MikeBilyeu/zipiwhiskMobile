const fs = require("fs");
const S3 = require("aws-sdk/clients/s3");
const keys = require("../config/keys");

const s3 = new S3({
  accessKeyId: keys.accessKey,
  secretAccessKey: keys.secretKey,
});

const uploadFile = (keyPrefix, uri, id) => {
  return new Promise((resolve, reject) => {
    // Read content from the file
    const regex = /\.(gif|jpe?g|tiff?|png|webp|bmp|heif)/i;
    const imageFormat = uri.match(regex);
    const fileContent = fs.readFileSync(decodeURIComponent(uri.substring(7)));

    if (!imageFormat) throw reject("Image format not supported");

    // Setting up S3 upload parameters
    const params = {
      Bucket: "zipiwhisk-media",
      Key: keyPrefix + id + imageFormat[0], // File name you want to save as in S3
      Body: fileContent,
      ContentType: "image/jpeg",
      ACL: "public-read",
      type: "jpg",
    };

    //Uploading files to the bucket
    s3.upload(params, (err, data) => {
      if (err) reject(err);
      resolve(data.Location);
    });
  });
};

module.exports = uploadFile;
