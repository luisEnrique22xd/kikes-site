import React from 'react';

export default function About() {
    return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6 text-center text-yellow-700">Sobre Nosotros</h1>

      <p className="text-lg mb-6 text-gray-800">
        Bienvenidos a <strong>La bodeguita Bar</strong>, tu rincón favorito para escapar de la rutina,
        brindar con amigos y disfrutar de buenos momentos.
      </p>

      <p className="text-lg mb-6 text-gray-800">
        Desde 2015, nos hemos dedicado a ofrecer un espacio donde la buena música, los tragos de autor y
        el ambiente acogedor se unen para crear experiencias inolvidables. Nuestro equipo de bartenders
        está siempre listo para sorprenderte con cócteles únicos, preparados con ingredientes frescos
        y una buena dosis de creatividad.
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-yellow-700">¿Qué nos hace especiales?</h2>
      <ul className="list-disc list-inside mb-6 text-gray-800">
        <li><strong>Ambiente auténtico:</strong> luces cálidas, madera rústica y decoración con historia.</li>
        <li><strong>Música en vivo:</strong> desde jazz y blues hasta noches de rock y DJ sets.</li>
        <li><strong>Carta variada:</strong> cócteles clásicos, cervezas artesanales, vinos seleccionados y cocina internacional.</li>
        <li><strong>Atención personalizada:</strong> aquí no eres un cliente más, eres parte de nuestra comunidad.</li>
      </ul>

      <p className="text-lg mb-6 text-gray-800">
        No somos solo un bar. Somos un punto de encuentro para celebrar la vida, compartir historias y brindar
        por los pequeños grandes momentos.
      </p>

      <div className="bg-yellow-100 p-6 rounded-xl text-center shadow-md">
        <p className="text-xl font-semibold text-yellow-800">¡Ven, sírvete una copa y forma parte de nuestra historia!</p>
        <p className="mt-4 text-gray-700">📍 Calle Ficticia 123, Ciudad</p>
        <p className="text-gray-700">📞 +52 123 456 7890</p>
        <p className="text-gray-700">📷 @elrefugiobar</p>
      </div>
    </section>
  );
}
