import { FiPhone } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import emailjs from "emailjs-com";
import { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_tcfi3vc",
        "template_on5nc92",
        form.current,
        "_A9NG6Xc5CMeYhuVD"
      )
      .then(
        () => {
          toast.success("Message sent successfully! ", {
            position: "top-left",
          });
          form.current.reset();
        },
        (error) => {
          toast.error("Failed to send message ", {
            position: "top-left",
          });
        }
      );
  };
  return (
    <main className="flex-1 px-4 py-6 sm:px-6 lg:px-8 text-gray-900 dark:text-white transition-colors duration-300  h-[calc(100vh-60px)] overflow-y-auto">
      <h3 className="text-[40px] font-poppins font-medium mb-4">CONTACT</h3>
      <div className="flex-1 mr-0 w-1/2 h-1 bg-gradient-to-r from-[#FF9C1A] to-[#EC1B09] rounded my-4"></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="p-4 bg-[#FFEBD1] dark:bg-[#3c2f22] border dark:border-gray-700 rounded-lg shadow-lg">
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 mt-1 rounded-full bg-gradient-to-r from-[#FF9C1A] to-[#EC1B09] flex items-center justify-center text-white">
              <FiPhone className="w-4 h-4" />
            </div>

            <div className="flex flex-col">
              <h1 className="font-poppins text-[16px] font-semibold">Phone:</h1>
            </div>
          </div>
          <h1 className="flex-1 font-poppins text-[13px] font-normal">
            +91 9344587124
          </h1>
          <h1 className="flex-1 font-poppins text-[13px] font-normal">
            +91 9597708388
          </h1>
        </div>

        <div className="p-4 bg-[#F2F7FC] dark:bg-[#3c2f22] border dark:border-gray-700 rounded-lg shadow-lg">
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 mt-1 rounded-full bg-gradient-to-r from-[#FF9C1A] to-[#EC1B09] flex items-center justify-center text-white">
              <HiOutlineMail className="w-4 h-4" />
            </div>

            <div className="flex flex-col">
              <h1 className="font-poppins text-[16px] font-semibold">Email:</h1>
            </div>
          </div>
          <h1 className="flex-1 font-poppins text-[13px] font-normal">
            mahalakshmi9201@gmail.com
          </h1>
          <h1 className="flex-1 font-poppins text-[13px] font-normal">
            mahalakshmir9201@gmail.com
          </h1>
        </div>
      </div>

      <div className="flex-1 p-6 flex flex-col items-center space-y-6">
        <h3 className="font-raleway text-[16px] font-mixed text-center max-w-lg mx-auto mb-6">
          I am always open to discussing new projects, opportunities in the tech
          world, partnerships, and mentorship.
        </h3>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="space-y-5 w-full max-w-xl"
        >
          <div className="space-y-2">
            <label className="font-raleway font-semibold text-lg">Name:</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
              className="w-full border border-gray-300 dark:border-gray-700 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors"
            />
          </div>

          <div className="space-y-2">
            <label className="font-raleway font-semibold text-lg">Email:</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="w-full border border-gray-300 dark:border-gray-700 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors"
            />
          </div>

          <div className="space-y-2">
            <label className="font-raleway font-semibold text-lg">
              Message:
            </label>
            <textarea
              name="message"
              placeholder="Type your message"
              required
              className="w-full h-32 border border-gray-300 dark:border-gray-700 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors"
            ></textarea>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-[#FF9C1A] to-[#EC1B09] hover:bg-[#d19b96] text-white py-3 px-6 rounded-full font-raleway font-semibold text-lg transition-colors duration-200"
            >
              Submit
            </button>
          </div>
        </form>
        <ToastContainer />
      </div>
    </main>
  );
}
