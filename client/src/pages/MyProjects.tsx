import React, { useEffect, useState } from "react"
import type { Project } from "../types"
import { Loader2Icon } from "lucide-react"

const MyProjects = () => {
  const [loading, setLoading] = useState(true)
  const [projects, setProjects] = useState<Project[]>([])

  const fetchProjects = async () => {
    // fetch logic here
  }

 useEffect(() => {
  fetchProjects()
}, [])

return (
  <>
    <div className="px-4 md:px-16 lg:px-24 xl:px-32">
      {loading ? (
        <div className="flex items-center justify-center h-[80vh]">
          <Loader2Icon className="size-7 animate-spin text-indigo-200" />
        </div>
      ) : projects.length > 0 ? (
        <div></div>
      ) : (
        <div></div>
      )}
    </div>
  </>
)

}

export default MyProjects
