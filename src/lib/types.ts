import { z } from "zod"

export const user = z.object({
	email: z.string().email(),
	password: z.string().min(5)
})
