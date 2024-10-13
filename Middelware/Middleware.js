

require('dotenv').config(); // Import dotenv to read .env file
const admin = require('firebase-admin');
const serviceAccount = require('../Config/carearcanvas.json')


// Initialize Firebase with credentials
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://CarearCanvas.firebaseio.com' 

});
// console.log(serviceAccount);
// Authentication Middleware
const authMiddleware = async (req, res, next) => {
  const token = req.headers.authorization?.split('Bearer ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized - No token provided' });
  }

  try {
    const decodedToken = await admin.auth().verifyIdToken(token);
    req.user = {
      uid: decodedToken.uid,
      email: decodedToken.email,
      role: decodedToken.role || 'user', // Assuming custom claims are used for roles
    };
    next();
  } catch (error) {
    if (error.code === 'auth/id-token-expired') {
      return res.status(401).json({ message: 'Unauthorized - Token expired' });
    }
    console.error('Token verification failed:', error.code, error.message);
    return res.status(401).json({ message: 'Unauthorized - Token verification failed' });
  }
};


module.exports = authMiddleware;