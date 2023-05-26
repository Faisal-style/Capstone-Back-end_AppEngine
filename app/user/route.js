const Express = require("express");
const authenticationToken = require("../../middleware/authenticationToken");
const {
  handlerLoginUser,
  handlerRegister,
  handlerGetUserById,
  handlerChangeImageUser,
  handlerUpdateBiodataUser
} = require("./handler");
const router = Express.Router();
const uploadImage = require("../../utils/multerImage");
const uploadToStorage = require("../../utils/googleStorage");


router.get('/:id', authenticationToken, handlerGetUserById);
router.post("/register", handlerRegister);
router.post("/login", handlerLoginUser);
router.put("/updateprofile", authenticationToken, uploadImage.single("image"),uploadToStorage, handlerChangeImageUser);
router.put("/updatebiodata", authenticationToken, handlerUpdateBiodataUser);

module.exports = router;
