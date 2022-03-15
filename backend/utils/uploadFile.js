const fs = require("fs");
const S3 = require("aws-sdk/clients/s3");
const keys = require("../config/keys");

const s3 = new S3({
  accessKeyId: keys.accessKey,
  secretAccessKey: keys.secretKey,
});

const uploadFile = async (keyPrefix, uri, id) => {
  // Read content from the file
  const fileContent = fs.readFileSync(decodeURIComponent(uri.substring(7)));

  // Setting up S3 upload parameters
  const params = {
    Bucket: "zipiwhisk-media",
    Key: keyPrefix + id + ".jpg", // File name you want to save as in S3
    Body: fileContent,
    ContentType: "image/jpeg",
    ACL: "public-read",
    type: "jpg",
  };

  //Uploading files to the bucket
  await s3.upload(params, (err) => {
    if (err) throw err;
  });
  return `https://zipiwhisk-media.s3.us-east-2.amazonaws.com/${
    keyPrefix + id
  }.jpg`;
};

module.exports = uploadFile;
