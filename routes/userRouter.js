const express= require("express")
const router= express.Router()
const Controller= require("../controller/index")
const sendResponse = require("../helper/sendResponse");
//add user
router.post(
    "/add",
    (req, res) => {
      return sendResponse.executeMethod(
        Controller.userController.Add,
        req.body,
        req,
        res
      );
    }
  );
  //Send mails to all users
  router.post(
    "/sendMails",
    (req, res) => {
      return sendResponse.executeMethod(
        Controller.userController.SendMails,
        req.body,
        req,
        res
      );
    }
  );

//Get record of all the users
router.get(
    "/getuser",
    (req, res) => {
      return sendResponse.executeMethod(
        Controller.userController.get,
        req.body,
        req,
        res
      );
    }
);
  



module.exports = router;