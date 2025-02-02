import express from "express";
import { createServer } from "http";
import session from "express-session";
import passport from "passport";
import { Strategy } from "passport-local";
import { Admin } from "./models/admin.models.js";
import FaqsRouter from "./routes/faqs.routes.js";
import AdminRouter from "./routes/admin.routes.js";
import MongoStore from "connect-mongo";
import cors from "cors";
const app = express();
const db_url = process.env.DB_URL;
const httpServer = createServer(app);

const store = MongoStore.create({
  mongoUrl: db_url,
  touchAfter: 24 * 3600,
  crypto: {
    secret: process.env.SECRET,
  },
});

store.on("connect", (err) => {
  console.error("mongodb session store error: ", err);
});

const sessionInfo = {
  store,
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true,
  },
};

// express-session:
app.use(session(sessionInfo));

// body parser: to parse body data passes through request.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
// passport setup:
app.use(passport.initialize()); // initializing the passport.
app.use(passport.session());
passport.use(new Strategy(Admin.authenticate()));

// storing and removing session information:
passport.serializeUser(Admin.serializeUser());
passport.deserializeUser(Admin.deserializeUser());

// setting path for static file:
app.use(express.static("public"));

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

// routes:
app.use("/api/faqs/", FaqsRouter);
app.use("/api/faqs/admin", AdminRouter);

export { httpServer };
