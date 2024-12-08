import { useState } from "react";
import { useApi } from "../../hooks/UseApi";
import { Product } from "../../library/types";
import SearchBar from "../../components/SearchBar";
import DisplayData from "../../components/display/DisplayData";
import H1 from "../../components/shared/Typography/H1";
import Loader from "../../components/shared/ui/Loader";

const Home = () => {
  const { data, isLoading, isError } = useApi<Product[]>(
    "https://v2.api.noroff.dev/online-shop"
  );
  const totalItems = data?.length || 0;
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredData = data?.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="mt-8">
      <H1 className="text-2xl">Products</H1>

      <SearchBar onSearch={(query) => setSearchQuery(query)} />

      {/* Fetch and show data */}
      {isLoading && <Loader />}
      {isError && <div>Error fetching data...</div>}
      {filteredData && (
        <DisplayData data={filteredData} totalItems={totalItems} />
      )}
    </div>
  );
};

export default Home;
