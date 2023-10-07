import { useState, useEffect } from "react";
import { FlatList } from "react-native";
import { NewsItem } from "../../components";

import { API_KEY } from "@env";

const NewsScreen = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=${API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        setArticles(data.articles);
      });
  }, []);

  return (
    <FlatList
      data={articles}
      renderItem={({ item }) => (
        <NewsItem
          title={item.title}
          description={item.description}
          image={item.urlToImage}
        />
      )}
      keyExtractor={(item) => item.url}
    />
  );
};

export default NewsScreen;
