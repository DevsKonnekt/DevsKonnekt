"use client";

import { useCallback } from "react";
import { useDropzone } from "@uploadthing/react/hooks";
import { generateClientDropzoneAccept } from "uploadthing/client";

import { Button } from "@/components/ui/button";
import { convertFileToUrl } from "@/lib/utils";

export default function FileUploader({ mediaUrl, onFieldChange, setFiles }) {
  const onDrop = useCallback((acceptedFiles) => {
    setFiles(acceptedFiles);
    onFieldChange(convertFileToUrl(acceptedFiles[0]));
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*" ? generateClientDropzoneAccept(["image/*"]) : undefined,
  });

  return (
    <div
      {...getRootProps()}
      className="flex h-72 cursor-pointer flex-col overflow-hidden rounded-xl bg-gray-300 items-center justify-center"
    >
      <input {...getInputProps()} className="cursor-pointer" />

      {mediaUrl ? (
        <div className="flex h-full w-full flex-1 justify-center ">
          <img
            src={mediaUrl}
            alt="image"
            width={250}
            height={250}
            className="w-full object-cover object-center"
          />
        </div>
      ) : (
        <div className="items-center justify-center flex flex-col py-5 text-grey-500">
          <img
            src="/images/icons/upload.png"
            width={77}
            height={77}
            alt="file upload"
          />
          <h3 className="mb-2 mt-2">Drag photo here</h3>
          <p className="p-medium-12 mb-4">SVG, PNG, JPG</p>
          <Button type="button" className="rounded-full secondary-btn">
            Select from computer
          </Button>
        </div>
      )}
    </div>
  );
}
