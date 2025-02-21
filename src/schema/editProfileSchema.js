import { z } from "zod";

const editProfileSchema = z.object({
  firstName: z.string().nonempty("First name is required"),
  lastName: z.string().nonempty("Last name is required"),
  email: z
    .string()
    .nonempty("Email Address is required")
    .email("Email is not valid"),
  number: z.string().optional(),
});

export default editProfileSchema;
