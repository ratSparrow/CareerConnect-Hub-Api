import { v2 as cloudinary } from 'cloudinary'
import multer from 'multer'
import * as fs from 'fs'
import { IUploadImage, IUploadImageResponse } from '../interface/uploadImage'

cloudinary.config({
  cloud_name: 'dvjapvxtp',
  api_key: '877166485241547',
  api_secret: 'FtmjoBZEKNDcTpVkVtE0ho-xU6E',
})

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  },
})

const upload = multer({ storage: storage })

const uploadToCloudinary = (
  file: IUploadImage,
): Promise<IUploadImageResponse> => {
  return new Promise((resolve, reject) => [
    cloudinary.uploader.upload(
      file.path,
      (error: Error, result: IUploadImageResponse) => {
        fs.unlinkSync(file.path)
        if (error) {
          reject(error)
        } else {
          resolve(result)
        }
      },
    ),
  ])
}

export const FileUploadHelper = {
  uploadToCloudinary,
  upload,
}
