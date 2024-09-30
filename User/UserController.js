const User = require("./UserSchema");
const admin = require("firebase-admin")

//    register
exports.register = async (req, res) => {

  const { name, email, password } = req.body;
  try {
    // Firebase এ নতুন ব্যবহারকারী তৈরি করা হচ্ছে
    const firebaseUser = await admin.auth().createUser({
      email: email,
      password: password,
    });
    console.log(firebaseUser)
    // Firebase UID পেয়ে নতুন ব্যবহারকারী MongoDB তে সেভ করা হচ্ছে
    const user = new User({
      name: name,
      email: email,
      password: password,
      firebaseUid: firebaseUser.uid,
    });
    await user.save();
    console.log(user);
    res.send("User is registered");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
  
    if (!user) res.status(400).json({ error: error.message });
    const isMatch = await user.comparePassword(password);

    if (!isMatch) return res.status(400).send("Invalid credentials");

    res.status(200).json( user );
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};