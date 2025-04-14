const express = require("express")
const router = express.Router();
const postsController = require("../controllers/postsController")

//index (read)
router.get("/", postsController.index)
//show (read)
router.get("/:slug", postsController.show)
// destroy 
router.delete("/:slug", postsController.destroy)


module.exports = router