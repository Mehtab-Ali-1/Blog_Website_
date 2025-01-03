'use server'

import { Comment, comments } from '@/data/blog'
import { revalidatePath } from 'next/cache'

export async function addComment(blogId: number, formData: FormData) {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const content = formData.get('content') as string

  if (!name || !email || !content) {
    return { error: 'All fields are required' }
  }

  const newComment: Comment = {
    id: Date.now().toString(),
    blogId,
    name,
    email,
    content,
    createdAt: new Date().toISOString(),
  }

  // In a real application, you would save this to a database
  comments.push(newComment)
  
  revalidatePath(`/blog/${blogId}`)
  return { success: true }
}

