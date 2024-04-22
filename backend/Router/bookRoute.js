import express from 'express'
import { getBook } from '../Controller/bookController.js'

const router = express.Router()

router.get("/", getBook);

export default router;
// module.exports = router;