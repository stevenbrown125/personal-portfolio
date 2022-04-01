import React from "react"
import SEO from "../components/Seo"

export default function NotFoundPage() {
  return (
    <div className="container">
      <SEO
        title={"404 | Page Not Foun"}
        description={"This page does not exist. Not sure how you got here..."}
      />
      <div>
        <h1 className="mark content title-section">404: Not Found</h1>
        <div className="content box">
          This page does not exist. Not sure how you got here...
        </div>
      </div>
    </div>
  )
}
