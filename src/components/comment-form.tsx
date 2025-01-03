'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { addComment } from '@/app/actions/comments'
import { useToast } from '@/hooks/use-toast'

export function CommentForm({ blogId }: { blogId: number }) {
  const [isPending, setIsPending] = useState(false)
  const { toast } = useToast()

  async function handleSubmit(formData: FormData) {
    setIsPending(true)
    const result = await addComment(blogId, formData)
    setIsPending(false)

    if (result.error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: result.error,
      })
    } else {
      toast({
        title: "Success",
        description: "Your comment has been posted!",
      })
      // Reset the form
      const form = document.querySelector('form') as HTMLFormElement
      form.reset()
    }
  }

  return (
    <form action={handleSubmit} className="space-y-4">
      <Input
        type="text"
        name="name"
        placeholder="Your Name"
        required
        disabled={isPending}
      />
      <Input
        type="email"
        name="email"
        placeholder="Your Email"
        required
        disabled={isPending}
      />
      <Textarea
        name="content"
        placeholder="Write your comment..."
        required
        disabled={isPending}
      />
      <Button type="submit" disabled={isPending}>
        {isPending ? 'Posting...' : 'Post Comment'}
      </Button>
    </form>
  )
}

