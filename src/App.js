// import CommonButton from "./components/common/Button";
import Filters from "./components/Filters";
import { Box } from "@chakra-ui/react";
import Item from "./components/Item";
import loadItems from "./data/items.json";
import { useState, useEffect } from "react";

function App() {
  const [items, setItems] = useState(loadItems);
  const [activeFilter, setActiveFilter] = useState("all");

  useEffect(() => {
    if (activeFilter == "all") {
      setItems(loadItems);
    } else {
      const newItems = loadItems.filter((item) => {
        if (activeFilter == "less-10") {
          return item.price < 10;
        } else if (activeFilter == "less-100") {
          return item.price < 100;
        } else if (activeFilter == "greater-100") {
          return item.price >= 100;
        }
      });

      setItems(newItems);
    }
  }, [activeFilter]);

  return (
    <Box w="container.lg" margin="auto">
      <Filters
        activeFilter={activeFilter}
        handleFilterChange={(newFilter) => setActiveFilter(newFilter)}
      />
      {items.map((item, key) => {
        const { description, price, image } = item;
        return (
          <Item
            key={key}
            description={description}
            price={price}
            image={image}
          />
        );
      })}
    </Box>
  );
}

export default App;
