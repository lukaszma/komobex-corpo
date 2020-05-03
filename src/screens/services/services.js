import React from "react"
import PropTypes from "prop-types"
import { Sidebar } from "./components"
import Layout from "@components/layout/layout"

const ServicesScreen = ({ children }) => (
  <>
    <div id="home" className="home">
      <Layout>
        <div className="content-section">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <Sidebar />
              </div>
              <div className="col-md-9">
                <div className="entry-content">{children}</div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  </>
)

ServicesScreen.propTypes = {
  children: PropTypes.node,
}

export default ServicesScreen
