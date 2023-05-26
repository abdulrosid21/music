const multer = require("multer");

module.exports = {
  uploadMusicAndImage: (req, res, next) => {
    const storage = multer.diskStorage({
      destination: function (req, file, cb) {
        if (file.fieldname === "song") {
          cb(null, "./music");
        } else if (file.fieldname === "image") {
          cb(null, "./images");
        } else {
          cb(new Error("Invalid fieldname"));
        }
      },
      filename: function (req, file, cb) {
        const fileExtension = file.originalname.split(".").pop();
        const fileName =
          file.fieldname + "_" + Date.now() + "." + fileExtension;
        cb(null, fileName);
      },
    });

    const upload = multer({
      storage: storage,
      fileFilter: (req, file, cb) => {
        if (
          (file.fieldname === "song" && file.mimetype !== "audio/mpeg") ||
          (file.fieldname === "image" &&
            file.mimetype.split("/")[0] !== "image")
        ) {
          return cb(new Error("Invalid file type"));
        }
        cb(null, true);
      },
    }).fields([
      { name: "song", maxCount: 1 },
      { name: "image", maxCount: 1 },
    ]);

    upload(req, res, function (err) {
      if (err instanceof multer.MulterError) {
        return res.status(401).json({ msg: err.message });
      } else if (err) {
        return res.status(500).json({ status: 500, msg: err.message });
      }
      next();
    });
  },
};
