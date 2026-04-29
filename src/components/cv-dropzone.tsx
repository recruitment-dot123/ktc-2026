import { cn } from "@/lib/utils";
import { CloudUpload, FileCheck, X } from "lucide-react";
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

export default function CVDropzone({
  disabled,
  onChange,
}: {
  disabled: boolean;
  onChange: (files: File[]) => void;
}) {
  const [file, setFile] = useState<File | null | undefined>(null);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      setFile(acceptedFiles[0]);
      onChange(acceptedFiles);
    },
    [onChange]
  );

  const removeFile = () => {
    setFile(null);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <section className="max-w-4xl w-full">
      <div
        className={cn(
          "text-center border-dashed border-2 rounded  px-8 h-28 flex items-center bg-neutral-50",
          isDragActive && "bg-pink-50",
          file && "border-success border-solid",
          disabled && "cursor-not-allowed opacity-50"
        )}
      >
        {file ? (
          <div className="flex items-center gap-2 w-full">
            <div className="flex item-center gap-2 grow text-sm">
              <div className="flex items-center">
                <FileCheck className={cn("size-6", file && "text-success")} />
              </div>
              <div className="text-left">
                <p className="max-w-[220px] break-words">{file.name}</p>
                <p className={cn(file && "text-success")}>
                  CV tải lên thành công
                </p>
              </div>
            </div>
            <div>
              <button onClick={removeFile}>
                <X />
              </button>
            </div>
          </div>
        ) : (
          <div {...getRootProps()} className="w-full cursor-pointer">
            <input {...getInputProps()} />
            <div className="flex flex-col items-center text-neutral-300  text-sm ">
              <CloudUpload />
              <p>
                Kéo thả hoặc nhấp{" "}
                <span className="font-medium text-neutral-950">tại đây</span>
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
