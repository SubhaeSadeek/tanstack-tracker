import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/org/activities/meetups/$meetupId')({
  loader: async ({ params }) => {
    const res = await fetch(`http://localhost:3001/events/${params.meetupId}`)
    const event = res.json()
    return event
  },
  pendingComponent: () => (
    <div className="animate-pulse">even data is loading</div>
  ),
  errorComponent: ({ error }) => <div>{error.message}</div>,
  component: SingleMeetComponent,
})
function SingleMeetComponent() {
  const { id, title, date, venue, description, attendees, city, tech } =
    Route.useLoaderData()
  return (
    <div>
      <h1>id: {id}</h1>
      <h1>{title}</h1>
      <p>date: {date}</p>
      <h3>venue: {venue}</h3>
      <h3>{description}</h3>
      <h3>
        <span className="font-bold text-amber-500">Host City: </span>
        {city}
      </h3>
      <h3>
        <span className="font-bold text-amber-500">total Attendees: </span>{' '}
        {attendees}
      </h3>
      <h3>focused Tech: {tech}</h3>
    </div>
  )
}
