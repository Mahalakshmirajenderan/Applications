import {
  FaReact,
  FaServer,
  FaGitAlt,
  FaChalkboardTeacher,
} from "react-icons/fa";
export default function FirstPage() {
  return (
    <main className="flex-1 px-4 py-6 sm:px-6 lg:px-8 text-gray-900 dark:text-white transition-colors duration-300 h-auto min-h-screen overflow-y-auto">
      <h3 className="text-3xl sm:text-4xl font-poppins font-medium mb-4">
        ABOUT ME
      </h3>

      <div className="w-24 sm:w-1/2 h-1 bg-gradient-to-r from-[#FF9C1A] to-[#EC1B09] rounded my-4"></div>

      <p className="mb-6 font-raleway text-base sm:text-lg font-medium leading-relaxed">
        Hello there! I'm a front-end web developer with over three years of
        experience crafting web applications. I specialize in React, using tools
        like Redux and JavaScript to build fast, responsive, and user-friendly
        interfaces. I enjoy working on real-world problems, continuously
        learning new technologies, and creating smooth, impactful user
        experiences across devices.
      </p>

      <h3 className="text-2xl sm:text-3xl font-poppins font-medium mb-4">
        What I do!
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="p-4 bg-[#F2F7FC] dark:bg-[#2a2f35] border dark:border-gray-700 rounded-lg hover:scale-[1.02]">
          <h3 className=" flex items-center gap-2 font-poppins text-[24px] font-semibold">
            <FaReact className="text-[#61DBFB] w-6 h-6" />
            Front-end Development
          </h3>
          <p className="font-raleway text-[16px] font-normal">
            As a Frontend Developer, I specialize in crafting responsive,
            accessible, and user-friendly web interfaces. Leveraging modern
            frameworks like React.js, I build intuitive designs that deliver
            smooth user experiences. My focus is on turning ideas into
            interactive, high-performing applications with clean code and modern
            UI practices
          </p>
        </div>

        <div className="p-4 bg-[#FFEBD1] dark:bg-[#3c2f22] border dark:border-gray-700 rounded-lg hover:scale-[1.02]">
          <h3 className=" flex items-center gap-2 font-poppins text-[24px] font-semibold">
            <FaServer className="text-[#6e5494] w-6 h-6" />
            Back-End Development
          </h3>
          <p className="font-raleway text-[16px] font-normal">
            I have extensive experience in building robust RESTful APIs and
            integrating with relational databases. Proficient in Java and Spring
            Boot, I develop scalable and secure backend systems that power
            high-performance web applications. My strong foundation in
            object-oriented programming and backend architecture enables me to
            deliver reliable and maintainable solutions
          </p>
        </div>

        <div className="p-4 bg-[#FFEBD1] dark:bg-[#3c2f22] border dark:border-gray-700 rounded-lg hover:scale-[1.02]">
          <h3 className=" flex items-center gap-2 font-poppins text-[24px] font-semibold">
            <FaGitAlt className="text-[#F05032] w-6 h-6" />
            Version Control (Git)
          </h3>
          <p className="font-raleway text-[16px] font-normal">
            As a developer, I rely heavily on the power and reliability of Git
            for version control and collaboration. I’m confident working with
            branches, resolving merge conflicts, and managing repositories
            efficiently, whether on solo projects or within cross-functional
            teams.
          </p>
        </div>

        <div className="p-4 bg-[#F2F7FC] dark:bg-[#2a2f35] border dark:border-gray-700 rounded-lg hover:scale-[1.02]">
          <h3 className="flex items-center gap-2 font-poppins text-[24px] font-semibold">
            <FaChalkboardTeacher className="text-[#4CAF50] w-6 h-6" />
            Mentorship
          </h3>
          <p className="font-raleway text-[16px] font-normal">
            I have also found great joy in sharing my knowledge with others.
            Being a technical mentor allows me to give back to the community
            that has supported me throughout my career.
          </p>
        </div>
      </div>
    </main>
  );
}
