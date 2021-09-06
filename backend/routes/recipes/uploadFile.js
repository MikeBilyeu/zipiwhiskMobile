const fs = require("fs");
const AWS = require("aws-sdk");
const keys = require("../../config/keys");

const s3 = new AWS.S3({
  accessKeyId: keys.accessKey,
  secretAccessKey: keys.secretKey,
});

const uploadFile = (fileName, id) => {
  // Read content from the file
  console.log(fileName);
  //--------------------------------------------
  const fileContent = fs.readFileSync(fileName);

  // Setting up S3 upload parameters
  const params = {
    Bucket: "zipiwhisk-media",
    Key: "recipe-media/" + id, // File name you want to save as in S3
    Body: fileContent,
  };
  let location = "";

  //Uploading files to the bucket
  s3.upload(params, function (err, data) {
    if (err) {
      throw err;
    }
    console.log(`File uploaded successfully. ${data.Location}`);
  });
};

module.exports = uploadFile;
