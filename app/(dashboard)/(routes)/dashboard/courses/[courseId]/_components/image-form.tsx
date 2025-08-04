"use client";

import axios from "axios";
import { ImageIcon, Pencil, PlusCircle } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Course } from "@prisma/client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FileUpload } from "@/components/file-upload";

interface ImageFormProps {
    initialData: Course;
    courseId: string;
}

const ImageForm = ({ initialData, courseId }: ImageFormProps) => {
    const [isEditing, setIsEditing] = useState(false);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const toggleEdit = () => setIsEditing((current) => !current);

    const updateImage = async (url: string) => {
        try {
            setLoading(true);
            await axios.patch(`/api/courses/${courseId}`, { imageUrl: url });
            toast.success("Course image updated");
            toggleEdit();
            router.refresh();
        } catch {
            toast.error("Something went wrong while updating");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="mt-6 border rounded-md p-4">
            <div className="font-medium flex items-center justify-between">
                Course image
                <Button onClick={toggleEdit} variant="ghost" disabled={loading}>
                    {isEditing ? (
                        <>Cancel</>
                    ) : !initialData.imageUrl ? (
                        <>
                            <PlusCircle className="h-4 w-4 mr-2" />
                            Add image
                        </>
                    ) : (
                        <>
                            <Pencil className="h-4 w-4 mr-2" />
                            Edit image
                        </>
                    )}
                </Button>
            </div>

            {!isEditing &&
                (!initialData.imageUrl ? (
                    <div className="flex flex-col items-center justify-center h-60 bg-slate-200 rounded-md">
                        <ImageIcon className="h-10 w-10 text-gray-400" />
                        <p className="text-sm text-muted-foreground mt-2">
                            No image uploaded yet.
                        </p>
                    </div>
                ) : (
                    <div className="relative aspect-video mt-2">
                        <Image
                            src={initialData.imageUrl}
                            alt={`Course Image - ${initialData.title}`}
                            fill
                            className="object-cover rounded-md"
                        />
                    </div>
                ))}

            {isEditing && (
                <div>
                    <FileUpload
                        endpoint="courseImage"
                        onChange={(url) => {
                            if (url) updateImage(url);
                        }}
                    />
                    <div className="text-xs text-muted-foreground mt-4">
                        Recommended aspect ratio is{" "}
                        <span className="font-medium">16:9</span> for course images.
                    </div>
                </div>
            )}
        </div>
    );
};

export default ImageForm;
