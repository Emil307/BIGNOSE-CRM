import { z } from "zod";

export const requiredError = "Поле не заполнено";

export const $RequiredString = z
  .string({ required_error: requiredError })
  .trim()
  .min(1, { message: requiredError });
