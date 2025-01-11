export function WelcomeSection() {
  return (
    <section className="bg-black py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl">
            Welcome to the table.
          </h2>
          <p className="mt-4 text-2xl text-[#4BBFAC]">
            Let's change the industry for good.
          </p>
          <p className="mt-4 text-gray-400">
            Join over 10,000 restaurants globally growing with PR-Room, from local favorites to Michelin stars.
          </p>
        </div>
        <div className="mt-12 flex justify-center gap-8">
          <button className="rounded-full border border-gray-700 px-6 py-2 text-sm text-white hover:bg-gray-800">
            Independents & Restaurant Groups
          </button>
          <button className="rounded-full border border-gray-700 px-6 py-2 text-sm text-white hover:bg-gray-800">
            Hotel F&B Outlets
          </button>
          <button className="rounded-full border border-gray-700 px-6 py-2 text-sm text-white hover:bg-gray-800">
            Entertainment & Nightlife
          </button>
        </div>
      </div>
    </section>
  )
}

