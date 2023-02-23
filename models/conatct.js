const mongoose = require("mongoose");
const contactSchema = new mongoose.Schema(
  {
    FullName: String,
    Phone: Number,
  },
  { timestamps: true }
);

const contacts = mongoose.model("contacts", contactSchema);
module.exports = contacts;
