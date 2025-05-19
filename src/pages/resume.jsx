import { HiOutlineBriefcase } from "react-icons/hi";
import { FaGraduationCap } from "react-icons/fa";
import InfosysLogo from "../assets/infosys-logo.png";
import crudlogo from "../assets/crudlogo.jpg";

export default function Resume() {
  return (
    <main className="flex-1 px-4 py-6 sm:px-6 lg:px-8 text-gray-900 dark:text-white min-h-screen  transition-transform duration-300">
      <h3 className="text-3xl sm:text-4xl font-poppins font-medium mb-4">
        RESUME
      </h3>
      <div className="h-1 w-full sm:w-1/2 bg-gradient-to-r from-[#FF9C1A] to-[#EC1B09] rounded my-4"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="flex items-start space-x-3">
          <div className="w-6 h-6 mt-1 rounded-full bg-gradient-to-r from-[#FF9C1A] to-[#EC1B09] flex items-center justify-center text-white">
            <FaGraduationCap className="w-4 h-4" />
          </div>
          <h3 className="font-poppins text-xl font-semibold">Education</h3>
        </div>

        <div className="flex items-start space-x-3">
          <div className="w-6 h-6 mt-1 rounded-full bg-gradient-to-r from-[#FF9C1A] to-[#EC1B09] flex items-center justify-center text-white">
            <HiOutlineBriefcase className="w-4 h-4" />
          </div>
          <h3 className="font-poppins text-xl font-semibold">Experience</h3>
        </div>

        {[
          {
            date: "2019-2022",
            title: "Bachelor of Engineering (EEE)",
            place: "Government College of Engineering, Bargur",
          },
          {
            date: "2024 - Present",
            title: "Software Associate Engineer",
            place: "CRUD Operations Pvt Ltd, Chennai",
            logo: crudlogo,
          },
          {
            date: "2018-2019",
            title: "12th Grade",
            place: "St Ann's Girls Hr Sec School",
          },
          {
            date: "2022-2024",
            title: "Systems Engineer",
            place: "Infosys Limited, Chennai",
            logo: InfosysLogo,
          },
        ].map((item, index) => (
          <div
            key={index}
            className="p-4 bg-[#FFEBD1] dark:bg-[#3c2f22] border dark:border-gray-700 rounded-lg hover:scale-[1.02] transition-transform"
          >
            <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-4">
              <div>
                <p className="text-xs text-gray-400 dark:text-gray-300">
                  {item.date}
                </p>
                <p className="text-sm font-semibold">{item.title}</p>
                <p className="text-sm">{item.place}</p>
              </div>
              {item.logo && (
                <img
                  src={item.logo}
                  alt={item.title}
                  className="h-12 object-contain"
                />
              )}
            </div>
          </div>
        ))}

        <div className="col-span-1 md:col-span-2">
          <h3 className="text-2xl font-semibold font-poppins mb-4">
            Work Skills
          </h3>
          <div className="flex flex-wrap gap-3">
            {[
              "React.js",
              "HTML",
              "CSS",
              "Redux",
              "JAVA",
              "Springboot",
              "Spring",
              "Microservices",
              "MYSQL",
              "Spring MVC",
              "Bootstrap",
              "MUI",
              "ANT",
              "Agile methodology",
              "JSON",
              "RESTFUL web",
              "UI designs",
              "GIT",
            ].map((skill, index) => (
              <span
                key={index}
                className="inline-block bg-gray-100 dark:bg-gray-800 text-sm text-gray-900 dark:text-white px-4 py-2 rounded-full hover:bg-[#FF9C1A] hover:text-white transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="col-span-1 md:col-span-2">
          <h3 className="text-2xl font-semibold font-poppins mb-4">
            Soft Skills
          </h3>
          <div className="flex flex-wrap gap-3">
            {[
              "Time Management",
              "Impeccable Communication",
              "Mentorship",
              "Flexibility",
            ].map((skill, index) => (
              <span
                key={index}
                className="inline-block bg-gray-100 dark:bg-gray-800 text-sm text-gray-900 dark:text-white px-4 py-2 rounded-full hover:bg-[#FF9C1A] hover:text-white transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
