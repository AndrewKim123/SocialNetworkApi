const router  = require("express").Router();
const Thought = require("../models/Thought")
const User = require("../models/User")

router.get("/",async(req,res)=>{
    const data = await Thought.find({});
    res.json(data)
})

router.post("/",async(req,res)=>{
    const thought = new Thought(req.body);
    await thought.save();
    await User.findByIdAndUpdate({_id:req.body.userId},{$push:{thoughts:thought._id}},{new:true})
    res.json(thought)
})

router.get("/:id",async(req,res)=>{
    const thought = await Thought.findById(req.params.id)
    res.json(thought)
})

router.put("/:id",async(req,res)=>{
    const data = await Thought.findByIdAndUpdate({_id:req.params.id},req.body,{new:true})
    res.json(data)
})

router.delete("/:id",async(req,res)=>{
    const data = await Thought.findByIdAndDelete({_id:req.params.id});
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