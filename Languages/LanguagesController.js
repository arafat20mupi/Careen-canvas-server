
const LanguagesSchema = require("./Languageschema");

exports.createLanguage = async (req, res) => {
  try {
    const { userId, templateId, languages } = req.body;
    // Validate that languages are provided
    if (!languages || !Array.isArray(languages) || languages.length === 0) {
      return res
        .status(400)
        .json({ message: "Languages are required and should be an array." });
    }

    // Create a new language entry
    const newLanguages = new LanguagesSchema({
      userId,
      templateId,
      languages,
    });

    await newLanguages.save();
    res.status(201).json(newLanguages);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get languages data by userId and templateId
exports.getLanguagesByUserId = async (req, res) => {
  try {
    const { id, templateId } = req.params;

    // Find languages matching userId and templateId
    const languages = await LanguagesSchema.findOne({ userId: id, templateId });

    if (!languages) {
      return res
        .status(404)
        .json({ message: "Languages not found for the given user and template." });
    }

    res.status(200).json(languages);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update language data for a user
exports.updateLanguages = async (req, res) => {
  try {
    const { id, templateId } = req.params; // Get userId and templateId from the route
    const { languages } = req.body;

    // Validate that languages are provided
    if (!languages || !Array.isArray(languages) || languages.length === 0) {
      return res
        .status(400)
        .json({ message: "Languages are required and should be an array." });
    }

    // Update the user's language data
    const updatedLanguages = await LanguagesSchema.findOneAndUpdate(
      { userId: id, templateId },
      { languages },
      { new: true, runValidators: true }
    );

    if (!updatedLanguages) {
      return res
        .status(404)
        .json({ message: "Languages not found for the given user and template." });
    }

    res.status(200).json(updatedLanguages);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete language data for a user
exports.deleteLanguages = async (req, res) => {
  try {
    const { id, templateId } = req.params;

    const deletedLanguages = await LanguagesSchema.findOneAndDelete({ userId: id, templateId });

    if (!deletedLanguages) {
      return res
        .status(404)
        .json({ message: "Languages not found for the given user and template." });
    }

    res.status(200).json({ message: "Languages deleted successfully." });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
