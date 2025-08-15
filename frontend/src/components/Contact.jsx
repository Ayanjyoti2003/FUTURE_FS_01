import { useState } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");

        try {
            const res = await fetch("https://future-fs-01-xopq.onrender.com", { // Change if deployed
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });

            const data = await res.json();
            if (data.success) {
                setStatus("✅ Message sent successfully!");
                setFormData({ name: "", email: "", message: "" });
            } else {
                setStatus("❌ Failed to send message.");
            }
        } catch (error) {
            console.error(error);
            setStatus("❌ Error sending message.");
        }
    };

    return (
        <section id="contact" className="py-20 bg-gray-800 text-white">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-6 text-teal-400">LET'S CONNECT</h2>
                <form
                    className="space-y-4 max-w-md mx-auto"
                    onSubmit={handleSubmit}
                >
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-3 bg-gray-900 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-3 bg-gray-900 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                        required
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full p-3 bg-gray-900 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                        required
                    ></textarea>
                    <button
                        type="submit"
                        className="w-full py-3 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition duration-300"
                    >
                        Send Message
                    </button>
                </form>
                {status && <p className="mt-4">{status}</p>}
            </div>
        </section>
    );
}
