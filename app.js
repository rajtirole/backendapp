import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();

app.use(
    cors({
      origin:'http://localhost:3000',
      credentials: true,
    })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser());
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "server running",
  });
});
app.post("/login", (req, res) => {
    console.log(req.cookies);
    const {email,password}=req.body;
    console.log(email,password);
    const options = { httpOnly: true, secure: true };
    res
      .status(200)
      .cookie("accessToken", 'accessToken', options)
      .cookie("refreshToken", 'refreshToken', options)
      .json( { 'data':"user login success", 'accessToken':"fasf" })
});
export default app;
