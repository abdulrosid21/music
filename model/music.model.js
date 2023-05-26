const db = require("../config/postgres");

module.exports = {
  addMusic: (data) => {
    return new Promise((resolve, reject) => {
      db.query(
        `insert into artist(${Object.keys(data)
          .map((key) => `${key}`)
          .join(",")}) values(${Object.keys(data).map(
          (key, index) => `$${index + 1}`
        )}) returning *`,
        [...Object.values(data)],
        (error, result) => {
          if (error) reject(error);
          else resolve(result.rows);
        }
      );
    });
  },
  getAll: () => {
    return new Promise((resolve, reject) => {
      db.query("select * from artist", (error, result) => {
        if (error) reject(error);
        else resolve(result.rows);
      });
    });
  },
  editData: (data, id) => {
    return new Promise((resolve, reject) => {
      db.query(
        `update artist set ${Object.keys(data)
          .map((key, index) => `${key}=$${index + 1}`)
          .join(",")} where id=$${Object.keys(data).length + 1} returning *`,
        [...Object.values(data), id],
        (error, result) => {
          if (error) reject(error);
          else resolve(result.rows);
        }
      );
    });
  },
  deleteData: (id) => {
    return new Promise((resolve, reject) => {
      db.query("delete from artist where id=$1", [id], (error, result) => {
        if (error) reject(error);
        else resolve(result.rows);
      });
    });
  },
  getdataId: (id) => {
    return new Promise((resolve, reject) => {
      db.query("select * from artist where id=$1", [id], (error, result) => {
        if (error) reject(error);
        else resolve(result.rows);
      });
    });
  },
};
