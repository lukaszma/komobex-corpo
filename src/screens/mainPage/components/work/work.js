import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { map, sortBy } from "lodash"
import { orderedWorkList } from "./orderedWorkList"
import Img from "gatsby-image"
import CustomLink from "@components/customLink/customLink"
import styled from "styled-components"

const Image = styled(Img)`
  height: 300px;
`

const ContainerItem = styled.li`
  padding-right: 15px !important;
`

export const Work = () => {
  const [workList, setWorkList] = useState([])
  const images = useStaticQuery(graphql`
    query {
      serviceImages: allFile(
        filter: {
          sourceInstanceName: { eq: "main-page-images" }
          relativeDirectory: { eq: "works" }
        }
      ) {
        edges {
          node {
            name
            childImageSharp {
              fluid(maxWidth: 600, quality: 100) {
                ...GatsbyImageSharpFluid_noBase64
              }
            }
          }
        }
      }
    }
  `)

  useEffect(() => {
    const list = map(images.serviceImages.edges, edge => {
      const options = orderedWorkList[edge.node.name]
      return {
        fluid: edge.node.childImageSharp.fluid,
        title: options.title,
        order: options.order,
        to: options.to,
      }
    })

    const orderedList = sortBy(list, item => item.order)

    setWorkList(orderedList)
  }, [images])

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
            <ul className="work-grid">
              {workList.map(work => (
                <ContainerItem key={work.order} className="work-item">
                  <CustomLink to={work.to} title={work.title}>
                    <div className="work-item-image">
                      <Image fluid={work.fluid} />
                    </div>
                    <div className="work-item-info">
                      <h4 className="work-item-title">{work.title}</h4>
                    </div>
                  </CustomLink>
                </ContainerItem>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
