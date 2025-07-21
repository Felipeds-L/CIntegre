import Image from "next/image";

export default async function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid grid-cols-2 gap-[2rem] max-h-screen">
      <div>
        <Image
          src={
            "https://plus.unsplash.com/premium_photo-1679429320652-4a9bb7179c4e?q=100&w=640&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          width={300}
          height={900}
          alt=""
          className="w-full h-full object-cover max-h-screen"
        />
      </div>
      <div className="max-w-[30rem] p-[1rem] max-sm:max-w-full mt-[20vh]">
        {children}
      </div>
    </div>
  );
}
