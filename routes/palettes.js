const express = require('express')
const {
    createPalette,
    getPalette,
    getPalettes,
    deletePalette,
    updatePalette
} = require('../controllers/paletteController')

const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

// require auth for all palette routes
router.use(requireAuth)
//GET all palettes
router.get('/', getPalettes)

//GET specific palettes
router.get('/:id', getPalette)

//POST a new palette
router.post('/', createPalette)

//DELETE a palette
router.delete('/:id', deletePalette)

//UPDATE a palette
router.patch('/:id', updatePalette)

module.exports = router