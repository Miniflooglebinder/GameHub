import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/ui/select";
import useGameQueryStore from "@/GameQueryStore";

const SortSelector = () => {
  const sortOrder = useGameQueryStore((s) => s.gameQuery.sortOrder);
  const setSortOrder = useGameQueryStore((s) => s.setSortOrder);

  const sortOrders = [
    { value: "relevance", label: "Relevance" }, // The api uses "" as relevance, but the radix UI Select can't take an empty string as a value prop
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const currentSortOrder = sortOrders.find((order) => {
    return !sortOrder ? sortOrders[1] : order.value === sortOrder;
  });

  return (
    <Select
      defaultValue={currentSortOrder?.value}
      onValueChange={(value) => setSortOrder(value === "relevance" ? "" : value)}>
      <SelectTrigger>Order by: {currentSortOrder?.label}</SelectTrigger>
      <SelectContent>
        {sortOrders.map((order) => (
          <SelectItem key={order.value} value={order.value}>
            {order.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default SortSelector;
