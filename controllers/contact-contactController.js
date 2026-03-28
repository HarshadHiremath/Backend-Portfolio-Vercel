import Contact from "../models/contact-contactSchema.js";
import mongoose from "mongoose";
import { sendEmail1 as template1, sendEmail2 as template2,  } from "../utils/SendEmail.js";


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

    const html1 = template1(user);
    const html2 = template2(user, email, phone, message);


    const response1 = await fetch(
      "https://email-server-murex-phi.vercel.app/api/Send-Mail",
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
          template: html1
        })
      }
    );

    const response2 = await fetch(
      "https://email-server-murex-phi.vercel.app/api/Send-Mail",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          fromTitle: "Portfolio <harshadhiremath5@gmail.com>",
          sendEmail: "harshadhiremath5@gmail.com",
          subjectTitle: `Message from ${user}`,
          replyToEmail: email,
          template: html2
        })
      }
    );

    const data1 = await response1.json();
    const data2 = await response2.json();

    if (!response1.ok || !response2.ok) {
      return res.status(500).json({
        message: "Email sending failed",
        error1: data1,
        error2: data2,
      });
    }

    res.status(200).json({
      message: "Data saved + Email sent successfully!"
    });

  } catch (error) {

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