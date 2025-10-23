import { useRef } from 'react'; // 👈 Import useRef
import emailjs from '@emailjs/browser'; // 👈 Import emailjs

export default function Contact() {
    // 1. Initialize the ref using the 'useRef' hook
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        // The form.current should now correctly point to the form DOM element
        emailjs
            .sendForm('service_x7afv4o', 'template_7ol2ebd', form.current, {
                publicKey: 'tuWvO1xcjlIpMXlti',
            })
            .then(
                () => {
                    alert('SUCCESS! Your message has been sent.');
                    form.current.reset(); // Reset the form after successful submission
                },
                (error) => {
                    alert('FAILED to send the message, please try again. Error: ' + error.text);
                },
            );
    };

    return (
        <section id="CONTACT" className="p-4">
            <div className="max-w-5xl mx-auto px-1 lg:px-0">

                {/* Section Heading with highlight */}
                <h2 className="text-gray-100 text-xl md:text-3xl font-medium relative mb-12">
                    Let's Connect

                    <div>
                        <span className="p-b absolute left-0 w-34 md:w-45 lg:w-48 h-[3px] bg-neutral-600">
                            <span className="block h-full bg-sky-500 w-1/3"></span>
                        </span>
                    </div>
                </h2>

                {/* LAYOUT: Container for side-by-side structure */}
                <div className="flex flex-col md:flex-row md:space-x-8 items-start gap-4">


                    {/* Form Element: Enhanced styling for a professional look */}
                    <form ref={form} onSubmit={sendEmail}
                        className="w-full md:w-4/5 flex flex-col mx-auto space-y-3 bg-neutral-800 p-8 rounded-xl shadow-2xl border border-neutral-700"> {/* Adjusted max-w, spacing, padding, shadow, and border */}

                        {/* Name Field */}
                        <label className="text-gray-300 text-sm font-medium">
                            Name:
                            <input
                                type="text"
                                name="user_name"
                                placeholder="Your Name"
                                className="w-full p-3 bg-neutral-700 text-gray-100 border border-neutral-600 rounded-lg mt-1 
                         focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent 
                         placeholder-gray-400 transition-all duration-200 ease-in-out"
                                required
                            />
                        </label>

                        {/* Email Field */}
                        <label className="text-gray-300 text-sm font-medium">
                            Email:
                            <input
                                type="email"
                                name="user_email"
                                placeholder="your.email@example.com"
                                className="w-full p-3 bg-neutral-700 text-gray-100 border border-neutral-600 rounded-lg mt-1 
                         focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent 
                         placeholder-gray-400 transition-all duration-200 ease-in-out"
                                required
                            />
                        </label>

                        {/* Message Field */}
                        <label className="text-gray-300 text-sm font-medium">
                            Message:
                            <textarea
                                name="message"
                                placeholder="What would you like to discuss?"
                                className="w-full p-3 bg-neutral-700 text-gray-100 border border-neutral-600 rounded-lg mt-1 
                         focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent 
                         placeholder-gray-400 transition-all duration-200 ease-in-out resize-y min-h-[120px]"
                                rows="5"
                                required
                            ></textarea>
                        </label>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="bg-sky-600 text-white font-semibold p-3 rounded-lg mt-4 
                       hover:bg-sky-700 active:bg-sky-800 focus:outline-none focus:ring-4 focus:ring-sky-500/50 
                       transition duration-300 ease-in-out transform hover:scale-[1.01] cursor-pointer"
                        >
                            Send Message
                        </button>
                    </form>

                    {/* Contact Info Section */}
                    <div className="w-full md:w-1/2 mt-10 md:mt-0 bg-neutral-800 p-8 rounded-xl shadow-2xl border border-neutral-700">
                        <h3 className="text-gray-100 text-lg font-semibold mb-4">Contact Information</h3>
                        <p className="text-gray-300 mb-2 text-sm">
                            <strong>Email:</strong> <a href="mailto:saw.ehthalayhtoo91@example.com">saw.ehthalayhtoo91@gmail.com</a>
                        </p>
                        <p className="text-gray-300 mb-2 text-sm">
                            <strong>Phone:</strong> (+66) 3 548 1709
                        </p>
                        <p className="text-gray-300 text-sm">
                            <strong>Address:</strong> Asia Pacific International University, Muak Lek, Thailand
                        </p>
                        <p className="text-gray-300 mt-4">
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}