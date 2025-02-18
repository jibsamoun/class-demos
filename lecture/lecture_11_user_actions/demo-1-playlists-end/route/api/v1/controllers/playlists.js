import express from 'express'
let router = express.Router()

router.get("/", async(req, res) => {
    try {
        let userId = req.query.userId;
        let userPlaylists = await req.models.Playlist.find({user: userId})
        res.json(userPlaylists);        
        // let allUsers = await req.models.User.find()
        // res.json(allUsers);
    } catch (err) {
        console.log("error from get route", err)
        res.status(500).json({status: "error"})
    }
})

router.post("/", async(req, res) => {
    try {
        console.log("playlists post", req);
        let songs = req.body.songs;
        let title = req.body.title;
        let userId = req.body.userId;

        let newPlaylist = req.models.Playlist({
            title: title,
            songs: songs,
            user: userId
        })
        await newPlaylist.save();

        // const username = req.body.username;
        // let newUser = new req.models.User({
        //     username: username
        // })
        // await newUser.save();
        res.json({status: "success"})
    } catch (err) {
        console.log("error", err)
        res.status(500).json({status: "error"})
    }
})

export default router;