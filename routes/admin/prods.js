var express = require("express");
var router = express.Router();
const { insertProds, deleteProd, updateProd, findProd, getAllProds } = require("../../controllers/prodController");
const { entryValidationRules, validate } = require('../../middlewares/validator');
const {upload} = require('../../s3Services/s3');

// Get all entries (news)
router.get(
  "/",
  getAllProds
);

router.get('/:id', findProd);

router.post('/', upload.array("image"),  
insertProds
  );

router.delete('/:id', deleteProd)

router.put('/:id', upload.array("image"), updateProd);


module.exports = router;
