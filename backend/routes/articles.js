const express = require('express')
const {
  getArticles,
  getArticle,
  getAllArticles,
  createArticle,
  deleteArticle,
  updateArticle,
} = require('../controllers/articleController')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

// require auth for all article routes
router.use(requireAuth)

// GET all articles
router.get('/', getAllArticles)

router.get('/myarticles', getArticles)

//GET a single article
router.get('/:id', getArticle)

// POST a new article
router.post('/', createArticle)

// DELETE a article
router.delete('/:id', deleteArticle)

// UPDATE a article
router.patch('/:id', updateArticle)


module.exports = router