
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    image_url VARCHAR(255) NOT NULL 
        DEFAULT 'https://res.cloudinary.com/mikebilyeuimg/image/upload/v1620916867/whisk-256.png',
    fullname VARCHAR(100),
    username VARCHAR(100) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_encrypted VARCHAR(60) NOT NULL,
    updated_at TIMESTAMP,
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE verifications (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    token VARCHAR(255) NOT NULL,
    verified BOOLEAN DEFAULT 0, 
    updated_at TIMESTAMP,
    created_at TIMESTAMP DEFAULT NOW(),
    FOREIGN KEY (user_id)
        REFERENCES users(id) ON DELETE CASCADE
);

-- CREATE TABLE restrictions (
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     restriction VARCHAR(255) UNIQUE NOT NULL
-- );

CREATE TABLE users_restrictions (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    restriction VARCHAR(50) NOT NULL DEFAULT 'omnivore'
);

CREATE TABLE recipes_restrictions (
    recipe_id INT PRIMARY KEY,
    restriction VARCHAR(50) NOT NULL DEFAULT 'omnivore',
    FOREIGN KEY (recipe_id) 
        REFERENCES recipes(id) ON DELETE CASCADE
);

-- CREATE TABLE users_restrictions (
--     restriction_id INT NOT NULL,
--     user_id INT NOT NULL,
--     FOREIGN KEY (restriction_id) 
--         REFERENCES restrictions(id) ON DELETE CASCADE,
--     FOREIGN KEY (user_id)
--          REFERENCES users(id) ON DELETE CASCADE,
--     PRIMARY KEY (restriction_id, user_id)
-- );

CREATE TABLE follows (
    following_id INT NOT NULL,
    follower_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    FOREIGN KEY (following_id) 
        REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (follower_id) 
        REFERENCES users(id) ON DELETE CASCADE,
    PRIMARY KEY(following_id, follower_id),
    CHECK (following_id != follower_id)
);

CREATE TABLE users_saves (
    user_id INT NOT NULL,
    recipe_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    FOREIGN KEY (user_id) 
        REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (recipe_id) 
        REFERENCES recipes(id) ON DELETE CASCADE,
    PRIMARY KEY(user_id, recipe_id)
);

CREATE TABLE users_likes (
    user_id INT NOT NULL,
    recipe_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    FOREIGN KEY (user_id) 
        REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (recipe_id) 
        REFERENCES recipes(id) ON DELETE CASCADE,
    PRIMARY KEY(user_id, recipe_id)
);

CREATE TABLE recipes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    media_url VARCHAR(255) NOT NULL,
    media_type VARCHAR(10) NOT NULL,
    recipe_name VARCHAR(255) NOT NULL,
    yield int NOT NULL,
    total_time_min INT NOT NULL,
    caption TEXT,
    instructions TEXT NOT NULL,
    latitude FLOAT,
    longitude FLOAT,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP
);

CREATE TABLE users_recipes (
    user_id INT NOT NULL,
    recipe_id INT NOT NULL UNIQUE,
    FOREIGN KEY (user_id) 
        REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (recipe_id) 
        REFERENCES recipes(id) ON DELETE CASCADE,
    PRIMARY KEY(user_id, recipe_id)
);


-- CREATE TABLE recipes_restrictions (
--     recipe_id INT NOT NULL,
--     restriction_id INT NOT NULL,
--     FOREIGN KEY (recipe_id) 
--         REFERENCES recipes(id) ON DELETE CASCADE,
--     FOREIGN KEY (restriction_id) 
--         REFERENCES restrictions(id) ON DELETE CASCADE,
--     PRIMARY KEY(recipe_id, restriction_id)
-- );

CREATE TABLE modified_recipes (
    parent_recipe_id INT,
    child_recipe_id INT UNIQUE,
    FOREIGN KEY (parent_recipe_id) 
        REFERENCES recipes(id) ON DELETE CASCADE,
    FOREIGN KEY (child_recipe_id) 
        REFERENCES recipes(id) ON DELETE CASCADE,
    PRIMARY KEY(parent_recipe_id, child_recipe_id)
);

-- CREATE TABLE categories (
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     category VARCHAR(25) UNIQUE NOT NULL
-- );

CREATE TABLE recipes_categories (
    recipe_id INT NOT NULL,
    category VARCHAR(25) NOT NULL,
    FOREIGN KEY (recipe_id) 
        REFERENCES recipes(id) ON DELETE CASCADE,
    PRIMARY KEY(recipe_id, category)
);

CREATE TABLE ingredients (
     id INT AUTO_INCREMENT PRIMARY KEY,
     name VARCHAR(255) UNIQUE NOT NULL,
     created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE ing_images (
    id INT AUTO_INCREMENT PRIMARY KEY,
    image_url VARCHAR(255) NOT NULL
);

CREATE TABLE ingredients_ing_images (
    ing_image_id INT NOT NULL,
    ingredient_id INT NOT NULL,
    FOREIGN KEY (ing_image_id) 
        REFERENCES ing_images(id) ON DELETE CASCADE,
    FOREIGN KEY (ingredient_id) 
        REFERENCES ingredients(id) ON DELETE CASCADE,
    PRIMARY KEY (ing_image_id, ingredient_id)
);

CREATE TABLE recipes_ingredients (
    recipe_id INT NOT NULL,
    ingredient_id INT NOT NULL,
    amount VARCHAR(255),
    ingredient_order INT NOT NULL,
    FOREIGN KEY (recipe_id) 
        REFERENCES recipes(id) ON DELETE CASCADE,
    FOREIGN KEY (ingredient_id) 
        REFERENCES ingredients(id) ON DELETE CASCADE,
    PRIMARY KEY(recipe_id, ingredient_id)
);

CREATE TABLE keywords (
    id INT AUTO_INCREMENT PRIMARY KEY,
    keyword VARCHAR(255) UNIQUE NOT NULL
);

CREATE TABLE recipes_keywords (
    keyword_id INT NOT NULL,
    recipe_id INT NOT NULL,
    keyword_order INT,
    FOREIGN KEY (keyword_id) 
        REFERENCES keywords(id),
    FOREIGN KEY (recipe_id) 
        REFERENCES recipes(id) ON DELETE CASCADE,
    PRIMARY KEY(keyword_id, recipe_id)
);

CREATE TABLE comments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    recipe_id INT NOT NULL,
    comment TEXT NOT NULL,
    parent_comment_id INT,
    updated_at TIMESTAMP,
    created_at TIMESTAMP DEFAULT NOW(),
    FOREIGN KEY (user_id) 
        REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (recipe_id) 
        REFERENCES recipes(id) ON DELETE CASCADE,
    FOREIGN KEY (parent_comment_id) 
        REFERENCES comments(id) ON DELETE CASCADE
);

CREATE TABLE comments_likes (
    user_id INT NOT NULL,
    comment_id INT NOT NULL,
    FOREIGN KEY (user_id) 
        REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (comment_id) 
        REFERENCES comments(id) ON DELETE CASCADE,
    PRIMARY KEY(user_id, comment_id)
);


        SELECT 
        id, 
        username, 
        fullname, 
        email, 
        image_url, 
        COUNT(DISTINCT f.follower_id) AS isfollowing,
        COUNT(DISTINCT followers.follower_id) AS num_followers,
        COUNT(DISTINCT followings.following_id) AS num_followings,
        ur.restriction AS restriction 
        FROM users u 
        LEFT JOIN follows f 
        ON u.id = f.follower_id AND f.following_id = 1
        LEFT JOIN follows followers
        ON u.id = followers.following_id
        LEFT JOIN follows followings
        ON u.id = followings.follower_id
        LEFT JOIN users_restrictions ur
        ON u.id = ur.user_id
        WHERE u.id = 2;

