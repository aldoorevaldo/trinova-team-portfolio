import { useEffect } from "react"

function PageTitle({ title }) {
  useEffect(() => {
    document.title = `${title} | TriNova`
  }, [title])

  return null
}

export default PageTitle