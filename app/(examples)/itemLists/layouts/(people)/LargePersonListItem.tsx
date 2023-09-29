import { Tpeople } from "../../types/listItemTypes";

export const LargePersonListItem = ({ person }: { person: Tpeople }) => {
  const { name, age, hairColor, hobbies } = person;

  return (
    <>
      <h3>{name}</h3>
      <p>Age: {age} years</p>
      <p>Hair color: {hairColor}</p>
      <h3>Hobbies</h3>
      <ul>
        {hobbies.map((hobby) => (
          <li key={hobby}>{hobby}</li>
        ))}
      </ul>
    </>
    //usar React fragment transfere a estilização do componente para
    //o componente pai, onde esse for importado
  );
};

//Este componente reutilizável foi criado (como exemplo) para fazer utilização de uma lista de objetos.
//Ele recebe 1 elemento do array e cria uma estrutura para ele.
