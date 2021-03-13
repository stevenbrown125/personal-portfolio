import React from "react"
import SEO from "../components/Seo"

export default function NotFoundPage() {
  return (
    <div className="container">
      <SEO
        title={`Latest Project Showcase`}
        description={`On this page, find my latest projects with links to a live demo of the site.`}
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
