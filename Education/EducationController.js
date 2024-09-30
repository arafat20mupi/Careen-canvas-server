const EducationSchema = require("./EducationSchema");

// Create new education record

exports.CreateEducation = async (req, res) => {
  try {
    const { userId, templateId, education } = req.body;
    const newEducation = new EducationSchema({
      userId,
      templateId,
      education,
    });
    console.log(newEducation);
    await newEducation.save();
    res.status(200).json(newEducation);
  } catch (error) {
    return res.status(403).json({ error: error.message });
  }
};
//   get  education   record

exports.getEducations = async (req, res) => {
  try {
    const { userId } = req.params;
    const educations = await EducationSchema.find({ userId });
    console.log(educations);
    return res.status(200).json(educations);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
//   update  education   record

 exports.updateEducation =async(req,res,)=>{
     const {id}= req.params
     const { education}=req.body
 try {
    const update= new EducationSchema.findByIdAndUpdate(id,
        {education},
        {new:true}
    )
    console.log(update);

    if (!update) {
        return res.status(404).json({ message: "Education record not found" });
      }
      await update.save()
 } catch (error) {
    
 }
 }
//     delete  education   record
 exports.deleteEducation = async (req, res) => {
    try {
      const { id } = req.params;
  
      // Find the education record by id and delete it
      const deletedEducation = await Education.findByIdAndDelete(id);
  
      if (!deletedEducation) {
        return res.status(404).json({ message: "Education record not found" });
      }
  
      return res.status(200).json({ message: "Education record deleted" });
    } catch (error) {
      return res.status(403).json({ error: error.message });
    }
  };
