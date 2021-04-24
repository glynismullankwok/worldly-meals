const User = require('../models/user');

module.exports = {
    signupUser: (req, res) => {
        const { username, email, password } = req.body;
        User.findOne({ email: email }, async (err, user) => {
            if (err) console.log('user: ', err)
            else if (user) res.json({ error: `${user} user exists` })
            else {
                const newUser = await new User({ username: username, email: email, password: password })
                newUser.save((err, savedUser) => {
                    if (err) return res.json(err)
                    res.json({ id: savedUser._id, username: savedUser.username, email: savedUser.email });
                });
            };
        });
    },

    userLogin: async (req, res) => {
        const { email, password } = req.body
        if (email) {
            const result = await User.find({ email: email, password: password })
            res.json({ id: result[0]._id, email: result[0].email })
        } else {
            res.json({ user: null })
        };
    },
    userLogout: (req, res) => {
        if (req.user) {
            req.logout();
            res.send({ msg: "logging out" });
        } else {
            res.send({ msg: "no user to log out" });
        }
    }
}
