const express = require("express");
const { renderHome, addUser,loginSuccess,createAccount } = require("../controller/userController");
const router = express.Router();

router.get("/", renderHome);
router.post("/add", addUser);
router.get("/loginSuccess",loginSuccess)
// router.get('/createAccount', (req, res) => {
//     res.render('createAccount'); // Ensure you have a 'nextpage.ejs' in your views folder
// });
router.get("/createAccount", createAccount)
module.exports = router;