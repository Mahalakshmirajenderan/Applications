import portIcon from "../assets/portfolio.png";

export default function Projects() {
  return (
    <main className="flex-1 px-4 py-6 sm:px-6 lg:px-8 text-gray-900 dark:text-white transition-colors duration-300  h-[calc(100vh-60px)] overflow-y-auto ">
      <h3 className="text-[40px] font-poppins font-medium mb-4">PROJECTS</h3>

      <div className="flex-1 mr-0 w-1/2 h-1 bg-gradient-to-r from-[#FF9C1A] to-[#EC1B09] rounded my-4"></div>

      <div className="max-h-[calc(100vh-160px)] overflow-y-auto pr-2 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {[1, 2].map((item) => (
            <div
              key={item}
              className="p-4 bg-[#FFEBD1] dark:bg-[#3d3d3c] border dark:border-gray-700 rounded-lg"
            >
              <img
                src={portIcon}
                className="w-80 h-40 object-cover rounded-md"
                alt="Smart bank app"
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
