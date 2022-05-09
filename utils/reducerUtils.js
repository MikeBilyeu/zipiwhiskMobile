export const saveFromRecipes = (recipes, id) =>
  recipes.map((r) =>
    r.id === id ? { ...r, saved: 1, numSaves: r.numSaves + 1 } : r
  );

export const unsaveFromRecipes = (recipes, id) =>
  recipes.map((r) =>
    r.id === id ? { ...r, saved: 0, numSaves: r.numSaves - 1 } : r
  );

export const likeFromRecipes = (recipes, id) =>
  recipes.map((r) =>
    r.id === id ? { ...r, liked: 1, numLikes: r.numLikes + 1 } : r
  );

export const unlikeFromRecipes = (recipes, id) =>
  recipes.map((r) =>
    r.id === id ? { ...r, liked: 0, numLikes: r.numLikes - 1 } : r
  );

export const removeFromRecipes = (recipes, id) =>
  recipes.filter((r) => r.id !== id);

export const followFromUsers = (users, id) =>
  users.map((u) => (u.id === id ? { ...u, isFollowing: true } : u));

export const unfollowFromUsers = (users, id) =>
  users.map((u) => (u.id === id ? { ...u, isFollowing: false } : u));
