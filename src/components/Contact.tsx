import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert("Thank you for your message! I will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl text-center mb-16">Get In Touch</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-lg text-gray-700 mb-8">
              I'm always interested in hearing about new projects and
              opportunities. Whether you have a question or just want to say hi,
              feel free to reach out!
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-indigo-100 text-indigo-600 rounded-lg">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-lg mb-1">Email</h3>
                  <a
                    href="mailto:rabenarivolahatra@gmail.com"
                    className="text-gray-600 hover:text-indigo-600"
                  >
                    rabenarivolahatra@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-indigo-100 text-indigo-600 rounded-lg">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-lg mb-1">Phone</h3>
                  <a
                    href="tel:+261344637109"
                    className="text-gray-600 hover:text-indigo-600"
                  >
                    +261 34 46 371 09
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-indigo-100 text-indigo-600 rounded-lg">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-lg mb-1">Location</h3>
                  <p className="text-gray-600">
                    Lot IVB 38 AMbohimanala Andoharanofotsy, Antananarivo
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div></div>
        </div>
      </div>
    </section>
  );
}
