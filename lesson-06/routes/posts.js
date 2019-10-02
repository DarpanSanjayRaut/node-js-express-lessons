const express = require('express');
const router = express.Router();
const Post = require('../model/Post')

router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        return res.json(posts)
    } catch (e) {
        return res.json({ message: e })
    }
})

router.post('/', async (req, res) => {
    console.log(req.body)

    const post = new Post({
        title: req.body.title,
        description: req.body.description,
        date: req.body.date
    })
    try {
        const savPost = await post.save()
        return res.json(savPost)
    } catch (e) {
        return res.send({ status: 'failed', message: e })
    }

})


module.exports = router;