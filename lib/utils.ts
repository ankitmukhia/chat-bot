/* A tiny, secure, URL-friendly, unique string ID generator for JavaScript. */
import { customAlphabet } from "nanoid";

export const nanoid = customAlphabet(
  '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
  7
) // 7-character random string
