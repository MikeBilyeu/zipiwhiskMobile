const pool = require("../../config/db");
const uploadFile = require("../../utils/uploadFile");

module.exports = async (req, res) => {
  const { id } = req.user; // Get user_id from auth
  let { username, fullname, restriction, image_url } = req.body;

  try {
    //INSERT RECIPE MEDIA
    image_url = await uploadFile("profile-image/", image_url, id);

    pool.query(
      `UPDATE users u, users_restrictions ur 
      SET u.username = ?, u.fullname = NULLIF(?, ''), 
      u.image_url = ?, ur.restriction = ? 
      WHERE u.id = ? AND ur.user_id = ?`,
      [username, fullname, image_url, restriction, id, id],
      async (error, results, fields) => {
        try {
          if (error) throw error;
          return res.status(200).end();
        } catch (err) {
          console.log(err);
          return res.status(400);
        }
      }
    );
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};
