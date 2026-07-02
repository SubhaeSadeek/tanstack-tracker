import { Link, createFileRoute, useNavigate } from '@tanstack/react-router'
import { useEffect, useState } from 'react'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  const [count, setCount] = useState(0)
  const navigate = useNavigate()
  useEffect(() => {
    if (count >= 5) {
      navigate({ to: '/org/activities/hakathon' })
    }
  }, [count])
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold">
        Welcome to TanStack Router Crash Course
      </h1>
      <p className="font-medium text-sm mb-2 mt-4 text-gray-300 w-1/2">
        This is a meetup tracker app built using Transtack Router App. We will
        learn static routing, dynamic routing, nested routing and data loading.
        Apart from this, we will also look into the advance concepts like search
        and query, route context, protrected routes and code splitting.
      </p>
      <div className="mt-8">
        <Link
          to="/org/activities/hakathon"
          className="bg-emerald-700  text-white px-4 py-3 rounded font-bold cursor-pointer "
        >
          {''}
          Go to Hakathon
        </Link>
        <button
          onClick={() => setCount((prev) => prev + 1)}
          className="bg-emerald-700  text-white ml-4 px-4 py-3 rounded font-bold cursor-pointer"
        >
          {count === 0
            ? 'Go to Hacathon Programatically'
            : `${5 - count} clicks left...`}
        </button>
      </div>
    </div>
  )
}
