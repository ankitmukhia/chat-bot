import { auth } from "@/auth"
import { db } from "@/lib/db"
import { type Chat, Message } from '@/lib/types'

export async function saveChat(chat: Chat) {
  const session = await auth()

  if (session && session.user) {
    const userId = session.user.id;
    const user = await db.chat.create({
      data: {
        id: chat.id,
        userId: userId,
        message: {
          create: chat.message.map((msg: Message) => ({
            id: msg.id,
            content: msg.content
          }))
        }
      }
    })
  } else {
    return;
  }
}
