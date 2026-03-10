import Contact from "../models/contact-contactSchema.js";
import mongoose from "mongoose";



export const createContact = async (req, res) => {
  try {

    const { user, email, phone, message } = req.body;

    const newContact = new Contact({
      user,
      email,
      phone,
      message
    });

    await newContact.save();

    res.status(200).json({
      message: "Data received successfully!"
    });

  } catch (error) {

    res.status(500).json({
      message: "Error saving contact",
      error
    });

  }
};



export const getContacts = async (req, res) => {
  try {

    const contacts = await Contact.find();

    res.json(contacts);

  } catch {

    res.status(500).json({
      message: "Error fetching contacts"
    });

  }
};



export const deleteContact = async (req, res) => {
  try {

    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        message: "Invalid ID"
      });
    }

    const deletedContact = await Contact.findByIdAndDelete(id);

    if (!deletedContact) {
      return res.status(404).json({
        message: "Contact not found"
      });
    }

    res.status(200).json({
      message: "Contact deleted successfully!",
      deletedContact
    });

  } catch (error) {

    res.status(500).json({
      message: "Error deleting contact",
      error
    });

  }
};