

function Banner() {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10">
        <div>
            <h1 className="text-7xl">The Hard Tides</h1>
            <h2 className="mt-5 md:mt-2">Shoreside Chronicles: Navigating {" "}
            <span className="text-[#FF7F50]"> Life, Work, and Community </span>
            on the Coastal edge.
            </h2>
        </div>
        <p className="mt-5 md:mt-2 text-gray-400 max-w-sm" >
        Dive into the gritty tales of tenacious individuals who have weathered the stormy challenges of coastal living.
        </p>
    </div>
  )
}

export default Banner