import React, { Component } from "react";
import { Card, CardBody, Col, Row, Spinner } from "reactstrap";
import { UserServices } from "../../../services/userServices";
import { SupplierServices } from "../../../services/supplierServices";
import { ArticleServices } from "../../../services/articleServices";
import { ProductServices } from "../../../services/productServices";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalUser: 0,
      totalSupplier: 0,
      totalArticle: 0,
      totalProduct: 0,
      userloading: true,
      supplierLoading: true,
      articleLoading: true,
      productLoading: true
    };
  }

  getAllTotalValues() {
    ProductServices.products().then((response) => {
      if (response.status) {
        this.setState((prevState) => ({
          totalProduct: response.data.length,
          productLoading: !prevState.productLoading
        }));
      }
    })
    ArticleServices.articles().then((response) => {
      if (response.status) {
        this.setState((prevState) => ({
          totalArticle: response.data.length,
          articleLoading: !prevState.articleLoading
        }));
      }
    })
    UserServices.allUsers().then((response) => {
      if (response.status) {
        this.setState((prevState) => ({
          totalUser: response.data.length,
          userloading: !prevState.userloading
        }));
      }
    })
    SupplierServices.allSuppliers().then((response) => {
      if (response.status) {
        this.setState((prevState) => ({
          totalSupplier: response.data.length,
          supplierLoading: !prevState.supplierLoading
        }));
      }
    })
  }

  componentDidMount() {
    this.getAllTotalValues()
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row className="m-5">
          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-info">
              <CardBody className="pb-0">
                <h1>{this.state.userloading ? <Spinner size="sm" /> : null}
                  {this.state.userloading ? null : this.state.totalUser}</h1>
                <div>Active Users</div>
              </CardBody>
              <div style={{ height: "70px" }}></div>
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-primary">
              <CardBody className="pb-0">
                <h1>{this.state.supplierLoading ? <Spinner size="sm" /> : null}
                  {this.state.supplierLoading ? null : this.state.totalSupplier}</h1>
                <div>Active Suppliers</div>
              </CardBody>
              <div style={{ height: "70px" }}></div>
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-warning">
              <CardBody className="pb-0">
                <h1>{this.state.articleLoading ? <Spinner size="sm" /> : null}
                  {this.state.articleLoading ? null : this.state.totalArticle}</h1>
                <div>Articles</div>
              </CardBody>
              <div style={{ height: "70px" }}></div>
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-danger">
              <CardBody className="pb-0">
                <h1>{this.state.productLoading ? <Spinner size="sm" /> : null}
                  {this.state.productLoading ? null : this.state.totalProduct}</h1>
                <div>Products</div>
              </CardBody>
              <div style={{ height: "70px" }}></div>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Dashboard;
