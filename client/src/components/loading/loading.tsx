import Image from 'next/image';

export const Loading = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-md flex flex-col items-center overflow-hidden">
        <div className="w-full bg-gradient-to-r from-[#4F97FF] to-[#0F57BF] h-16 flex items-center justify-center">
          <span className="font-montserrat text-white text-base font-bold animate-pulse">
            Carregando...
          </span>
        </div>

        <div className="px-10 py-8 flex flex-col items-center gap-4">
          <Image
            src={'/CIntegreLogoBlue.svg'}
            alt="CIntegre Logo"
            width={100}
            height={40}
            className="animate-pulse"
          />
        </div>
      </div>
    </div>
  );
};