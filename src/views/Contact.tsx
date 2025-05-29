// src/pages/ContactBar.tsx

import React, { useState, type ChangeEvent, type FormEvent } from 'react';

// Definimos la interfaz para el tipo de los datos del formulario
interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

const Contact: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [statusMessage, setStatusMessage] = useState<string>('');
    const [isSuccess, setIsSuccess] = useState<boolean>(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log('Formulario de contacto de bar enviado:', formData);

        // Simular un envío exitoso
        setTimeout(() => {
            setStatusMessage('¡Gracias por tu mensaje! Nos pondremos en contacto pronto.');
            setIsSuccess(true);
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });
        }, 1000);
    };

    return (
        <div className="container mx-auto px-4 py-12 max-w-5xl font-sans text-gray-800">
            <h1 className="text-5xl font-extrabold text-center text-gray-900 mb-12">
                ¡Contáctanos!
            </h1>

            <p className="text-xl leading-relaxed text-center mb-10">
                ¿Tienes alguna pregunta, quieres reservar una mesa o organizar un evento especial? ¡Estamos aquí para ayudarte!
            </p>

            {/* Sección de Información de Contacto */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
                <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">Nuestra Información</h2>
                    <div className="space-y-4 text-lg">
                        <p>
                            <strong className="font-semibold text-gray-900">Dirección:</strong><br />
                            Avenida de los Cócteles #45, Zona Lounge,<br />
                            Mexico, 90599
                        </p>
                        <p>
                            <strong className="font-semibold text-gray-900">Teléfono:</strong><br />
                            <a href="tel:+525598765432" className="text-blue-600 hover:underline">+52 55 9876 5432</a>
                        </p>
                        <p>
                            <strong className="font-semibold text-gray-900">Email:</strong><br />
                            <a href="mailto:info@tunombredebar.com" className="text-blue-600 hover:underline">info@Bodeguita.com</a>
                        </p>
                        <p>
                            <strong className="font-semibold text-gray-900">Horario:</strong><br />
                            Martes - Jueves: 6:00 PM - 1:00 AM<br />
                            Viernes - Sábado: 7:00 PM - 3:00 AM<br />
                            Domingo - Lunes: Cerrado
                        </p>
                    </div>
                </div>

                {/* Sección de Formulario de Contacto */}
                <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">Envíanos un Mensaje</h2>

                    {statusMessage && (
                        <div className={`p-4 mb-6 rounded-md ${isSuccess ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                            {statusMessage}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                                Tu Nombre:
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                                Tu Email:
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="subject" className="block text-gray-700 text-sm font-bold mb-2">
                                Asunto:
                            </label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
                                Tu Mensaje:
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={5}
                                value={formData.message}
                                onChange={handleChange}
                                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
                                required
                            ></textarea>
                        </div>
                        <div className="text-center">
                            <button
                                type="submit"
                                className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
                            >
                                Enviar Mensaje
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {/* Sección del Mapa (Google Maps Embed) */}
            <div className="mt-16 text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Encuéntranos Aquí</h2>
                <div className="w-full h-96 bg-gray-200 rounded-lg overflow-hidden shadow-xl border border-gray-300">
                    {/* CAMBIA ESTE SRC DEL IFRAME POR LA UBICACIÓN DE TU BAR EN GOOGLE MAPS */}
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.668798991461!2d-99.1415516246395!3d19.43152648186127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f88120d2d341%3A0x6b4474738a1670f!2sZ%C3%B3calo%2C%20Centro%20Hist%C3%B3rico%20de%20la%20Cdad.%20de%20M%C3%A9xico%2C%20Centro%2C%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses-419!2smx!4v1716900222097!5m2!1ses-419!2smx"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Ubicación de nuestro Bar"
                    ></iframe>
                </div>
                <p className="text-lg text-gray-600 mt-4">
                    ¡Te esperamos para que disfrutes de la mejor noche en Bodeguita!
                </p>
            </div>
        </div>
    );
};

export default Contact;