var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next){
res.render('admin/add-product',{admin:true})

})

router.post('/submit',(req,res)=>{
  res.render('admin/add-product')
  console.log(req.body);
  console.log(req.files.product_image);
})


module.exports = router;
