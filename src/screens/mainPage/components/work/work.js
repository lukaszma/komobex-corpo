import React, { useState } from "react"
import classnames from "classnames"
import { filters } from "./filter"
import { projects } from "./projects"
import { categoryTitles, categories } from "./categories"
import { TransitionGroup, CSSTransition } from "react-transition-group"
import { WorkWrapper } from "./styles"

export const Work = () => {
  const [activeFilter, setActiveFilter] = useState("all")
  const [filteredProjects, setFilteredProjects] = useState(projects)

  const onFilter = (e, id) => {
    e.preventDefault()
    setActiveFilter(id)

    const _filteredProject = projects.filter(
      project => project.subtitles.indexOf(id) !== -1
    )

    setFilteredProjects(_filteredProject)
  }

  return (
    <div id="work" className="work content-section bg-grey">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-title">
              <h2>Przykładowe realizacje</h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <ul className="work-filter">
              {filters.map(filter => (
                <li
                  key={filter.id}
                  className={classnames({ active: activeFilter === filter.id })}
                >
                  <a href="#" onClick={e => onFilter(e, filter.id)}>
                    {filter.title}
                  </a>
                </li>
              ))}
            </ul>

            <WorkWrapper className="work-grid">
              <TransitionGroup>
                {filteredProjects.map(project => (
                  <CSSTransition
                    in
                    timeout={500}
                    classNames="item"
                    key={project.id}
                  >
                    <li key={project.id} className="work-item">
                      <a href="#" title={project.title}>
                        <div className="work-item-image">
                          <img src={project.imgSrc} alt={project.title} />
                        </div>
                        <div className="work-item-info">
                          <h4 className="work-item-title">{project.title}</h4>
                          {project.subtitles.map((subtitle, i) => (
                            <span key={i}>
                              {subtitle !== categories.ALL && (
                                <span className="work-item-desc">
                                  {categoryTitles[subtitle]}
                                </span>
                              )}
                              <br />
                            </span>
                          ))}
                        </div>
                      </a>
                    </li>
                  </CSSTransition>
                ))}
              </TransitionGroup>
            </WorkWrapper>
          </div>
        </div>
      </div>
    </div>
  )
}
