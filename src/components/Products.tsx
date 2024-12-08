import React, { useState } from "react";
import { useApi } from "../hooks/UseApi";
import { Product } from "../library/types";
import Loader from "./shared/ui/Loader";
import DisplayData from "./display/DisplayData";

const Products: React.FC = () => {
  const { data, isLoading, isError } = useApi<Product[]>(
    "https://v2.api.noroff.dev/online-shop"
  );
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Filtering products based on search query
  const filteredData = data?.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <div>Error fetching data...</div>;
  }

  return (
    <div>
      {/* Search Bar */}
      <div className="flex items-center gap-2 p-4">
        <input
          type="text"
          placeholder="Search for products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border border-gray-300 rounded px-4 py-2 w-full"
        />
      </div>

      {/* Display Data */}
      {filteredData && filteredData.length > 0 ? (
        <DisplayData data={filteredData} />
      ) : (
        <div className="p-4">No products found.</div>
      )}
    </div>
  );
};

export default Products;
