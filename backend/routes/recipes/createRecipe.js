const pool = require("../../config/db");
const uploadFile = require("../../utils/uploadFile");

module.exports = async (req, res) => {
  const { id: user_id } = req.user;
  let {
    recipe_name,
    instructions,
    servings,
    timeHours,
    timeMins,
    categories,
    image_url: media_url,
    video_urls,
    media_type,
    caption,
    ingredients,
  } = req.body.recipe;

  const recipes = {
    media_type,
    recipe_name,
    yield: parseInt(servings),
    total_time_min: parseInt(timeHours * 60 + timeMins) || 0,
    instructions,
    caption,
    ingredients,
  };

  try {
    pool.query("INSERT INTO recipes SET ?", recipes, (err, { insertId }) => {
      if (err) throw err;

      //INSERT INTO USERS_RECIPES
      pool.query(
        "INSERT INTO users_recipes (user_id, recipe_id) VALUES (?, ?)",
        [user_id, insertId],
        async (err) => {
          if (err) throw err;

          //INSERT RECIPE MEDIA
          let mediaURL = await uploadFile("recipe-media/", media_url, insertId);

          pool.query(
            "UPDATE recipes SET media_url = ? WHERE id = ?",
            [mediaURL, insertId],
            (err) => {
              if (err) throw err;

              //INSTERT CATEGORIES
              categories
                .filter((c) => c.selected)
                .forEach((c) => {
                  pool.query(
                    "INSERT INTO recipes_categories (recipe_id, category) VALUES (?, ?);",
                    [insertId, c.name],
                    (err) => {
                      if (err) throw err;
                    }
                  );
                });
            }
          );
          return res.status(201).send(`recipe added with ID: ${insertId}`);
        }
      );
    });
  } catch (err) {
    return res.status(400).json(err);
  }
};

// const mediaUrl = `https://zipiwhisk-media.s3.amazonaws.com/recipe-media/${results.insertId}`;
