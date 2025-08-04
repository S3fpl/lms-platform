"use client";
import { UploadDropzone } from "@/lib/uploadthing";
import { ourFileRouter } from "@/app/api/uploadthing/core";
import toast from "react-hot-toast";

interface FileUploadProps {
    onChange: (url?: string) => void;
    endpoint: keyof typeof ourFileRouter;
};

export const FileUpload = ({
    onChange,
    endpoint,
}: FileUploadProps) => {
    return (
        <div
            className="backdrop-blur-md bg-white/10 border border-white/30 rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center transition-all duration-300"
            style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.18)' }}
        >
            <UploadDropzone
                endpoint={endpoint}
                onClientUploadComplete={(res) => {
                    onChange(res?.[0].url);
                }}
                onUploadError={(error: Error) => {
                    toast.error(`Upload failed: ${error?.message}`);
                }}
            />
        </div>
    );
}