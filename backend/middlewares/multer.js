const multer=require('multer')


var storage = multer.diskStorage({
  destination: function (req, file, cb) {
   
    cb(null, './public')
  },
  filename: function (req, file, cb) {
   
    cb(null, 'vehicleTempName.jpg')
  }
})
let upload = multer({ storage: storage })

module.exports=upload