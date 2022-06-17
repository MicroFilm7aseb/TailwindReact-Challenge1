import React from 'react'


export default function PlanCard({planType,amountPaied,cardIcon}) {
  return (
    <div className="bg-annual py-6  self-center w-3/4 rounded-2xl grid grid-cols-4 gap-1">
                     
    <div className="pl-4 justify-start">{cardIcon}</div>
    <div className="col-span-2 pl-4 flex-col content-start -ml-5 ">
      <p className="font-RedHat font-light ">{planType}</p>
      <p className="font-RedHat opacity-50">{amountPaied}</p>
    </div>
    <div className="font-RedHat text-change underline mt-3 hover:no-underline hover:text-proceedHover hover:cursor-pointer">
      Change
    </div>
  </div>
  )
}
