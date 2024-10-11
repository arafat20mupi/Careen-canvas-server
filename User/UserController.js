const admin = require("firebase-admin");
const User = require("./UserSchema");

// Register User
exports.register = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const firebaseUser = await admin.auth().createUser({
      email: email,
      password: password,
    });

    const user = new User({
      name,
      email,
      password,
      firebaseUid: firebaseUser.uid,
    });
    await user.save();

    res.status(200).send("User is registered");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Login User
exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });

    if (!user) return res.status(400).send("User not found");
    
    const isMatch = await user.comparePassword(password);

    if (!isMatch) return res.status(400).send("Invalid credentials");

    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get All Users
exports.getAllUsers = async (req, res) => {
  try {
    const listUsersResult = await admin.auth().listUsers();
    const firebaseUsers = listUsersResult.users;

    const dbUsers = await User.find();

    res.status(200).json({ firebaseUsers, dbUsers });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete User
exports.deleteUser = async (req, res) => {
  const { uid } = req.params;
  try {
    await admin.auth().deleteUser(uid);
    await User.findOneAndDelete({ firebaseUid: uid });

    res.status(200).send("User deleted successfully");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Change User Role
exports.changeUserRole = async (req, res) => {
  const { uid, role } = req.body;
  try {
    await admin.auth().setCustomUserClaims(uid, { role });
    await User.findOneAndUpdate({ firebaseUid: uid }, { role }, { new: true });

    res.status(200).send(`User role changed to ${role}`);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
