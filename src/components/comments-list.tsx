import { Comment } from '@/data/blog'
import { formatDistanceToNow } from 'date-fns'

export function CommentsList({ comments }: { comments: Comment[] }) {
  return (
    <div className="space-y-6">
      {comments.map((comment) => (
        <div key={comment.id} className="border rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="font-semibold">{comment.name}</div>
            <div className="text-sm text-muted-foreground">
              {formatDistanceToNow(new Date(comment.createdAt), { addSuffix: true })}
            </div>
          </div>
          <p className="text-muted-foreground">{comment.content}</p>
        </div>
      ))}
      {comments.length === 0 && (
        <p className="text-center text-muted-foreground">No comments yet. Be the first to comment!</p>
      )}
    </div>
  )
}

