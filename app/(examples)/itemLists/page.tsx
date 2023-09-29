import { RegularList } from "./layouts/(vanilla)/RegularList";
import { LargePersonListItem } from "./layouts/(people)/LargePersonListItem";
import { SmallPersonListItem } from "./layouts/(people)/SmallPersonListItem";
import { people, products } from "@/data";
import { SmallProductListItem } from "./layouts/(products)/SmallProductListItem";
import { NumberedList } from "@/app/(examples)/itemLists/layouts/(vanilla)/NumberedList";
import { LargeProductsListItem } from "./layouts/(products)/LargeProductListItem";

const ItemListExample = () => {
  return (
    <div className="bg-slate-950 text-white">
      <span className="text-2xl font-semibold text-white">
        Person - Small List:
      </span>
      <RegularList
        items={people}
        resourceName="person"
        itemComponent={SmallPersonListItem}
      />
      <span className="text-2xl font-semibold">Person - Large List:</span>
      <RegularList
        items={people}
        resourceName="person"
        itemComponent={LargePersonListItem}
      />
      <span className="text-2xl font-semibold">Product - Small List:</span>
      <RegularList
        items={products}
        resourceName="product"
        itemComponent={SmallProductListItem}
      />
      <span className="text-2xl font-semibold">Product Large List:</span>
      <NumberedList
        items={products}
        resourceName="product"
        itemComponent={LargeProductsListItem}
      />
    </div>
  );
};

export default ItemListExample;
