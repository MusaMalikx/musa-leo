import React from "react";
import Layout from "../components/Layout/Layout";

const portfolio = () => {
  return (
    <Layout>
      <div className="container mx-auto py-7">
        <div className="flex">
          <span>&gt; </span>
          <p className="dark:text-light text-dark hover:text-primary-light cursor-pointer">
            Home
          </p>
        </div>
        <div>portfolio</div>
      </div>
    </Layout>
  );
};

export default portfolio;
