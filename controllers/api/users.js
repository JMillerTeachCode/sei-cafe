module.exports = {
  create,
};

// This function fires when a request is made to /api/users POST
function create(req, res) {
  //Baby step..
  console.trace('last step in lifecycle');
  res.json({
    user: {
      name: req.body.name,
      email: req.body.email,
    },
  });
}
