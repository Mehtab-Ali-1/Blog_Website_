import { blogs, comments } from '@/data/blog'
import { CommentForm } from '@/components/comment-form'
import { CommentsList } from '@/components/comments-list'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'

interface Props {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const blog = blogs.find(blog => blog.slug === params.slug)
  
  if (!blog) {
    return {
      title: 'Blog Post Not Found'
    }
  }

  return {
    title: blog.title,
    description: blog.description,
  }
}

export default function BlogPost({ params }: Props) {
  const blog = blogs.find(blog => blog.slug === params.slug)
  
  if (!blog) {
    notFound()
  }

  const blogComments = comments.filter(comment => comment.blogId === blog.id)

  return (
    <article className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="relative h-[400px] mb-8 rounded-lg overflow-hidden">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-cover"
        />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <h1>{blog.title}</h1>
        
        <div className="flex items-center justify-between text-muted-foreground mb-8">
          <p>By {blog.author}</p>
          <time>{blog.date}</time>
        </div>

        <div className="mb-12" dangerouslySetInnerHTML={{ __html: blog.content.replace(/\n/g, '<br />') }} />

        <hr className="my-8" />
        
        <section>
          <h2 className="text-2xl font-bold mb-4">Comments</h2>
          <div className="mb-8">
            <CommentForm blogId={blog.id} />
          </div>
          <CommentsList comments={blogComments} />
        </section>
      </div>
    </article>
  )
}

