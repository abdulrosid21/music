const express = require("express");
const routes = express.Router();
const musicController = require("../controller/music.controller");
const multer = require("../middleware/multer");

routes.get("/music", musicController.getAll);
routes.post(
  "/music/upload",
  multer.uploadMusicAndImage,
  musicController.uploadMusic
);
routes.patch(
  "/music/:id",
  multer.uploadMusicAndImage,
  musicController.editData
);
routes.delete("/music/:id", musicController.deleteData);
routes.get("/music/:id", musicController.getDataId);

module.exports = routes;
