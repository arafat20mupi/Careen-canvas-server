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

// Check Admin Status// Check Admin Status// Check Admin Status
exports.checkAdmin = async (req, res) => {
  const { uid } = req.params;

  if (!uid || typeof uid !== 'string' || uid.length === 0) {
    return res.status(400).json({ error: "Invalid UID provided" });
  }

  try {
    const userRecord = await admin.auth().getUser(uid);
    const isAdmin = userRecord.customClaims && userRecord.customClaims.role === 'admin';

    res.status(200).json({ isAdmin });
  } catch (error) {
    console.error("Error checking admin status:", error);

    if (error.code === 'auth/user-not-found') {
      return res.status(404).json({ error: "User not found" });
    }
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
  const { email, role } = req.body;
  try {
    // Find Firebase user by email
    const userRecord = await admin.auth().getUserByEmail(email);
    const uid = userRecord.uid;

    // Set custom claims for the user
    await admin.auth().setCustomUserClaims(uid, { role });

    // Optionally, update your local DB if needed
    await User.findOneAndUpdate({ firebaseUid: uid }, { role }, { new: true });

    // Respond with JSON instead of a plain string
    res.status(200).json({ message: `User role changed to ${role}` });
  } catch (error) {
    // Log the error for debugging
    console.error("Error changing user role:", error);

    // Respond with an error message in JSON format
    res.status(500).json({ error: error.message });
  }
};
