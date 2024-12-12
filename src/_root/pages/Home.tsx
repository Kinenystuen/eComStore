import { useState } from "react";
import { useApi } from "../../hooks/UseApi";
import { Product } from "../../library/types";
import SearchBar from "../../components/SearchBar";
import DisplayData from "../../components/display/DisplayData";
import H1 from "../../components/shared/Typography/H1";
import Loader from "../../components/shared/ui/Loader";
import { apiKey } from "../../library/constants";
import ScrollToTopBtn from "../../components/shared/ui/ScrollToTopBtn";
import MetaTags from "../../components/shared/metaTags";

const Home = () => {
  const { data, isLoading, isError } = useApi<Product[]>(
    `${apiKey}/online-shop`
  );
  const totalItems = data?.length || 0;
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredData = data?.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container max-w-8xl mx-auto px-4 mt-8">
      <MetaTags
        title="eComStore"
        keywords="eComStore, product, details, shop online"
        description="Explore the details of our premium products. High-quality and great deals await you!"
      />
      <H1 className="text-2xl mx-4">Products</H1>
      <SearchBar onSearch={(query) => setSearchQuery(query)} />
      {/* Fetch and show data */}
      {isLoading && <Loader />}
      {isError && <div>Error fetching data...</div>}
      {filteredData && (
        <DisplayData data={filteredData} totalItems={totalItems} />
      )}
      <ScrollToTopBtn />
    </div>
  );
};

export default Home;
