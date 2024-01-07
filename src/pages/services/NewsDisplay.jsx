import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { news } from "../../data";
import { Layout } from "antd";
import HeroOverlay from "../../components/HeroOverlay";
const { Sider, Content } = Layout;

const NewsDisplay = () => {
  const [currentNews, setCurrentNews] = useState(null);
  const [loading, setLoading] = useState(true);

  const newsID = useParams();

  useEffect(() => {
    setCurrentNews(news.find((item) => Number(item.id) === Number(newsID.id)));
    console.log(currentNews);
    setTimeout(() => setLoading(false), 500);
  });

  if (loading) {
    return <h1>opening news...</h1>;
  }

  return (
    <>
      <HeroOverlay />
      <Layout>
        {/* <Flex gap="middle"> */}
        <Content className="text-center min-h-[60vh] text-white bg-blue-700">
          <div>{currentNews.id}</div>
        </Content>
        <Sider width="25%" className="text-center text-white bg-blue-400">
          <h3>Also Read:</h3> <br />
          <ul>
            {news.map((item) => {
              if (Number(item.id) !== Number(newsID.id)) {
                return <li>{item.newsTitle}</li>;
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
