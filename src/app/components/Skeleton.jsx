export default function Skeleton() {
  return (
    <ul className="flex gap-8" >
      {[...Array(10)].map((song, index) => (
        <li key={index} className="flex flex-col bg-slate-100 rounded-lg overflow-hidden" >
          <div className="bg-cover bg-center aspect-square h-48 bg-gray-600" />
          {/* <div className="text-lg px-2 py-2 flex flex-col justify-center"> */}
          <p className="text-slate-900 font-bold capitalize truncate" />
          <p className="text-slate-900 font-bold capitalize truncate" />
          {/* </div> */}
        </li>
      ))}
    </ul>
  )
}
// return <LoadingSkeleton />