var express = require('express');
var router = express.Router();
var multer = require('multer')
var upload = multer()

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/api/fileanalyse', upload.single('upfile'), async (req, res, next) => {
  res.json({
    name: req.file?.originalname,
    type: req.file?.mimetype,
    size: req.file?.size,
  })
  next()
})

module.exports = router;
