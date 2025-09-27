const express = require('express');
const upload = require('../middlewares/multer.middleware');
const { protect } = require('../middlewares/auth.middleware');
const {createBlog, getAllBlog, getBlog, deleteBlog} = require('../controllers/blog.controller')
const {validateBody, validateParams} = require('../middlewares/validate.middleware');
const blogSchema = require('../validations/blog.validator');
const idSchema = require('../validations/id.validator');


const router = express.Router(); 

router.route('/')
.post(protect, validateBody(blogSchema), upload.single('image'), createBlog)
.get(protect, getAllBlog)

router.route('/:id')
.get(protect, validateParams(idSchema), getBlog)
.delete(protect, validateParams(idSchema), deleteBlog)

module.exports = router