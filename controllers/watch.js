
import Watch from "./../Models/watch.js";




 const postwatch = async(req,res)=>{
        const {
            name ,
            company ,
            image ,
            price , 
            description} = req.body


            const newwatch = new Watch({
              name:name,
              company: company,
              image:image,
              price:price,
              description:description
          })
        
        const savedwatch = await newwatch.save();
         
            res.json({
             successs:true,
             data: savedwatch,
              message:"new watch added successfilly" 
            })
      }

     const getwatches = async (req,res)=>{

       const allwatches = await Watch.find().sort({createdAt: -1})

        res.json({
          successs:true,
          data: allwatches,
          message:"all watch fetched  successfully" 
        })
      }

     const getwatchId = async (req,res)=>{
        const {id}=req.params
       const watch = await Watch.findById(id)
         res.json({
         successs:watch ? true : false,
         data: watch ? watch : null,
         message:watch? " watch fetched  successfully"  : " watch not found"
       })
     }


     const putwatchId = async (req,res)=>{
        const {
          name ,
          company ,
          image ,
          price , 
          description} = req.body
      
         const {id} = req.params

        await Watch.updateOne({_id:id},{
          $set:{
            name:name,
            company:company,
            image:image,
            price:price,
            description:description
          }
         })

         const Updatedwatch = await Watch.findById(id)

         res.json({
          success:true,
          message:"watch Updated Successfully",
          Data:Updatedwatch
         })
      
       
     }

     const deletewatchID = async(req,res)=>{
        const {id} = req.params
         await Watch.deleteOne({
          _id:id
         })
      
      res.json({
            successs:true,
            data: null,
            message:"watch deleted successfully"
          })
        }


      export {
        postwatch,
        getwatches,
        getwatchId,
        putwatchId,
        deletewatchID
       
      }