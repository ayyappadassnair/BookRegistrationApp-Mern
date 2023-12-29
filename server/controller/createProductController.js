const {productModel} = require('../model/ProductSchema')

const productController = async(req,res)=>{
   try{
    const newBook = {
        bookName:req.body.bookName,
        authorName:req.body.authorName,
        description:req.body.description,
        publishYear:req.body.publishYear,
        distributor:req.body.distributor,
        image:req.body.distributor
    }

    var uniqueName = await productModel.find({"bookName":newBook.bookName})
    var uniqueAuthor = await productModel.find({"authorName":newBook.authorName})

    if(uniqueName.length>0 && uniqueAuthor.length>0){
      res.json({'status':false,'msg':"Book and Author already present..!"})
    }
   else{
    const book = await productModel.create(newBook)
      res.json({'status':true,'msg':"Registered successfully"})
   }
   }catch(err){
      console.log(err.message)
      res.status(500).send({message:err.message})
   }
}

module.exports = {productController}