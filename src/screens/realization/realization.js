import React, { useState } from "react"
import PropTypes from "prop-types"
import ImageGallery from "react-image-gallery"
import { map } from "lodash"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import { Document, Page } from "react-pdf"
import { ReferenceTab, Button } from "./style"

const RealizationScreen = ({ html, images, pdf }) => {
  const mappedImages = map(images.edges, edge => ({
    original: edge.node.childImageSharp.fluid.src,
    thumbnail: edge.node.childImageSharp.fluid.src,
    srcSet: edge.node.childImageSharp.fluid.srcSet,
  }))

  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages)
  }

  const setPreviousePage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1)
    }
  }

  const setNextPage = () => {
    if (pageNumber < numPages) {
      setPageNumber(pageNumber + 1)
    }
  }

  return (
    <div className="container">
      <Tabs style={{ margin: "20px 0" }}>
        <TabList>
          <Tab>Zdjęcia</Tab>
          <Tab>Referencja</Tab>
        </TabList>

        <TabPanel>
          <div dangerouslySetInnerHTML={{ __html: html }} />
          <ImageGallery items={mappedImages} />
        </TabPanel>
        <ReferenceTab>
          <div
            className="descriptionHtml"
            dangerouslySetInnerHTML={{ __html: html }}
          />
          <div>
            <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
              <Page pageNumber={pageNumber} renderAnnotationLayer={false} />
            </Document>
            {numPages > 1 && (
              <div>
                <p>
                  Strona {pageNumber} z {numPages}
                </p>
                <Button
                  onClick={setPreviousePage}
                  type="button"
                  className="left btn btn-primary"
                >
                  {"<"}
                </Button>
                <Button
                  onClick={setNextPage}
                  type="button"
                  className="right btn btn-primary"
                >
                  {">"}
                </Button>
              </div>
            )}
          </div>
        </ReferenceTab>
      </Tabs>
    </div>
  )
}

RealizationScreen.propTypes = {
  frontmatter: PropTypes.object,
  html: PropTypes.string,
  pdf: PropTypes.string,
  images: PropTypes.shape({
    edges: PropTypes.array,
  }),
}

export default RealizationScreen
