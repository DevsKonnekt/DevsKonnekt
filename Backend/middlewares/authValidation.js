import { errorLogger } from "../config/logger.js";

function response(message, req, res) {
    errorLogger(
      {
        statusCode: 400,
        message: message,
      },
      req,
      res
    );
    return res.status(400).json({
      status: 400,
      message: message,
    });
  };

export const registrationValidation = async(req, res, next) => {
    const registrationRequest = req.body;
    if (
      !registrationRequest.firstName ||
      !registrationRequest.lastName ||
      !registrationRequest.username ||
      !registrationRequest.email ||
      !registrationRequest.password ||
      !registrationRequest.employed
      ) {
      return response(
        "please fill all required fields!",
        req,
        res
      );      
    }
    if (registrationRequest.firstName && (typeof registrationRequest.firstName !== "string" || 
    registrationRequest.firstName.length < 2 /*&& registrationRequest.firstName.length > 50*/)) {
      return response(
        "firstName must be a string and between 2 and 50 characters long",
        req,
        res
      );
    }
    // if (registrationRequest.lastName && (typeof registrationRequest.last !== "string" || 
    //   registrationRequest.lastName.length < 2 /*&& registrationRequest.lastName.length > 50*/)) {
    //     return response(
    //       "lastName must be a string and between 2 and 50 characters long",
    //       req,
    //       res
    //     );
    // }
    if (registrationRequest.username && 
      (typeof registrationRequest.username !== "string" || 
      (registrationRequest.username.length < 3 && registrationRequest.username.length > 50))) {
        return response(
          "username must be a string and between 3 and 50 characters long",
          req,
          res
        );
    }
    next();
}