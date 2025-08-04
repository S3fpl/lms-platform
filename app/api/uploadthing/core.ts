import { auth } from "@clerk/nextjs/server";
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";

const f = createUploadthing();

// دالة موحدة للتحقق من تسجيل الدخول
const getAuthOrThrow = async () => {
    const { userId } = await auth();
    if (!userId) throw new UploadThingError("Unauthorized");
    return { userId };
};

export const ourFileRouter = {
    courseImage: f({ image: { maxFileSize: "4MB", maxFileCount: 1 } })
        .middleware(async () => await getAuthOrThrow())
        .onUploadComplete(() => { }),

    courseAttachments: f(["text", "image", "video", "audio", "pdf"])
        .middleware(async () => await getAuthOrThrow())
        .onUploadComplete(() => { }),

    chapterVideo: f({ video: { maxFileSize: "128MB", maxFileCount: 1 } })
        .middleware(async () => await getAuthOrThrow())
        .onUploadComplete(() => { }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
