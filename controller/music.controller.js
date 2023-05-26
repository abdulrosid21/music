const { parse, format } = require("date-fns");
const musicModels = require("../model/music.model");

module.exports = {
  getAll: async (req, res) => {
    try {
      const result = await musicModels.getAll();
      return res
        .status(200)
        .json({ status: 200, msg: "Success det data", data: result });
    } catch (error) {
      console.log(error);
    }
  },
  uploadMusic: async (req, res) => {
    try {
      const { body } = req;
      const parsedDate = parse(body.release_date, "dd MMMM yyyy", new Date());
      const release_date = format(parsedDate, "yyyy-MM-dd");

      const data = {
        package_name: body.package_name,
        artist_name: body.artist_name,
        release_date: release_date,
        sample_url: req.files.song[0].path,
        price: body.price,
      };
      if (req.files.image) {
        data.image_url = req.files.image[0].filename;
      }
      const result = await musicModels.addMusic(data);
      return res
        .status(201)
        .json({ status: 201, msg: "Success add music", data: result });
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ status: 500, msg: "Internal server error" });
    }
  },
  editData: async (req, res) => {
    try {
      const { id } = req.params;
      const { package_name, artist_name, release_date, price } = req.body;
      const data = {
        package_name: package_name,
        artist_name: artist_name,
        release_date: release_date,
        price: price,
      };

      if (req.files.image) {
        data.image_url = req.files.image[0].filename;
      }
      if (req.files.song) {
        data.sample_url = req.files.song[0].path;
      }
      const result = await musicModels.editData(data, id);
      return res
        .status(200)
        .json({ status: 200, msg: "Success update data", data: result });
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ status: 500, msg: "Internal server error" });
    }
  },
  deleteData: async (req, res) => {
    try {
      const { id } = req.params;
      const result = await musicModels.deleteData(id);
      return res
        .status(200)
        .json({ status: 200, msg: "Success delete data", data: result });
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ status: 500, msg: "Internal server error" });
    }
  },
  getDataId: async (req, res) => {
    try {
      const { id } = req.params;
      const result = await musicModels.getdataId(id);
      return res
        .status(200)
        .json({ status: 200, msg: "Success delete data", data: result });
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ status: 500, msg: "Internal server error" });
    }
  },
};
