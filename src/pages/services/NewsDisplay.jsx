import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { news } from "../../data";
import { Flex, Image, Layout, Spin } from "antd";
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
        <Flex
          gap="middle"
          vertical
          className="md:flex md:flex-row"
          // align="center"
        >
          <Content className="text-center min-h-[60vh] p-8">
            <h1>{currentNews.newsTitle}</h1>
            <div className="mt-4 leading-6">{currentNews.newsDescription}</div>
            <div className="flex flex-wrap gap-4 m-8 justify-center">
              {currentNews.newsImages.map((image) => (
                <Image
                  width={300}
                  src={image.link}
                  alt={image.alt}
                  key={image.link}
                  className="rounded-md"
                />
              ))}
            </div>
          </Content>
          <Flex style={{ minWidth: "25%" }}>
            <Sider className="text-center text-white p-4" width="100%">
              <h3 className="text-center text-white">Also Read:</h3> <br />
              <ul className="list-none text-left ">
                {news.map((item) => {
                  if (Number(item.id) !== Number(newsID.id)) {
                    return (
                      <li className="my-4">
                        <Link to={`/news/${item.id}`}>{item.newsTitle}</Link>{" "}
                      </li>
                    );
                  }
                })}
              </ul>
            </Sider>
          </Flex>
        </Flex>
      </Layout>
    </>
  );
};

export default NewsDisplay;
