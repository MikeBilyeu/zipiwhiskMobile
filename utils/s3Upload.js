import { RNS3 } from "react-native-aws3";
const keys = require("../backend/config/keys");

//AWS S3 media Upload
const s3Upload = (uri, keyPrefix, name) => async () => {
  return RNS3.put(
    {
      uri: uri,
      name: name,
      type: "",
    },
    {
      keyPrefix: keyPrefix,
      bucket: "zipiwhisk-media",
      region: "us-east-2",
      accessKey: keys.accessKey,
      secretKey: keys.secretKey,
      successActionStatus: 201,
    }
  ).then((response) => {
    if (response.status !== 201) {
      //throw error
      alert("Sorry, Failed to upload image");
    }
    let { location } = response.body.postResponse;
    return location;
  });
};

export default s3Upload;
