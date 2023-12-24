import { Schema, model } from 'mongoose'
import { CompanyModel, ICompany } from './company.interface'

const CompanySchema = new Schema<ICompany>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    industry: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    website: {
      type: String,
      required: true,
    },
    logoUrl: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      enum: ['Small', 'Medium', 'Large'],
      required: true,
    },
    socialMedia: {
      type: {
        twitter: {
          type: String,
          required: false,
        },
        linkedin: {
          type: String,
          required: false,
        },
        facebook: {
          type: String,
          required: false,
        },
      },
    },
    contact: {
      type: {
        email: {
          type: String,
          required: true,
        },
        phone: {
          type: String,
          required: false,
        },
        address: {
          type: String,
          required: true,
        },
      },
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  },
)

export const Company = model<ICompany, CompanyModel>('company', CompanySchema)
