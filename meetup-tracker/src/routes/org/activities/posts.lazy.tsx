import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/org/activities/posts')({
  component: PostComponent,
})

function PostComponent() {
  return (
    <div>
      <h1 className="text-4xl font-black">Post</h1>
    </div>
  )
}
