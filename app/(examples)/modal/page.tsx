import { products } from "@/data";
import { LargeProductsListItem } from "../itemLists/layouts/(products)/LargeProductListItem";
import { Modal } from "./layout/modal";

const ModalExamplePage = () => {
  return (
    <Modal>
      <LargeProductsListItem product={products[0]} />
    </Modal>
  );
};

export default ModalExamplePage;
