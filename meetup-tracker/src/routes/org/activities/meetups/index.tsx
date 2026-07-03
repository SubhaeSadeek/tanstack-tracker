import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/org/activities/meetups/')({
  loader: async () => {
    const res = await fetch('http://localhost:3001/events')
    const events = await res.json()
    return events
  },
  pendingComponent: () => (
    <div className="animate-pulse">loading meetup data...</div>
  ),
  errorComponent: ({ error }) => <div>{error.message}</div>,
  component: MeetupComponent,
})

function MeetupComponent() {
  const techMeetups = Route.useLoaderData()
  return (
    <div>
      <h1 className="text-5xl text-fuchsia-700 font-extrabold">
        List of available meetups
      </h1>
      {techMeetups.map((meetup) => (
        <Link
          key={meetup.id}
          to="/org/activities/meetups/$meetupId"
          params={{ meetupId: `${meetup.id}` }}
        >
          <div className=" w-5/6 mx-auto p-4 mt-8 border-fuchsia-500 border rounded-3xl mb-4   duration-700 ease-in-out hover:border-fuchsia-900">
            <h3 className="text-4xl font-extrabold text-white mt-4">
              {meetup.title}
            </h3>
            <h3 className="text-2xl font-semibold mt-4">{meetup.venue}</h3>
          </div>
        </Link>
      ))}
    </div>
  )
}
