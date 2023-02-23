var express = require("express");
var router = express.Router();
const contactModel = require("../models/conatct");
/* contacts List */
router.get("/", async (req, res, next) => {
  try {
    const contactList = await contactModel.find();
    if (!contactList || contactList.length === 0) {
      throw new Error("contacts not found");
    }
    res.status(200).json(contactList);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
/* add contact */
router.post("/", async (req, res, next) => {
  try {
    const { name, age, address, moy } = req.body;
    // await contactModel.create(req.body);
    const contact = new contactModel({
      FullName,
      Phone,
    });
    const addedcontact = await contact.save();
    res.status(200).json(addedcontact);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
/* modify contact */
router.put("/:contactId", async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const { FullName, Phone } = req.body;
    const checkIfcontactExist = await contactModel.findById(contactId);
    if (!checkIfcontactExist) {
      throw new Error("contact not found!");
    }
    const updatedcontact = await contactModel.findByIdAndUpdate(
      contactId,
      {
        $set: { FullName, Phone },
      },
      { new: true }
    );
    res.status(200).json(updatedcontact);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
/* remove contact */
router.delete("/:contactId", async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const checkIfcontactExist = await contactModel.findById(contactId);
    if (!checkIfcontactExist) {
      throw new Error("contact not found!");
    }
    await contactModel.findByIdAndDelete(contactId);
    res.json("contact deleted");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
