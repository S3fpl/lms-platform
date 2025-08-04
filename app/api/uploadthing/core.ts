// import { auth } from "@clerk/nextjs/server";
// import { createUploadthing, type FileRouter } from "uploadthing/next";
// import { UploadThingError } from "uploadthing/server";

// const f = createUploadthing();

// const HandleAuth = () => {
//     const { userId } =  auth();
//     if (!userId) throw new UploadThingError("Unauthorized");
//     return { userId };
// }

// export const ourFileRouter = {
//     courseImage: f({ image:{ maxFileSize: "4MB", maxFileCount: 1} })
//         .middleware(()=> auth())
//         .onUploadComplete(()=> {})
//         courseAttachments: f(["text", "image", "video", "audio" , "pdf"])
//         .middleware(()=> handleAuth())
// } satisfies FileRouter;

// export type OurFileRouter = typeof ourFileRouter;