import Comentarios from "../../components/client/comentarios";
import { useState } from "react";
import { Link } from "react-router-dom";
import CardFilosofia from "../../components/Admin/CardFilosofia";
import { supabase } from "../../client";
import { useEffect } from "react";


export default function Home() {
  const [abrir, setAbrir] = useState(false);
  const [abrir1, setAbrir1] = useState(true);

  const valir = () => {
    if (abrir) {
      setAbrir(false);
      setAbrir1(false);
    } else {
      setAbrir(true);
      setAbrir1(true);
    }
  };
  const bgImage =
    "https://i.pinimg.com/1200x/36/83/6c/36836c7dda1870a6a4868713cd6d71d7.jpg";

  const comentarios = [
    {
      id: 1,
      nombre: "Ana García",
      imagen:
        "https://i.pinimg.com/736x/2c/c2/7f/2cc27fde9b254ffa01ade25781e64117.jpg",
      comentario:
        "Una experiencia culinaria inolvidable. Los sabores eran auténticos y el servicio impecable.",
      estrellas: "⭐⭐⭐⭐",
    },
    {
      id: 2,
      nombre: "Ana García",
      imagen:
        "https://i.pinimg.com/736x/2c/c2/7f/2cc27fde9b254ffa01ade25781e64117.jpg",
      comentario:
        "Una experiencia culinaria inolvidable. Los sabores eran auténticos y el servicio impecable.",
      estrellas: "⭐⭐⭐⭐",
    },
    {
      id: 3,
      nombre: "Ana García",
      imagen:
        "https://i.pinimg.com/736x/2c/c2/7f/2cc27fde9b254ffa01ade25781e64117.jpg",
      comentario:
        "Una experiencia culinaria inolvidable. Los sabores eran auténticos y el servicio impecable.",
      estrellas: "⭐⭐⭐⭐⭐",
    },
    {
      id: 4,
      nombre: "Ana García",
      imagen:
        "https://i.pinimg.com/736x/2c/c2/7f/2cc27fde9b254ffa01ade25781e64117.jpg",
      comentario:
        "Una experiencia culinaria inolvidable. Los sabores eran auténticos y el servicio impecable.",
      estrellas: "⭐⭐⭐⭐⭐",
    },
    {
      id: 5,
      nombre: "Ana García",
      imagen:
        "https://i.pinimg.com/736x/2c/c2/7f/2cc27fde9b254ffa01ade25781e64117.jpg",
      comentario:
        "Una experiencia culinaria inolvidable. Los sabores eran auténticos y el servicio impecable.",
      estrellas: "⭐⭐⭐⭐⭐",
    },
  ];

  const filosofias = [
    {
      id: 1,
      nombre: "Sabor Auténtico",
      descripcion:
        "La cocina es un lenguaje mediante el cual se puede expresar armonía, creatividad, felicidad, belleza, poesía, complejidad, magia, humor, provocación y cultura.",
      imagen:
        "https://i.pinimg.com/736x/8a/42/7b/8a427b668f2374794d5c965ce8f8ab84.jpg",
    },
    {
      id: 2,
      nombre: "Momentos Inolvidables",
      descripcion:
        "No se trata solo de comida, sino de crear recuerdos alrededor de la mesa con las personas que amas.",
      imagen:
        "https://i.pinimg.com/736x/d5/f2/05/d5f205e6cff2a930d8f61ee8a6cbea96.jpg",
    },
    {
      id: 3,
      nombre: "Pasión por el Detalle",
      descripcion: "El ingrediente más importante es siempre un poco de amor.",
      imagen:
        "https://i.pinimg.com/736x/d6/15/3d/d6153d3ec129d7f34d18a61db1371cdb.jpg", // Fixed link from user code if needed, but keeping user's link logic
    },
  ];


  return (
    <div className="min-h-screen bg-neutral-50 font-sans selection:bg-orange-200 selection:text-orange-900">
      {/* Hero Section */}
      <div className="relative h-[80vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            lazy="loading"
            src={bgImage}
            alt="Hero Background"
            className="h-full w-full object-cover object-center brightness-50 contrast-125 transition-transform duration-1000 hover:scale-105"
          />
        </div>
        <div className="absolute inset-0 bg-linear-to-t from-neutral-900/80 via-transparent to-transparent" />

        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4">
          <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-white sm:text-7xl drop-shadow-lg animate-fade-in-up">
            Bienvenidos a{" "}
            <span className="text-orange-400">Tu Restaurante</span>
          </h1>
          <p className="max-w-2xl text-lg font-light text-neutral-200 sm:text-2xl drop-shadow-md">
            Donde cada plato cuenta una historia y cada sabor es un recuerdo.
          </p>
          <button className="mt-8 rounded-full bg-orange-500 px-8 py-3 text-lg font-semibold text-white shadow-lg transition-all hover:bg-orange-600 hover:scale-105 active:scale-95 focus:ring-4 focus:ring-orange-300">
            <Link to="/menu" lazy="loading">
              {" "}
              Ver Menú
            </Link>
          </button>
        </div>
      </div>

      <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-center text-3xl font-bold text-neutral-800 mb-16 relative">
          <span className="relative z-10 bg-neutral-50 px-4">
            Nuestra Filosofía
          </span>
          <div className="absolute top-1/2 left-0 w-full h-px bg-neutral-200 z-0"></div>
        </h2>

        <div className="grid gap-10 md:grid-cols-4 lg:grid-cols-3">
          {filosofias.map((emp) => {
            return (
              <CardFilosofia
                key={emp.id}
                nombre={emp.nombre}
                descripcion={emp.descripcion}
                imagen={emp.imagen}
              />
            );
          })}
        </div>
      </div>

      <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 md:p-8 rounded-2xl shadow-xl max-w-6xl mx-auto">
        <div className="flex justify-end mb-10">
          <button
            onClick={valir}
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-medium rounded-lg shadow-md hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            {abrir ? "Cerrar Comentarios" : "Agregar Comentario"}
          </button>
        </div>

        {abrir1 && (
          <div className="mb-12 bg-white p-6 rounded-xl shadow-md border border-gray-200 animate-fadeIn">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Nuevo Comentario
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Descripción
                </label>
                <input
                  type="text"
                  placeholder="Escribe tu comentario aquí..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Calificación (1-5 estrellas)
                </label>
                <input
                  type="text"
                  placeholder="Ej: 4.5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>
            </div>
            <div className="mt-6 flex justify-end">
              <button className="px-5 py-2.5 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors">
                Publicar Comentario
              </button>
            </div>
          </div>
        )}

        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-2">
            Lo que el cliente dice sobre nosotros
          </h1>
          <p className="text-gray-600 text-center mb-10">
            Descubre las experiencias de nuestros clientes
          </p>
        </div>

        <div className="relative overflow-hidden bg-gradient-to-r from-white to-gray-50 rounded-2xl shadow-lg p-2">
          <div className="carousel-container flex animate-scroll">
            {[...comentarios, ...comentarios].map((p, index) => (
              <div
                key={`${p.id}-${index}`}
                className="carousel-slide min-w-full md:min-w-[50%] lg:min-w-[33.333%] px-3 py-4"
              >
                <Comentarios
                  id={p.id}
                  imagen={p.imagen}
                  nombre={p.nombre}
                  comentario={p.comentario}
                  estrellas={p.estrellas}
                />
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-6 space-x-2 md:hidden">
            {comentarios.map((_, idx) => (
              <button
                key={idx}
                className={`w-2 h-2 rounded-full ${idx === 0 ? "bg-blue-600" : "bg-gray-300"}`}
                aria-label={`Ir a comentario ${idx + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-neutral-900 py-16 text-center text-white">
        <p className="text-2xl font-serif italic mb-6">
          "Comer es una necesidad, pero comer de forma inteligente es un arte."
        </p>
        <span className="inline-block h-1 w-20 bg-orange-500 rounded-full"></span>
      </div>
    </div>
  );
}
