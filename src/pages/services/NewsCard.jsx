import React from "react";
import { Card } from "antd";
import { Link } from "react-router-dom";
const { Meta } = Card;

const NewsCard = ({ newsTitle, newsDescription, newsImages, id }) => (
  <Card
    size="small"
    className="flex gap-2 max-h-48 whitespace-normal"
    hoverable
    cover={<img src={newsImages} className="h-full object-cover" />}
  >
    <Meta
      title={<span className="whitespace-normal">{newsTitle}</span>}
      description={
        <>
          <span className="line-clamp-4">{newsDescription.slice(0, 300)}</span>
          <Link to={`${id}`} className="text-blue-500 hover:underline">
            Read more
          </Link>
        </>
      }
    />
  </Card>
);

export default NewsCard;
