import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Fooditem from "../components/Fooditem";
import Message from "../components/Message";
import Loader from "../components/Loader";
import Paginate from "../components/Paginate";
import FooditemCarousel from "../components/FooditemCarousel";
import VideoIntro from '../components/VideoIntro'
import Meta from "../components/Meta";
import { listFooditems } from "../actions/fooditemActions";

const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword;

  const pageNumber = match.params.pageNumber || 1;

  const dispatch = useDispatch();

  const fooditemList = useSelector((state) => state.fooditemList);
  const { loading, error, fooditems, page, pages } = fooditemList;

  useEffect(() => {
    dispatch(listFooditems(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);

  return (
    <>
      <Meta />
      {!keyword ? (
        <VideoIntro/>
        // <FooditemCarousel />
      ) : (
        <Link to="/" className="btn btn-light">
          Go Back
        </Link>
      )}
      <h1>Latest Fooditems</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Row>
            {fooditems.map((fooditem) => (
              <Col key={fooditem._id} sm={12} md={6} lg={4} xl={3}>
                <Fooditem fooditem={fooditem} />
              </Col>
            ))}
          </Row>
          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ""}
          />
        </>
      )}
    </>
  );
};

export default HomeScreen;
