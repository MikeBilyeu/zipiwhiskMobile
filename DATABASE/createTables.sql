
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    image_url VARCHAR(255),
    full_name VARCHAR(100),
    username VARCHAR(100) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_encrypted BINARY(60),
    updated_at TIMESTAMP,
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE restrictions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    restriction VARCHAR(255) NOT NULL
);

CREATE TABLE users_restrictions (
    restriction_id INT,
    user_id INT,
    FOREIGN KEY(restriction_id) REFERENCES restrictions(id) ON DELETE CASCADE,
    FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE,
    PRIMARY KEY(restriction_id, user_id)
);

CREATE TABLE follows (
    following_id INT NOT NULL,
    follower_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    FOREIGN KEY (following_id) 
        REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (follower_id) 
        REFERENCES users(id) ON DELETE CASCADE,
    PRIMARY KEY(following_id, follower_id)
);

CREATE TABLE users_saves (
    user_id INT NOT NULL,
    recipe_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    FOREIGN KEY (user_id) 
        REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (recipe_id) 
        REFERENCES recipes(id) ON DELETE CASCADE,
    PRIMARY KEY (user_id, recipe_id)
);

CREATE TABLE recipes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    image_url VARCHAR(255),
    video_url VARCHAR(255),
    name VARCHAR(255) NOT NULL,
    yield int NOT NULL,
    total_time_min INT NOT NULL,
    instructions TEXT,
    latitude FLOAT,
    longitude FLOAT,
    updated_at TIMESTAMP,
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE users_recipes (
    user_id INT NOT NULL,
    recipe_id INT NOT NULL UNIQUE,
    FOREIGN KEY (user_id) 
        REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (recipe_id) 
        REFERENCES recipes(id) ON DELETE CASCADE
    PRIMARY KEY (user_id, recipe_id)
);


CREATE TABLE recipes_restrictions (
    recipe_id INT NOT NULL,
    restriction_id IN NOT NULL,
    FOREIGN KEY (recipe_id) 
        REFERENCES recipes(id) ON DELETE CASCADE,
    FOREIGN KEY (restriction_id) 
        REFERENCES restrictions(id) ON DELETE CASCADE,
    PRIMARY KEY (recipe_id, restriction_id)
);

CREATE TABLE modified_recipes (
    parent_recipe_id INT,
    child_recipe_id INT UNIQUE,
    FOREIGN KEY (parent_recipe_id) 
        REFERENCES recipes(id) ON DELETE CASCADE,
    FOREIGN KEY (child_recipe_id) 
        REFERENCES recipes(id) ON DELETE CASCADE
    PRIMARY KEY (parent_recipe_id, child_recipe_id)
);

CREATE TABLE categories (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    category VARCHAR(25) NOT NULL UNIQUE,
);

CREATE TABLE recipes_categories (
    recipe_id INT NOT NULL,
    category_id INT NOT NULL,
    FOREIGN KEY (recipe_id) 
        REFERENCES recipes(id) ON DELETE CASCADE,
    FOREIGN KEY (category_id) 
        REFERENCES categories(id) ON DELETE CASCADE,
    PRIMARY KEY (recipe_id, category_id)
);

CREATE TABLE ingredients (
     id INT AUTO_INCREMENT PRIMARY KEY,
     name VARCHAR(255) UNIQUE NOT NULL
     created_at TIMESTAMP DEFAULT NOW()
)

CREATE TABLE recipes_ingredients (
    recipe_id INT NOT NULL,
    ingredient_id INT NOT NULL,
    amount VARCHAR(255),
    ingredient_order INT,
    FOREIGN KEY (recipe_id) 
        REFERENCES recipe(id) ON DELETE CASCADE,
    FOREIGN KEY (ingredient_id) 
        REFERENCES ingredient(id) ON DELETE CASCADE,
    PRIMARY KEY (recipe_id, ingredient_id)
);

CREATE TABLE keywords (
    id INT AUTO_INCREMENT PRIMARY KEY,
    keyword VARCHAR(255)
);

CREATE TABLE recipes_keywords (
    keyword_id INT NOT NULL,
    recipe_id INT NOT NULL,
    keyword_order INT,
    FOREIGN KEY (keyword_id) 
        REFERENCES keywords(id),
    FOREIGN KEY (recipe_id) 
        REFERENCES recipes(id) ON DELETE CASCADE
    PRIMARY KEY (keyword_id, recipe_id)
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
        REFERENCES recipes(id) ON DELETE CASCADE
    FOREIGN KEY (parent_comment_id) 
        REFERENCES comments(id) ON DELETE CASCADE
);

CREATE TABLE comments_likes (
    user_id INT NOT NULL,
    comment_id INT NOT NULL,
    FOREIGN KEY (user_id) 
        REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (comment_id) 
        REFERENCES coments(id) ON DELETE CASCADE
    PRIMARY KEY (user_id, comment_id)
);