import React from "react";
import { Nav, Tab, Tabs } from "react-bootstrap";
import MarketPlace from "./MarketPlace";
const Eshowcase = () => {
  return (
    <>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <div className="d-flex  ">
          <Nav variant="pills" className="flex-column post mb-3">
            <div className="d-flex product-tab ">
              <div className="col-md-6 ">
                <Nav.Link eventKey="first" className="btn-warning btn  ">
                  Marketplace
                </Nav.Link>
              </div>

              <div className="col-md-6">
                <Nav.Link eventKey="second" className="btn-warning btn ">
                  Souvenir
                </Nav.Link>
              </div>
            </div>
          </Nav>
        </div>

        <Tab.Content>
          <Tab.Pane eventKey="first">
            <MarketPlace />
          </Tab.Pane>

          <Tab.Pane eventKey="second">
            <MarketPlace />
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </>
  );
};

export default Eshowcase;
