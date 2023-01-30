import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Nav, Tab } from "react-bootstrap";
import AuctionCard from "../components/common/e_showcase/AuctionCard";
import MarketCard from "../components/common/e_showcase/MarketCard";
import { Market } from "../json/DummyData";

const E_ShowcasePage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/`).then((res) => {
      if (res.status === 200) {
        setData(res.data);
      }
    });
  }, []);
  return (
    <div>
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
            {data.map((u) => (
              <MarketCard key={u.id} data={u} />
            ))}
          </Tab.Pane>

          <Tab.Pane eventKey="second">
            {data.map((u) => (
              <AuctionCard key={u.id} data={u} />
            ))}
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </div>
  );
};

export default E_ShowcasePage;
