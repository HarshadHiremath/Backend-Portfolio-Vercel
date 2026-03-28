import Contact from "../models/contact-contactSchema.js";
import mongoose from "mongoose";
import { sendEmail as template } from "../utils/SendEmail.js";


export const createContact = async (req, res) => {
  try {
    const { user, email, phone, message } = req.body;

    if (!email) {
      return res.status(400).json({
        message: "Email is required"
      });
    }

    const newContact = new Contact({
      user,
      email,
      phone,
      message
    });

    await newContact.save();

    const html = template(user);

    const response = await fetch(
      "https://email-server-murex-phi.vercel.app/api/send-otp",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          fromTitle: "Harshad Hiremath <harshadhiremath5@gmail.com>",
          sendEmail: email,
          subjectTitle: "Message Received Successfully",
          replyToEmail: "harshadhiremath5@gmail.com",
          template: html
        })
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error("Email API failed:", data);
      return res.status(500).json({
        message: "Email sending failed",
        error: data
      });
    }

    console.log("Email sent:", data);

    res.status(200).json({
      message: "Data saved + Email sent successfully!"
    });

  } catch (error) {
    console.error("Backend Error:", error);

    res.status(500).json({
      message: "Error saving contact",
      error: error.message
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