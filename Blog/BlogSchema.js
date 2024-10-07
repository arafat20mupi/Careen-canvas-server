

const mongoose= require('mongoose')
  const BlogSchema= new mongoose.Schema({
    jobTitle:{
        type:String,
        required:true
    },
    company:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    employmentType:{
        type:String,
        required:true
    },
    salaryRange:{
        type:String,
        required:true
    },
    remoteOption:{
        type:String,
        required:true
    },
    experience:{
        type:String,
        required:true
    },
    jobDescription:{
        type:String,
        required:true
    },
    responsibilities: [
        {
          type: String
        }
      ],
      requirements: [
        {
          type: String
        }
      ],
      skills: [
        {
          type: String
        }
      ],

      applySection: {
        callToAction: {
          type: String,
          required: true
        },
        applyLinkText: {
          type: String
        },
        applyLink: {
          type: String
        }
      },
      footer: {
        company: {
          type: String,
          required: true
        },
        year: {
          type: String,
          required: true
        },
        rights: {
          type: String
        }
      }
    }, { timestamps: true });

    module.exports= mongoose.model('Blog',BlogSchema)