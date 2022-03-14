const fs = require("fs");
const AWS = require("aws-sdk");
const keys = require("../../config/keys");

const s3 = new AWS.S3({
  accessKeyId: keys.accessKey,
  secretAccessKey: keys.secretKey,
});

const uploadFile = (fileName, id) => {
  return new Promise((resolve, reject) => {
    // Read content from the file
    const fileContent = fs.readFileSync(fileName);

    console.log("in promise:", fileName, id);

    // Setting up S3 upload parameters
    const params = {
      Bucket: "zipiwhisk-media",
      Key: "recipe-media/" + id, // File name you want to save as in S3
      Body: fileContent,
    };

    //Uploading files to the bucket

    s3.upload(params, (err, data) => {
      if (err) reject(err);
      console.log("uploaded: ", data.Location);
      resolve(data.Location);
    });
  });
};

module.exports = uploadFile;
