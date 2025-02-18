import express from 'express'
let router = express.Router() // enables defining API endpoints
// router will be exported at the end and used in apiv1.js


// req: contains details abt request
// res: used to send data back to client
// async allows function to use await 
router.get("/", async(req, res) => {
    // "/" refers to the root of user.js router
    try {
        // Uses await to pause execution until database finishes query of getting all users
        let allUsers = await req.models.User.find()
        // sends retrieved users to client in JSON format
        res.json(allUsers);
    } catch (err) {
        console.log("error from get route", err)
        // send error status to client in JSON format
        res.status(500).json({status: "error"})
    }
})

// defines post endpoint at /users (creates new user)
router.post("/", async(req, res) => {
    // try/catch is used to ensure any errors dont crash the application
    try { // attempts a risky operation (usually involving interacting w/ a database or processing data)
        const username = req.body.username; //Grabbing username from request body
        let newUser = new req.models.User({ // Creates new user object based on extracted username
            username: username
        })
        await newUser.save(); // attempts to save new user to database
        res.json({status: "success"}) // sends success response back to client if it works
    } catch (err) { // error arose 
        console.log("error", err) // logs error
        res.status(500).json({status: "error"}) // send error response back to client 
    }
})

router.post('/bands', async(req, res) => {
    let userId = req.body.userId;
    let band = req.body.band;

    //TODO: come back and do error handling
    // fund the right user
    let user = await req.models.User.findById(userId);

    // update with the new band, if it wasn't already there
    if(!user.favorite_bands.includes(band)) {
        user.favorite_bands.push(band);
    }
    await user.save();
    res.json({status: "success"})
})

export default router;