export default async function LoginLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className="grid grid-cols-2 min-h-screen gap-[2rem] before:block before:bg-[url(/MikuLogin.jpg)] before:bg-no-repeat before:bg-center before:bg-cover max-sm:grid-cols-1 max-sm:before:hidden">
        <div className="max-w-[30rem] p-[1rem] max-sm:max-w-full mt-[20vh]">
          {children}
        </div>
      </div>
    );
  }