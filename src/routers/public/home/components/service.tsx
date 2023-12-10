import atom from "@/assets/atom.png";
import graduatuib from "@/assets/graduation-hat.png";
import school from "@/assets/school-bag.png";

export function Service() {
  return (
    <section className="flex gap-6 w-full justify-center -mt-6 z-20 text-white">
      <div className="bg-indigo-900 px-6 py-8 shadow-2xl rounded-2xl flex gap-2 items-center max-w-sm">
        <img src={atom} className="h-28 w-32" alt="atom" />
        <p className="text-xl font-mono">Запуск речи, звуков</p>
      </div>
      <div className="bg-indigo-900 px-6 py-8 shadow-2xl rounded-2xl flex gap-2 items-center max-w-sm">
        <img src={school} className="h-28 w-32" alt="bag" />
        <p className="text-xl font-mono">Подготовка к школе</p>
      </div>
      <div className="bg-indigo-900 px-6 py-8 shadow-2xl rounded-2xl flex gap-2 items-center max-w-sm">
        <img src={graduatuib} className="h-28 w-32" alt="hat" />
        <p className="text-xl font-mono">Ведение до выпуска</p>
      </div>
    </section>
  );
}
