const nestChildComments = (comments) => {
  const root = comments.filter((c) => !c.parent_comment_id);

  root.forEach((c) => {
    c.childComments = comments
      .filter((child) => child.parent_comment_id == c.id)
      .sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
  });

  return root;
};

module.exports = nestChildComments;
