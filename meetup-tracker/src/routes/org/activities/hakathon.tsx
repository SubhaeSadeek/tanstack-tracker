import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/org/activities/hakathon')({
  component: HakathonComponent,
})

function HakathonComponent() {
  return (
    <h1 className="text-4xl font-extrabold text-white mb-4 tracking-tight">
      Hello Hakathon Page
    </h1>
  )
}
