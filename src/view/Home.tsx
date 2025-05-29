import React from 'react';

export default function Home() {
  return (
    <div className="font-sans bg-blue-100 text-gray-800">



<div className="relative h-[80vh] bg-cover bg-center " style={{ backgroundImage: "url('/images/fondo.jpg')" }}>
  <div className=" bg-black opacity-70 h-full flex flex-col items-center justify-center text-white text-center px-4">
    <div className=" h-full flex flex-col items-center justify-center text-white text-center px-4">
      <h1 className="text-5xl font-extrabold mb-4 ">Bienvenidos a Bodeguita Bar</h1>
      <p className="text-xl mb-6 max-w-2xl">
        Un lugar donde la tradición, los sabores únicos y la buena música se encuentran para brindarte noches inolvidables.
      </p>
      <button className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg font-semibold transition duration-300">
        Explora Nuestro Menú
      </button>
    </div>  
  </div>
</div>


      <section className="py-16 bg-blue-100 px-6 md:px-20">
        <h2 className="text-3xl font-serif text-blue-600 font-extrabold text-center mb-12">Nuestras Especialidades</h2>
        <div className="grid grid-cols-1 md::grid-cols-3 gap-8 text-center">
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">

            <img src="/images/drinks.jpg" alt="Cócteles" className="w-full h-48 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-fuchsia-600">Cócteles Exclusivos</h3>
            <p>Sabores únicos preparados por nuestros mixólogos expertos. Cada trago es una experiencia.</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">

            <img src="/images/bros.jpg" alt="Ambiente" className="w-full h-48 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-indigo-600">Ambiente Vibrante</h3>
            <p>Música en vivo, eventos especiales y la mejor vibra para pasarla bien toda la noche.</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">

            <img src="/images/extra.jpg" alt="Tapas" className="w-full h-48 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-lime-500">Eventos especiales </h3>
            <p>Una variedad de eventos para compartir y disfrutar con cada bebida.</p>
          </div>
          
        </div>
      </section>

      <section className="py-16 text-center bg-red-700 text-white">
        <h2 className="text-3xl font-bold mb-4">¡Te esperamos esta noche!</h2>
        <p className="text-lg mb-6">Haz tu reservación o ven con tus amigos a disfrutar de una experiencia única.</p>
        <button className="bg-white text-red-700 font-semibold px-6 py-3 rounded-lg hover:bg-yellow-100 transition">
          Reservar Ahora
        </button>
      </section>
    </div>
  );
}