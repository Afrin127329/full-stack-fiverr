import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Loading from "../../components/loading/Loading";
import newRequest from "../../utils/newRequest";
import "./Success.scss";

const Success = () => {
  const { search } = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(search);
  const payment_intent = params.get("payment_intent");

  useEffect(() => {
    const makeRequest = async () => {
      try {
        await newRequest.put("/orders", { payment_intent });
        setTimeout(() => {
          navigate("/orders");
        }, 5000);
      } catch (err) {
        console.log(err);
      }
    };

    makeRequest();
  }, []);

  return (
    <div className="scontainer">
    <div className="success">
      Payment successful! You are being redirected to the orders page. Please do
      not close the page...
    </div>
    <Loading type="bubbles" color="#013914"/>
    </div>
  );
};

export default Success;
