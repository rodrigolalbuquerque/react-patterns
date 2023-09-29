"use client";
import { SplitScreen } from "@/app/(examples)/splitScreen/layouts/SplitScreen";

const LeftHandComponent = () => {
  return (
    <div className="bg-slate-500 p-2 text-xl font-semibold">Lado Esquerdo</div>
  );
};

const RightHandComponent = () => {
  return (
    <div className="bg-amber-300 p-2 text-xl font-semibold">Lado Direito</div>
  );
};

export default function SplitScreenExample() {
  return (
    <main className="flex h-full place-items-center justify-center bg-gray-800">
      <div className="h-96 w-96 bg-white">
        <SplitScreen letfWeight={1} rightWeight={2}>
          <LeftHandComponent />
          <RightHandComponent />
        </SplitScreen>
      </div>
    </main>
  );
}

//Nesta página, faço uso do componente reutilizável SplitScreen.
//Poderia usar o componente em qualquer lugar, seguindo algumas demandas do componente:
//Preciso passar 2 filhos - um pro lado esquerdo e um pro direito.
//Preciso passar 2 props - letfWeight e letfWeight - cada uma recebe um número
//que definirá a propoção tomada dentro do componente.
//As estilizações dos componentes são feitas diretamente onde é utilizado.

//OBS: A propriedade flex-grow tem um funcionamento estranho no Tailwind e é usada
//aqui apenas como um exemplo de padrão de componente reutilizável.
