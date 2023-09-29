export const SplitScreen = ({
  children,
  //componentes que forem passados como filhos de SplitScreen

  letfWeight,
  rightWeight, //props que controlam tamanho de cada área
}: {
  children: React.ReactElement[];
  letfWeight: number;
  rightWeight: number;
}) => {
  const [left, right] = children;
  //componentes passados como filhos são passados dentro um array
  return (
    <div className="flex">
      <section className={`grow-[${letfWeight}]`}>{left}</section>
      <section className={`grow-[${rightWeight}]`}>{right}</section>
    </div>
  );
  //Estrutura do componente SplitScreen
};

// Esse componente é um Layout pré-definido que divide sua área em 2 partes - podendo
// essas serem controladas através das props leftWeight e rightWeight

//OBS: A propriedade flex-grow tem um funcionamento estranho no Tailwind e é usada
//aqui apenas como um exemplo de padrão de componente reutilizável.
