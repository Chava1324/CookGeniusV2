// src/components/Footer.jsx

export default function Footer() {
    return (
        <footer className="bg-[#FAFAFA] border-t border-gray-200 py-8 mt-10">
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center md:items-start justify-between gap-6">

                {/* LOGO */}
                <div className="flex items-center gap-3">
                    <img
                        src="/public/eduin.png"
                        alt="Logo de CooKGenius"
                        className="w-10 h-10 rounded-lg shadow"
                    />
                    <span className="text-[#212121] font-semibold text-lg">CooKGenius</span>
                </div>

                {/* ENLACES */}
                <div className="flex flex-col md:flex-row gap-4 text-[#212121] text-sm font-medium">
                    <a href="/privacidad" className="hover:text-[#4CAF50] transition">
                        Política de privacidad
                    </a>

                    <a href="/terminos" className="hover:text-[#4CAF50] transition">
                        Términos
                    </a>

                    <a href="/contacto" className="hover:text-[#4CAF50] transition">
                        Contacto
                    </a>
                </div>
            </div>

            {/* TEXTO INFERIOR */}
            <div className="text-center text-sm text-gray-600 mt-6">
                © 2025 <span className="font-medium">CookGenius</span> – hecho con ❤️ Con React y Laravel.
            </div>
        </footer>
    );
}
