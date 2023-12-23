const express = require("express");
const app = express();
const notesRouter = require("./notes/notes.router");
const ratingsRouter = require("./ratings/ratings.router")



app.use(express.json());
app.use("/notes", notesRouter);
app.use("/ratings", ratingsRouter)

// # 6 Return 405 and an error message for all the HTTP methods that aren't handled by the router.
app.use((req, res, next) => {
  return next({ 
    status: 404, 
    message: `Not found: ${req.originalUrl}`
  });
});


app.use((error, req, res, next) => {
  console.error(error);
  const { 
    status = 500, 
    message = "Something went wrong!" } 
  = error;
  res.status(status).json({ error: message });
});

module.exports = app;