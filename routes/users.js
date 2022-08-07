const router  = require("express").Router();
const User = require("../models/User")


router.get("/",async(req,res)=>{
    const data = await User.find({});
    res.json(data)
})

router.post("/",async(req,res)=>{
    const user = new User(req.body);
    await user.save()
    res.json(user)
})

router.get("/:id",async(req,res)=>{
    const user = await User.findById(req.params.id).populate("friends").populate("thoughts")
    res.json(user)
})

router.put("/:id",async(req,res)=>{
    const data = await User.findByIdAndUpdate({_id:req.params.id},req.body,{new:true})
    res.json(data)
})

router.delete("/:id",async(req,res)=>{
    const data = await User.findByIdAndDelete({_id:req.params.id});
    res.json(data)
})

router.post("/:userId/friends/:friendId",async(req,res)=>{
    const data = await User.findByIdAndUpdate({_id:req.params.userId},{$push:{friends:req.params.friendId}},{new:true})
    res.json(data)
})

router.delete("/:userId/friends/:friendId",async(req,res)=>{
    const data = await User.findByIdAndUpdate({_id:req.params.userId},{$pull:{friends:req.params.friendId}},{new:true})
    res.json(data)
})

module.exports = router