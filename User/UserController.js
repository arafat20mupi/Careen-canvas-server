const User = require("./UserSchema");
//    register
exports.register = async (req, res) => {
  const { name, email, password } = req.body;
  //   console.log(req.body);
  if (!email && !password)
    return res.status(400).json({ message: "email or password not  valid" });
  try {
    const user = new User({
      name: name,
      email: email,
      password: password,
    });
    await user.save();
    //  console.log(user);

    res.send("user is registered");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//  login
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
