const multer = require("multer");
// const handler = require("./handler");

const supportType = ["image/jpeg", "image/png","image/jpg"];
const storage = multer.memoryStorage({
  filename: function (req, file, cb) {
    if (!supportType.includes(file.mimetype)) {
      cb(new Error("File type not supported"), null);
      return;
    }
  },
});
const uploadImage = multer({
  storage: multer.memoryStorage(),
});

module.exports = uploadImage;