import React from "react";
import { Card } from "antd";
import { Link } from "react-router-dom";
const { Meta } = Card;

const NewsCard = ({ newsTitle, newsDescription, newsImages, id }) => (
  <Card
    size="small"
    className="flex gap-2 max-h-48"
    hoverable
    cover={<img alt="" src={newsImages} className="h-full object-cover" />}
  >
    <Meta
      title={newsTitle}
      description={
        <>
          <span className="line-clamp-4">{newsDescription}</span>
          <Link
            to={`${id}`}
            className="text-blue-500 hover:underline read-more"
          >
            Read more
          </Link>
        </>
      }
    />
  </Card>
);

export default NewsCard;
