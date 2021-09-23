const pool = require("../../config/db");
const uploadFile = require("./uploadFile");

module.exports = async (req, res) => {
  const { id } = req.user;
  let {
    recipe_name,
    media_type,
    instructions,
    servings,
    timeHours,
    timeMins,
    categories,
    media_url,
    ingredients,
    keywords,
  } = req.body.recipe;

  const recipe = {
    media_type,
    recipe_name,
    yield: parseInt(servings),
    total_time_min: parseInt(timeHours * 60 + timeMins),
    instructions,
    ingredients,
  };

  //res.status(201).send(`ok`);
  try {
    pool.query("INSERT INTO recipes SET ?", recipe, (err, { insertId }) => {
      if (err) throw err;
      pool.query(
        "INSERT INTO users_recipes (user_id, recipe_id) VALUES (?, ?)",
        [id, insertId],
        (err) => {
          if (err) throw err;
          categories
            .filter((c) => c.selected)
            .forEach((c) => {
              pool.query(
                "INSERT INTO recipes_categories (recipe_id, category) VALUES (?, ?)",
                [insertId, c.name],
                (err) => {
                  if (err) throw err;
                }
              );
            });

          keywords
            .split(",")
            .map((item) => item.trim())
            .forEach((k, i) => {
              pool.query(
                // `INSERT IGNORE INTO keywords (keyword) VALUES (?)`,
                `INSERT INTO keywords (keyword) VALUES (?) ON DUPLICATE KEY UPDATE id=id;`,
                k,
                (err) => {
                  if (err) throw err;
                }
              );
            });

          res.status(201).send(`recipe added with ID: ${insertId}`);
        }
      );
    });
  } catch (err) {
    console.error(err);
    res.status(400).json(err);
  }
};

// uploadFile(media_url, results.insertId);
// const mediaUrl = `https://zipiwhisk-media.s3.amazonaws.com/recipe-media/${results.insertId}`;
