const router = require("express").Router();
const Resources = require("./model.js");

router.get("/", (req, res) => {
  Resources.find()
    .then((resources) => {
      res.status(200).json(resources);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get resources", error: err });
    });
});

router.post("/", (req, res) => {
  const resource = req.body;
  Resources.create(resource)
    .then((newResource) => {
      res.status(201).json(newResource);
    })
    .catch((err) => {
      res
        .status(500)
        .json({ message: "Failed to create new resource", error: err });
    });
});
// build your `/api/resources` router here
// [POST] /api/resources

// Example of response body: {"resource_id":1,"resource_name":"foo","resource_description":null}
//  [GET] /api/resources

// Example of response body: [{"resource_id":1,"resource_name":"foo","resource_description":null}]

module.exports = router;
