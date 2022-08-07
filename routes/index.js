const usersRouter = require("./users");
const thoughtsRouter = require("./thoughts");

const router = require("express").Router()

router.use("/users",usersRouter);
router.use("/thoughts",thoughtsRouter);

module.exports = router