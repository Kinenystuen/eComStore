import React, { useState, useEffect } from "react";

const Products: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [data, setData] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const fetchData = async (query: string = "") => {
    setIsLoading(true);
    setIsError(false);

    try {
      const response = await fetch(
        `https://v2.api.noroff.dev/online-shop?q=${query}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch");
      }
      const result: Product[] = await response.json();
      setData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData(searchQuery);
  }, [searchQuery]);

  return (
    <div>
      <SearchBar onSearch={(query) => setSearchQuery(query)} />
      {isLoading && <Loader />}
      {isError && <div>Error fetching data...</div>}
      {!isLoading && !isError && <DisplayData data={data} />}
    </div>
  );
};

export default Products;
