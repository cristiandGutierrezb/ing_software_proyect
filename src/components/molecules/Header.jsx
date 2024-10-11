import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="bg-white shadow-md fixed w-full z-10">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 px-8" aria-label="Global">
        <div className="flex flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <img className="h-8 w-auto" src="/vite.svg" alt="" />
          </a>
        </div>
        <div className="flex gap-x-12">
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900 transition-all hover:font-bold">Features</a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900 transition-all hover:font-bold">Marketplace</a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900 transition-all hover:font-bold">Company</a>
        </div>
        <div className="flex flex-1 justify-end">
          <Link
            to="/login"
            className="text-sm font-semibold leading-6 text-gray-900 p-2 shadow-md rounded-md transition-all hover:font-bold"
          >Log in <span aria-hidden="true">&rarr;</span></Link>
        </div>
      </nav>
    </header>
  )
}
