import React, { useState } from "react"
import PropTypes from "prop-types"
import { Document, Page } from "react-pdf"
import styled from "styled-components"

export const PropertiesScreen = ({ publicUrl }) => {
  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)

  const Buttons = styled.div`
    margin-left: 230px;
  `

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
    <>
      <div className="site-main">
        <div className=" content-section">
          <div className="container">
            <Document file={publicUrl} onLoadSuccess={onDocumentLoadSuccess}>
              {numPages > 1 && (
                <Buttons>
                  <p>
                    Strona {pageNumber} z {numPages}
                  </p>
                  <button
                    onClick={setPreviousePage}
                    type="button"
                    className="left btn btn-primary"
                  >
                    {"<"}
                  </button>
                  <button
                    onClick={setNextPage}
                    type="button"
                    className="right btn btn-primary"
                  >
                    {">"}
                  </button>
                </Buttons>
              )}
              <Page pageNumber={pageNumber} />
            </Document>
          </div>
        </div>
      </div>
    </>
  )
}

PropertiesScreen.propTypes = {
  publicUrl: PropTypes.string,
}

export default PropertiesScreen
