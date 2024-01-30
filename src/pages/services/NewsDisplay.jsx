import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { news } from "../../data";
import { Layout, Spin } from "antd";
import HeroOverlay from "../../components/HeroOverlay";
const { Sider, Content } = Layout;

const NewsDisplay = () => {
  const [currentNews, setCurrentNews] = useState(null);
  const [loading, setLoading] = useState(true);

  const newsID = useParams();

  useEffect(() => {
    setCurrentNews(news.find((item) => Number(item.id) === Number(newsID.id)));
    setTimeout(() => setLoading(false), 500);
  });

  if (loading) {
    return (
      <div className="w-full h-screen grid place-items-center">
        <Spin />
      </div>
    );
  }

  return (
    <>
      <HeroOverlay pageTitle={currentNews.category} />
      <Layout>
        {/* <Flex gap="middle"> */}
        <Content className="text-center min-h-[60vh] px-8">
          <h1>{currentNews.newsTitle}</h1>
          <div className="mt-4">{currentNews.newsDescription}</div>
          <div>
            {currentNews.newsImages.map((image) => (
              <img src={image.link} alt={image.alt} />
            ))}
          </div>
        </Content>
        <Sider width="25%" className="text-center text-white">
          <h3>Also Read:</h3> <br />
          <ul className="list-none text-left px-4">
            {news.map((item) => {
              if (Number(item.id) !== Number(newsID.id)) {
                return (
                  <li className="my-4">
                    <Link to={`/news/${currentNews.id}`}>{item.newsTitle}</Link>{" "}
                    {/* to be corrected */}
                  </li>
                );
              }
            })}
          </ul>
        </Sider>
        {/* </Flex> */}
      </Layout>
    </>
  );
};

export default NewsDisplay;
