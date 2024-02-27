import { createUploadthing } from "uploadthing/next";

const f = createUploadthing();

export const fileRouter = {
  imageUploader: f({ image: { maxFileSize: "5MB" } }).onUploadComplete(
    async ({ file }) => {
      return { url: file.url };
    },
  ),
};
