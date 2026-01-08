import CartAtent from "../../components/client/cartAtent";

export default function Home() {
  const bgImage = "https://i.pinimg.com/1200x/36/83/6c/36836c7dda1870a6a4868713cd6d71d7.jpg";

  const phrases = [
    {
      title: "Sabor Auténtico",
      text: "La cocina es un lenguaje mediante el cual se puede expresar armonía, creatividad, felicidad, belleza, poesía, complejidad, magia, humor, provocación y cultura.",
      img: "https://i.pinimg.com/736x/8a/42/7b/8a427b668f2374794d5c965ce8f8ab84.jpg",
      color: "bg-orange-50 text-orange-900",
    },
    {
      title: "Momentos Inolvidables",
      text: "No se trata solo de comida, sino de crear recuerdos alrededor de la mesa con las personas que amas.",
      img: "https://i.pinimg.com/736x/d5/f2/05/d5f205e6cff2a930d8f61ee8a6cbea96.jpg",
      color: "bg-stone-50 text-stone-900",
    },
    {
      title: "Pasión por el Detalle",
      text: "El ingrediente más importante es siempre un poco de amor.",
      img: "https://i.pinimg.com/736x/d6/15/3d/d6153d3ec129d7f34d18a61db1371cdb.jpg", // Fixed link from user code if needed, but keeping user's link logic
      color: "bg-rose-50 text-rose-900",
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-50 font-sans selection:bg-orange-200 selection:text-orange-900">
      {/* Hero Section */}
      <div className="relative h-[80vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={bgImage}
            alt="Hero Background"
            className="h-full w-full object-cover object-center brightness-50 contrast-125 transition-transform duration-1000 hover:scale-105"
          />
        </div>
        <div className="absolute inset-0 bg-linear-to-t from-neutral-900/80 via-transparent to-transparent" />
        
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4">
          <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-white sm:text-7xl drop-shadow-lg animate-fade-in-up">
            Bienvenidos a <span className="text-orange-400">Tu Restaurante</span>
          </h1>
          <p className="max-w-2xl text-lg font-light text-neutral-200 sm:text-2xl drop-shadow-md">
            Donde cada plato cuenta una historia y cada sabor es un recuerdo.
          </p>
          <button className="mt-8 rounded-full bg-orange-500 px-8 py-3 text-lg font-semibold text-white shadow-lg transition-all hover:bg-orange-600 hover:scale-105 active:scale-95 focus:ring-4 focus:ring-orange-300">
            Ver Menú
          </button>
        </div>
      </div>

      {/* Phrases / Features Section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-center text-3xl font-bold text-neutral-800 mb-16 relative">
          <span className="relative z-10 bg-neutral-50 px-4">Nuestra Filosofía</span>
          <div className="absolute top-1/2 left-0 w-full h-px bg-neutral-200 z-0"></div>
        </h2>

        <div className="grid gap-10 md:grid-cols-3">
          {phrases.map((item, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-3xl shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${item.color}`}
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10" />
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-8">
                <h3 className="mb-3 text-xl font-bold uppercase tracking-wider opacity-90">
                  {item.title}
                </h3>
                <p className="text-base leading-relaxed opacity-80 italic">
                  "{item.text}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA / Footer-ish area snippet */}
      <div className="bg-neutral-900 py-16 text-center text-white">
        <p className="text-2xl font-serif italic mb-6">"Comer es una necesidad, pero comer de forma inteligente es un arte."</p>
        <span className="inline-block h-1 w-20 bg-orange-500 rounded-full"></span>
      </div>

      
    </div>
  );
}
