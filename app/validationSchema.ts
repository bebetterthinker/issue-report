import z from "zod";

export const createIssueschema = z.object({
  title: z.string().min(1, "title is required.").max(255),
  descriptions: z.string().min(1, "description is required."),
});
