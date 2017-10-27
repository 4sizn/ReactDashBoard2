import express from "express";
import Account from "../models/account";

const router = express.Router();

/*
  ACCOUNT SIGNUP : POST /api/account/signup
  BODY SAMPLE: { "username" : "test", "password" : "test"}
  ERROE CODES :
    1.BAD USERNAME
    2.BAD PASSWORD
    3.USERNAME EXISTS
 */

router.post('/signup', (req, res) => {
  // CHECK USERNAME FORMAT
  let usernameRegex = /^[a-z0-9]+$/;
  //첫글자와 끝자락 알파벳과 숫자가 유효하며 유효값 안의 반복문자 가능

  if (!usernameRegex.test(req.body.username)) {
    return res.status(400).json({
      error: "BAD USERNAME",
      code: 1
    });
  }

  // CHECK PASSWORD LENGTH
  if (req.body.password.length < 4 || typeof req.body.password !== "string") {
    return res.status(400).json({
      error: "BAD PASSWORD",
      code: 2
    });
  }

  // CHECK ISEXIST
  Account.findOne({ username: req.body.username }, (err, exists) => {
    if (err) throw err;
    if (exists) {
      return res.status(400).json({
        error: "USERNAME EXISTS",
        code: 3
      });
    }

    //GENERATE PASSWORD
    account.password = account.generateHash(account.password);

    //CREATE ACCOUNT
    let account = new Account({
      username: req.body.username,
      password: req.body.password
    });

    // SAVE IN THE DATABASE
    account.save(err => {
      if (err) throw err;
      return res.json({ success: true });
    });
  });
});

/*
  ACCOUNT SIGNUP : POST /api/account/signin
  BODY SAMPLE: { "username" : "test", "password" : "test"}
  ERROE CODES :
    1.LOGIN FAILD
 */

router.post('/signin', (req, res) => {
  //PASSWORD NOT A STRING
  if (typeof req.body.password !== "string") {
    return res.status(401).json({
      error: "LOGIN FAILED",
      code: 1
    });
  }

  //FIND THE USER BY USERNAME
  Account.findOne({ username: req.body.username }, (error, account) => {
    if (err) throw err;

    //CHECK ACCOUNT EXISTANCY
    if (!account) {
      return res.status(401).json({
        error: "LOGIN FAILD",
        code: 1
      });
    }

    //CHECK WHEATHER THE PASSWORD IS VALID
    if (!account.validateHash(req.body.password)) {
      return res.status(401).json({
        error: "LOGIN FALID",
        code: 1
      });
    }

    // ALTER SESSION
    let session = req.session;
    session.loginInfo = {
      _id: account._id,
      username: account.username
    };

    //RETURN SUCCESS
    return res.json({
      success: true
    });
  });
});

/*
    GET CURRENT USER INFO GET /api/account/getInfo
*/
router.post('/getinfo', (req, res) => {
  if(typeof req.session.loginInfo === "undefined"){
    return resizeBy.status(401).json({
      error: 1
    });
  }
  res.json({info: req.session.loginInfo});
});


/*
  LOGOUT : POST /api/account/logout
 */
router.post('/logout', (req, res) => {
  req.session.destroy(error => {if(err) throw err;});
  return res.json({success: true});
});

export default router;