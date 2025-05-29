import React from 'react';

const About: React.FC = () => {
    return (
        <div className="container mx-auto px-4 py-8 max-w-4xl font-sans text-gray-800">
            <h1 className="text-5xl font-extrabold text-center text-gray-900 mb-12">
                Acerca de <span className="text-amber-600">Bodeguita</span>
            </h1>

            <p className="text-lg leading-relaxed mb-8 text-center">
                ¡Bienvenidos a <strong className="font-semibold text-amber-700">Bodeguita</strong>! Desde <strong className="font-semibold">1900</strong>, hemos sido el refugio perfecto para los amantes de la buena bebida, la excelente música y la compañía inigualable en Mexico. No somos solo un bar, somos un punto de encuentro donde cada noche es una celebración.
            </p>

            <div className="bg-gray-50 p-6 rounded-lg shadow-inner mb-10 border border-gray-200">
                <h2 className="text-3xl font-bold text-gray-800 mb-4 border-b-2 border-amber-400 pb-2">Nuestra Esencia</h2>
                <p className="text-lg leading-relaxed mb-6">
                    Nuestra misión es simple: crear un ambiente donde la calidad se encuentre con la calidez. Ofrecemos una experiencia que va más allá de la bebida; es sobre el ambiente, la música que te envuelve y las conversaciones que fluyen libremente. Nos esforzamos por ser el lugar donde te sientes como en casa, pero mejor.
                </p>

                <h2 className="text-3xl font-bold text-gray-800 mb-4 border-b-2 border-amber-400 pb-2">Nuestra Visión</h2>
                <p className="text-lg leading-relaxed">
                    Soñamos con ser el bar preferido de la ciudad, reconocido por nuestra innovación en la coctelería, nuestra selección de bebidas premium y nuestro compromiso con una experiencia de cliente excepcional. Queremos que <strong className="font-semibold text-amber-700">Bodeguita</strong> sea sinónimo de momentos inolvidables.
                </p>
            </div>

            <div className="mb-10">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-amber-400 pb-2">Nuestra Oferta Destacada</h2>
                <p className="text-lg leading-relaxed mb-4">
                    Nos enorgullece ofrecer una selección curada para satisfacer todos los gustos:
                </p>
                <ul className="list-disc list-inside space-y-3 text-lg">
                    <li className="bg-white p-3 rounded-md border-l-4 border-amber-500 shadow-sm">
                        <strong className="font-medium text-gray-900">Coctelería Artesanal:</strong> Mezclas innovadoras y clásicos reinventados por nuestros expertos bartenders.
                    </li>
                    <li className="bg-white p-3 rounded-md border-l-4 border-amber-500 shadow-sm">
                        <strong className="font-medium text-gray-900">Cervezas Artesanales e Internacionales:</strong> Una amplia gama para el paladar más exigente.
                    </li>
                    <li className="bg-white p-3 rounded-md border-l-4 border-amber-500 shadow-sm">
                        <strong className="font-medium text-gray-900">Vinos Selectos:</strong> Una cuidada selección de tintos, blancos y espumosos.
                    </li>
                    <li className="bg-white p-3 rounded-md border-l-4 border-amber-500 shadow-sm">
                        <strong className="font-medium text-gray-900">Snacks y Tapas Gourmet:</strong> El complemento perfecto para tu bebida.
                    </li>
                    <li className="bg-white p-3 rounded-md border-l-4 border-amber-500 shadow-sm">
                        <strong className="font-medium text-gray-900">Música en Vivo / DJ Sets:</strong> Ambiente único con los mejores talentos locales.
                    </li>
                </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-inner mb-10 border border-gray-200">
                <h2 className="text-3xl font-bold text-gray-800 mb-4 border-b-2 border-amber-400 pb-2">Nuestra Historia</h2>
                <p className="text-lg leading-relaxed">
                    <strong className="font-semibold text-amber-700">Bodeguita</strong> fue fundado por <strong className="font-semibold">Carlos Slim</strong> con la visión de crear un espacio donde la gente pudiera desconectar y disfrutar. Lo que comenzó como un sueño en <strong className="font-semibold">Huamantla</strong>, hoy es un referente de la vida nocturna de Mexico, gracias a la pasión de nuestro equipo y la lealtad de nuestros clientes.
                </p>
            </div>

            <div className="text-center mt-12">
                <p className="text-xl font-semibold mb-6">
                    ¡Ven y vive la experiencia <strong className="font-semibold text-amber-700">Bodeguita</strong>! Te esperamos.
                </p>
                <button
                    className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
                >
                    Explora Nuestro Menú
                </button>
            </div>
        </div>
    );
};

export default About;