import Link from "../models/link-LinkSchema.js";



export const getLinks = async (req, res) => {
  try {

    let links = await Link.findOne();

    if (!links) {
      links = new Link();
      await links.save();
    }

    res.status(200).json(links);

  } catch (error) {

    res.status(500).json({
      error: "Failed to fetch links"
    });

  }
};




export const updateLinkField = async (req, res) => {
  try {

    const { field } = req.params;
    const link = req.body[field];

    const validFields = [
      "gmail",
      "phone",
      "linkedIn",
      "instagram",
      "youtube",
      "github",
      "Location",
      "LocationLink",
      "twitter",
      "resume"
    ];

    if (!validFields.includes(field)) {
      return res.status(400).json({
        error: "Invalid field"
      });
    }

    if (typeof link !== "string" || link.trim() === "") {
      return res.status(400).json({
        error: "Link must be a non-empty string"
      });
    }

    let links = await Link.findOne();

    if (!links) {
      links = new Link();
    }

    links[field] = link.trim();

    await links.save();

    res.status(200).json({
      message: `${field} updated successfully`
    });

  } catch (error) {

    res.status(500).json({
      error: `Failed to update ${req.params.field}`
    });

  }
};