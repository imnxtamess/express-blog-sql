const express = require("express")
const router = express.Router();
const postsController = require("../controllers/postsController")

//index (read)
router.get("/", postsController.index)

//show (read)
router.get("/:slug", postsController.show)

//store (create)
router.post("/", postsController.store)

//update (update)
router.put("/:slug", postsController.update)

//modify (update)
router.patch("/:slug", postsController.modify)

//destroy (delete)
router.delete("/:slug", postsController.destroy)

module.exports = router