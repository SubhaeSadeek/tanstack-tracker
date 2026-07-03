import { Link } from '@tanstack/react-router'

const Header = () => {
  return (
    <header className="flex justify-between border-b border-neutral-800 pb-4 mb-8">
      <Link to="/">
        <h1 className="font-extrabold text-4xl text-fuchsia-600">
          Transtack Router
        </h1>
      </Link>
      <nav className="flex gap-6 mt-4">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/SubhaeSadeek"
        >
          Github
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://instagram.com/tapascript"
        >
          Insta
        </a>

        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://linkedin.com/SubhaeSadeek"
        >
          LinkedIn
        </a>
        <Link to="/org/activities/meetups">Meetups</Link>
        <Link to="/org/activities/posts">Post</Link>
        <Link to="/about">About</Link>
      </nav>
    </header>
  )
}

export default Header
