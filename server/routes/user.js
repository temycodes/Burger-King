import express from "express";
import passport from "passport";

const router = express.Router();

router.get(
    "/googlelogin",
    passport.authenticate("google",{
        scope:["profile"]
    })
);

router.get(
    "/login",
    passport.authenticate("google",{
        scope:["profile"],
        successRedirect: process.env.FRONTEND_URL
    })
)

export default router; 