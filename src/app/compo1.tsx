//"use client"
//import { TabsDemo } from "./mycomponents/mycard2";




export default function Compo1() {
    return (
        <div>
    
           <div className="flex gap-4">
  <div className="bg-gray-100 p-4 rounded-md shadow-md">
    <h3 className="text-lg font-bold mb-2">
      Best Furniture Collection For Your Interior.
    </h3>
    <a
      href="#"
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Shop Now
    </a>
    <div className="text-sm mt-2">557 x 337</div>
  </div>
  <div className="relative">
    
    <div className="absolute bottom-2 right-2 text-sm bg-gray-800 text-white px-2 py-1 rounded-md">
      434 x 584
    </div>
  </div>
</div>


      </div>
    );
  }
  