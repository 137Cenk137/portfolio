import React from 'react'

export default function Alert({alert}) {
  return (
    <div className="absolute top-10 left-0 right-0 flex justify-center items-center">
      <div className={`${alert.type === "danger" ? "bg-red-500" : "bg-blue-800"} p-2 text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex`} role="alert">
        <p>{alert.type === "danger" ? "❌" : "✅"}</p>
        <span className="sr-only">{alert.type === "danger" ? "Error" : "Success"}</span>
        <p className="ml-2">{alert.text}</p>
      
      </div>
    </div>
  )
}
 