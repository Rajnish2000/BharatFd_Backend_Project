import { Admin } from "../models/admin.models.js";
import { ApiError } from "../utilities/ApiError.js";
import { ApiResponse } from "../utilities/ApiResponse.js";
import { asyncHandler } from "../utilities/asyncHandler.js";

// create Admin Api:
const signUp = asyncHandler(async (req, res) => {
  console.log(req.body);
  try {
    if (!req.body) {
      return res
        .status(400)
        .json(new ApiError(400, "Please send details.something went wrong."));
    }
    const password = req.body.password;
    const admin = new Admin(req.body);
    const result = await Admin.register(admin, password);
    console.log(result);
    if (!result) {
      return res
        .status(400)
        .json(
          new ApiError(400, "admin not created.something went wrong.", result)
        );
    }
    return res
      .status(200)
      .json(
        new ApiResponse(200, result, "admin Created Successfully.😍✔👻✔🤞")
      );
  } catch (err) {
    console.log(err);
    return res
      .status(400)
      .json(new ApiError(400, "admin Creation Failed. try again.❌🤦‍♀️😣", err));
  }
});

const login = (req, res) => {
  const result = req.user;
  if (!result) {
    return res
      .status(400)
      .json(
        new ApiError(400, "admin Credential Failed. Please login.�������‍��️")
      );
  }
  return res
    .status(200)
    .json(new ApiResponse(200, result, "admin login Successfully.😍✔👻✔🤞"));
};

const logout = (req, res) => {
  return req.logout((err) => {
    if (err) return next(err);
    else {
      return res
        .status(200)
        .json(new ApiResponse(200, null, "admin Logout Successfully.🤗😀✈"));
    }
  });
};

export { signUp, login, logout };
