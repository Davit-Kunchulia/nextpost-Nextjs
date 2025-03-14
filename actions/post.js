"use server";
import { storePost } from "@/lib/posts";
import { redirect } from "next/navigation";
export async function createPost(prevState, formData) {
  const title = formData.get("title");
  const image = formData.get("image");
  const content = formData.get("content");

  let errors = [];

  if (!title || title.trim().length === 0) {
    errors.push("Title section is empty");
  }

  if (!content || content.trim().length === 0) {
    errors.push("Content section is empty");
  }

  if (!image || image.size === 0) {
    errors.push("Image section is empty");
  }

  if (errors.length > 0) {
    return { errors };
  }

  await storePost({
    imageUrl: "",
    title,
    content,
    userId: 1,
  });

  redirect("/feed");
}
