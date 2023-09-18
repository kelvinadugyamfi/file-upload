const cloudinary = require ('cloudinary').v2

const cloudConfig = cloudinary.config({
    cloud_name : 'dlndvnsyi',
    api_key : '157812722494762',
    api_secret : '90JodaWIxR7e9waFfUNzI-OR4JE'
})

const uploadImage = './anime.jpeg'

const uploadFile = async ()=>{
   try{
    const output = await cloudinary.uploader.upload(uploadImage)
    console.log(output)
   }catch(err){
    console.log(err)
}
}

uploadFile()