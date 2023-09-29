import { Tpeople } from "../../types/listItemTypes";

export const SmallPersonListItem = ({ person }: { person: Tpeople }) => {
  const { name, age } = person;

  return (
    <p>
      Name: {name}, Age: {age} anos
    </p>
  );
};

//Este componente reutilizável foi criado (como exemplo) para fazer utilização de uma lista de objetos.
//Ele recebe 1 elemento do array e cria uma estrutura para ele.
