import React from "react";
import HeroOverlay from "../../components/HeroOverlay";
import NewsCard from "./NewsCard";
import { news } from "../../data";

const News = () => {
  return (
    <>
      <HeroOverlay
        pageTitle={"News/Events/Activities"}
        overlayURL={
          "https://1.bp.blogspot.com/-akk1pth4xXI/X-JTa3TmmFI/AAAAAAACDAw/w6jayo_FAWgUrtGXKV4RmuopFDcFUMobwCNcBGAsYHQ/s16000/1.jpg"
        }
      />

      <section className="grid m-8 gap-4 grid-cols-1 md:grid-cols-2 place-items-center">
        {news.map((item) => (
          <NewsCard
            key={item.id}
            id={item.id}
            newsTitle={<span className="line-clamp-1">{item.newsTitle}</span>}
            newsDescription={item.newsDescription}
            newsImages={
              item.newsImages[
                Math.floor(Math.random() * item.newsImages.length)
              ].link
            }
          />
        ))}
      </section>
      {/* <section className="flex-auto"> News</section> */}
    </>
  );
};

export default News;
