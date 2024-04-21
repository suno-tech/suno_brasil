const Footer: React.FC = () => {
    return (
        <footer className="bg-suno-dark-blue w-full lg:h-80 min-[320px]:max-md:h-auto relative z-10">
            <div className="pt-10 pb-4 w-[90%] border-b-2 border-white flex m-auto justify-between min-[320px]:max-md:flex-col">
                <img className="w-60 min-[320px]:max-md:mb-5" src="LOGO_SUNO_BRASIL_BRANCA.svg" alt="Círculo Amarelo"></img>
                <div className="flex flex-row gap-5">
                    <img className="w-8" src="REDE_LINKEDIN.svg" alt="Círculo Amarelo"></img>
                    <img className="w-8" src="REDE_INSTAGRAM.svg" alt="Círculo Amarelo"></img>
                    <img className="w-8" src="REDE_WHATSAPP.svg" alt="Círculo Amarelo"></img>
                </div>
            </div>
            <div className="lg:px-24 lg:pt-5 flex min-[320px]:max-md:flex-col">
                <div className="mr-[20%] min-[320px]:max-md:my-3 min-[320px]:max-md:p-3">
                    <p className="text-white schibsted font-medium text-xl py-px cursor-pointer">Suno Brasil</p>
                    <p className="text-white schibsted font-medium text-xl py-px cursor-pointer">São Paulo – SP</p>
                </div>
                <div className="mr-[20%] min-[320px]:max-md:my-3 min-[320px]:max-md:p-3">
                    <p className="text-white schibsted font-medium text-xl py-px cursor-pointer">Home</p>
                    <p className="text-white schibsted font-medium text-xl py-px cursor-pointer">Quem Somos</p>
                    <p className="text-white schibsted font-medium text-xl py-px cursor-pointer">Soluções</p>
                </div>
                <div className="mr-[20%] min-[320px]:max-md:my-3 min-[320px]:max-md:p-3">
                    <p className="text-white schibsted font-medium text-xl py-px cursor-pointer">Sunotech</p>
                    <p className="text-white schibsted font-medium text-xl py-px cursor-pointer">RPO</p>
                    <p className="text-white schibsted font-medium text-xl py-px cursor-pointer">Staffing</p>
                </div>
                <div className="mr-[20%] min-[320px]:max-md:my-3 min-[320px]:max-md:p-3">
                    <p className="text-white schibsted font-medium text-xl py-px cursor-pointer">Contato</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;