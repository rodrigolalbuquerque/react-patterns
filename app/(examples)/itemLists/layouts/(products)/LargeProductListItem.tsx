import { Tproduct } from "../../types/listItemTypes";

export const LargeProductsListItem = ({ product }: { product: Tproduct }) => {
  const { name, price, description, rating } = product;

  return (
    <>
      <h3>{name}</h3>
      <p>Price: R${price},00</p>
      <h3>Description</h3>
      <p>{description}</p>
      <h3>Average Rating: {rating}</h3>
    </>
    //usar React fragment transfere a estilização do componente para
    //o componente pai, onde esse for importado
  );
};

//Este componente reutilizável foi criado (como exemplo) para fazer utilização de uma lista de objetos.
//Ele recebe 1 elemento do array e cria uma estrutura para ele.
