import edication from "@/assets/education-blocks.png";

export function Preview() {
  return (
    <section className="bg-cyan-600">
      <div className="max-w-screen-xl mx-auto py-44 text-white grid grid-cols-2">
        <div>
          <h1 className="text-4xl font-mono">Логопед</h1>
          <h2 className="text-7xl font-serif mt-16">
            Идрисова <br /> Алина Рустэмовна
          </h2>
        </div>

        <div className="flex items-center justify-center">
          <img src={edication} alt="education" className="w-96 h-96" />
        </div>
      </div>
    </section>
  );
}
