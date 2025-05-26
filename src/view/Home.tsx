import React from 'react';

export default function Home() {
  return (
    <div className="font-sans bg-yellow-50 text-gray-800">

      <div className="relative h-[80vh] bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1590080876644-460c1233f6a9')" }}>
        <div className="bg-black bg-opacity-50 h-full flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-5xl font-extrabold mb-4">Bienvenidos a  Bodeguita Bar</h1>
          <p className="text-xl mb-6 max-w-2xl">
            Un lugar donde la tradición, los sabores únicos y la buena música se encuentran para brindarte noches inolvidables.
          </p>
          <button className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg font-semibold transition duration-300">
            Explora Nuestro Menú
          </button>
        </div>
      </div>



      <section className="py-16 bg-yellow-100 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-red-700 text-center mb-12">Nuestras Especialidades</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
            <img src="https://images.unsplash.com/photo-1551024601-bec78aea704b" alt="Cócteles" className="w-full h-48 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-semibold mb-2">Cócteles Exclusivos</h3>
            <p>Sabores únicos preparados por nuestros mixólogos expertos. Cada trago es una experiencia.</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
            <img src="https://images.unsplash.com/photo-1586201375761-83865001e17b" alt="Tapas" className="w-full h-48 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-semibold mb-2">Tapas Artesanales</h3>
            <p>Una variedad de platillos pequeños perfectos para compartir y disfrutar con cada bebida.</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
            <img src="https://images.unsplash.com/photo-1605035094284-3bb1e7dd6e4f" alt="Ambiente" className="w-full h-48 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-semibold mb-2">Ambiente Vibrante</h3>
            <p>Música en vivo, eventos especiales y la mejor vibra para pasarla bien toda la noche.</p>
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
