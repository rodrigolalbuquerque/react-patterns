import { Tpeople, Tproduct } from "../../types/listItemTypes";

export const NumberedList = ({
  items,
  resourceName,
  itemComponent: ItemComponent,
}: {
  items: Tpeople[] | Tproduct[];
  resourceName: string;
  itemComponent: any;
}) => {
  return (
    <>
      {items.map((item, i) => (
        <>
          <h3>{i + 1}</h3>
          <ItemComponent key={i} {...{ [resourceName]: item }} />
        </>
      ))}
    </>
  );
  //index como chave não é recomendado!!
  //espalhar um obj com uma chave (dinâmica, neste caso) e um valor
  //é uma forma de passar uma prop.
};

// Este componente vai lidar com a integração do componente dos itens (small/LargeProductListItem) e a
// página que vai renderizá-los.
//Este componente vai receber 3 props:
// - items: recebe o array de items;
// - resourceName: recebe uma string => utilizada para criar uma prop custom para items;
// - itemComponent: recebe um componente que estrutura cada item do array;
//Depois retorna um map do array, passando para o componente de cada item a prop custom, que recebe os dados do item
