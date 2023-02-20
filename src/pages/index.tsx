
export default function Home() {
  return <div className="h-screen items-center w-screen flex flex-col justify-center">
    <div className="text-2xl text-center">
      Which pokemon is rounder?
    </div>
    <div className="p-2"/>
    <div className="flex justify-between max-w-2xl border rounded items-center p-8">
    <div className="w-16 h-16 bg-red-200">X</div>
    <div className="p-8">Vs</div>
    <div className="w-16 h-16 bg-red-200">X</div>
    </div>
  </div>;
}
