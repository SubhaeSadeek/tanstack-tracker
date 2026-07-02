import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: AboutComponent,
})

function AboutComponent() {
  return (
    <div>
      <p className="font-medium text-6xl text-red-600">Hello "/about"!</p>
    </div>
  )
}
