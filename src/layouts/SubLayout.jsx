function SubLayout({ children }) {
  return (
    <main className=" h-screen bg-gray-900  overflow-hidden text-gray-100">
      <div className="container h-full flex items-center justify-center ">
        {children}
      </div>
    </main>
  );
}

export default SubLayout;
