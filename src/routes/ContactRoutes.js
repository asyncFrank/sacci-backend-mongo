const { addContact, allContacts } = require("../controllers/ContactController");

const router = require("express").Router();

router.post("/add", addContact);
router.get("/all", allContacts);

module.exports = router;
