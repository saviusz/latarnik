import z from "zod";

export const courseModel = z.object({
    id: z.string(),
    name: z.string(),
    description: z.string().optional(),
    specs: z.array(z.string()),
    optional: z.array(z.string()).optional(),
});

export type Course = z.infer<typeof courseModel>;

export const courseList = z.array(courseModel);

export type CourseList = z.infer<typeof courseList>;