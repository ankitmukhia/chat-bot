import { CoreMessage } from "ai";
import z from "zod";

export type Message = CoreMessage & {
  id: string
}

export interface Chat extends Record<string, any> {
  id: string
  title: string
  createdAt: Date
  userId: string
  path: string
  message: Message[]
  sharePath?: string
}

export const EmailPasswordValidationSchema = z.object({
  email: z.string().email(),
  password: z.string()
})
