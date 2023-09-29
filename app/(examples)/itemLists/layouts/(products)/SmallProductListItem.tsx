import { Tproduct } from "../../types/listItemTypes";

export const SmallProductListItem = ({ product }: { product: Tproduct }) => {
  const { name, price } = product;

  return (
    <h3>
      Name: {name} - R${price},00
    </h3>
  );
};

//Este componente reutilizável foi criado (como exemplo) para fazer utilização de uma lista de objetos.
//Ele recebe 1 elemento do array e cria uma estrutura para ele.
