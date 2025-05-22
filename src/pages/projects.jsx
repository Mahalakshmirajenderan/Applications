import portIcon from "../assets/project1.jpg";
import portIcon2 from "../assets/project2.jpg";
import preview from "../assets/preview.jpg";

export default function Projects() {
  return (
    <main className="flex-1 px-4 py-6 sm:px-6 lg:px-8 text-gray-900 dark:text-white transition-colors duration-300 min-h-screen  h-[calc(100vh-60px)] overflow-y-auto ">
      <h3 className="text-[40px] font-poppins font-medium mb-4">PROJECTS</h3>

      <div className="flex-1 mr-0 w-1/2 h-1 bg-gradient-to-r from-[#FF9C1A] to-[#EC1B09] rounded my-4"></div>

      <div className="max-h-[calc(100vh-160px)] overflow-y-auto pr-2 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div
            key=""
            className="p-4 bg-[#FFEBD1] dark:bg-[#3d3d3c] border dark:border-gray-700 rounded-lg"
          >
            <img
              src={portIcon}
              className="w-80 h-40 object-contain rounded-md"
              alt="management app"
            />
            MindPec solutions Project management app
          </div>
          <div
            key=""
            className="p-4 bg-[#FFEBD1] dark:bg-[#3d3d3c] border dark:border-gray-700 rounded-lg"
          >
            <img
              src={portIcon2}
              className="w-80 h-40 object-cover rounded-md"
              alt="Smart bank app"
            />
            Infymebank Smart banking app
          </div>

          <div className="p-4 bg-[#FFEBD1] dark:bg-[#3d3d3c] border dark:border-gray-700 rounded-lg hover:shadow-lg transition">
            <a
              href="https://ticketgeneratorapp.netlify.app/"
              target="_blank"
              rel="noopener norefe"
              className="block"
            >
              <img
                src={preview}
                className="w-80 h-40 object-cover rounded-md"
                alt="Smart bank app"
              />

              <p className="mt-2 font-semibold">Conference ticket generator</p>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
