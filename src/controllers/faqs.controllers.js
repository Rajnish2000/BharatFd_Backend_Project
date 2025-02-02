import { Faq } from "../models/faqs.models.js";
import { ApiError } from "../utilities/ApiError.js";
import { ApiResponse } from "../utilities/ApiResponse.js";
import { asyncHandler } from "../utilities/asyncHandler.js";
import translate from "google-translate-api";
import redisClient from "../config/redisClient.js";

const CreateFaqs = asyncHandler(async (req, res) => {
  try {
    if (!req.body) {
      return res
        .status(400)
        .json(
          new ApiError(400, "Please send details.Something went wrong.🤔😫☹")
        );
    }
    const faqs = new Faq(req.body);
    const result = await faqs.save();
    return res
      .status(201)
      .json(
        new ApiResponse(201, result, "faqs Item Created Successfully.😁😍👻")
      );
  } catch (err) {
    console.error(err.errors?.properties);
    return res.status(500).json({
      status: 500,
      message: err.message == "" ? "Internal Server Error😣" : err.message,
    });
  }
});

//getting all Faqs .
const getAllFaqs = asyncHandler(async (req, res) => {
  try {
    const lang = req.query.lang || "en";
    let faqs = await Faq.find();
    console.log(faqs);

    const cachedFaqs = await redisClient.get(`faqs:${lang}`);
    if (cachedFaqs) {
      return res.json(JSON.parse(cachedFaqs));
    }
    if (lang !== "en") {
      faqs = await faqs.map(async (faq) => {
        const question = await translate(faq.question, {
          from: "en",
          to: `${lang}`,
        });
        const answer = await translate(faq.answer, {
          from: "en",
          to: `${lang}`,
        });
        return { question: question.text, answer: answer.text };
      });
    }
    await redisClient.setEx(`faqs:${lang}`, 3600, JSON.stringify(faqs));
    if (faqs == null) {
      throw new Error("faqs Not Found Error.");
    } else {
      return res
        .status(200)
        .json(
          new ApiResponse(200, faqs, "faqs fetch By Id Successfully.😂🤣🧨")
        );
    }
  } catch (err) {
    console.error(err.message);
    return res
      .status(500)
      .json(
        new ApiError(
          500,
          err.message == "" ? "Internal Server Error😣" : err.message,
          err
        )
      );
  }
});

//updating Faqs by using Id.
const UpdateFaqs = asyncHandler(async (req, res) => {
  try {
    let faqs = await Faq.findById(req.params.id);
    if (req.user._id.valueOf()) {
      let result = await Faq.findByIdAndUpdate(req.params.id, req.body);
      result = await result.save();
      if (result === null) {
        throw new Error("Faqs update Failed!");
      }
      return res
        .status(200)
        .json(new ApiResponse(200, result, "Faqs Updated Successfully.😂🤣🧨"));
    } else {
      return res
        .status(401)
        .json(
          new ApiError(
            401,
            "You are not authorized to update this faqs.😣",
            "Unauthorized Access Failed.😣❌😈"
          )
        );
    }
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json(
        new ApiError(
          500,
          err.message == "" ? "Internal Server Error😣" : err.message,
          err
        )
      );
  }
});

//deleting Faqs by using Id.
const DeleteFaqs = async (req, res) => {
  try {
    if (req.params.id != null) {
      throw new Error("Id Not found. Deletion Failed😢😢😈👹");
    }
    const result = await faqs.findByIdAndDelete(req.params.id);
    if (result === null) {
      throw new Error("Faqs Deletion Failed😢😢😈👹");
    }
    return res
      .status(200)
      .json(new ApiResponse(200, result, "Faqs Deleted Successfully."));
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json(
        new ApiError(
          500,
          err.message == "" ? "Internal Server Error😣" : err.message,
          err
        )
      );
  }
};

export { CreateFaqs, UpdateFaqs, getAllFaqs, DeleteFaqs };
