import jwt from "jsonwebtoken";

const authmiddleware = async (req, res, next) => {
  const { token } = req.headers;
  if (!token) {
    return res.json({
      success: false,
      message: "Not Authorized Login Again",
    });
  }
  try {
    const token_dec = jwt.verify(token, process.env.JWT_SECRET);
    req.body.userId = token_dec.id;
    next()
  } catch (error) {
    console.log(error);
    res.json({success: false,message: "Error verifying"});
  }
};

export default authmiddleware;
