import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { MapPin, Phone, Mail, Send, MessageCircle } from "lucide-react";

const schema = z.object({
  name:    z.string().min(2, "Name must be at least 2 characters"),
  phone:   z.string().min(10, "Enter a valid phone number"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});
type FormData = z.infer<typeof schema>;

export default function Contact() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    const text = `Hi, I'm ${data.name}. My number is ${data.phone}.%0A%0A${encodeURIComponent(data.message)}`;
    window.open(`https://wa.me/917987654321?text=${text}`, "_blank");
    reset();
  };

  return (
    <section id="contact" className="py-20 sm:py-28" style={{ backgroundColor: "#F5F7FB" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span
            className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ backgroundColor: "#EBF2FF", color: "#0A4DAD" }}
          >
            Contact
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4" style={{ color: "#062B63" }}>
            Get In Touch
          </h2>
          <p className="text-base sm:text-lg max-w-xl mx-auto" style={{ color: "#6B7280" }}>
            Have questions? We'll get back to you in minutes via WhatsApp.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start max-w-5xl mx-auto">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            {[
              { icon: Phone, title: "Call / WhatsApp", value: "+91 79876 54321", sub: "Mon–Sun, 6 AM – 11 PM" },
              { icon: Mail,  title: "Email",           value: "gyansarovar@gmail.com", sub: "Reply within 24 hours" },
              { icon: MapPin,title: "Location",        value: "MG Road, Near Civil Lines", sub: "Bilaspur, CG 495001" },
            ].map((c, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-5 rounded-2xl bg-white border"
                style={{ borderColor: "#E2E8F0", boxShadow: "0 1px 3px rgba(6,43,99,0.06)" }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "#EBF2FF" }}
                >
                  <c.icon className="w-5 h-5" style={{ color: "#0A4DAD" }} />
                </div>
                <div>
                  <p className="text-sm font-semibold" style={{ color: "#062B63" }}>{c.title}</p>
                  <p className="text-sm mt-0.5" style={{ color: "#374151" }}>{c.value}</p>
                  <p className="text-xs mt-0.5" style={{ color: "#9CA3AF" }}>{c.sub}</p>
                </div>
              </div>
            ))}

            {/* Map */}
            <div
              className="rounded-2xl overflow-hidden border"
              style={{ height: "200px", borderColor: "#E2E8F0" }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119183.5!2d82.0510!3d22.0797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a280b0b4f3d48dd%3A0x8f9f8de84eb2f9b7!2sBilaspur%2C+Chhattisgarh!5e0!3m2!1sen!2sin!4v1"
                width="100%" height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Library Location"
              />
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-7 sm:p-8 rounded-2xl bg-white border"
            style={{ borderColor: "#E2E8F0", boxShadow: "0 4px 16px rgba(6,43,99,0.07)" }}
          >
            <h3 className="text-xl font-bold mb-1" style={{ color: "#062B63" }}>Send a Message</h3>
            <p className="text-sm mb-7" style={{ color: "#9CA3AF" }}>We'll reply on WhatsApp instantly.</p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {[
                { id: "name",  label: "Your Name",        placeholder: "Rahul Kumar",      type: "text" },
                { id: "phone", label: "Phone / WhatsApp", placeholder: "+91 9876543210",   type: "tel" },
              ].map((f) => (
                <div key={f.id}>
                  <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wider" style={{ color: "#374151" }}>
                    {f.label}
                  </label>
                  <input
                    {...register(f.id as keyof FormData)}
                    type={f.type}
                    placeholder={f.placeholder}
                    className="w-full rounded-xl px-4 py-3 text-sm border transition-all outline-none focus:ring-2 placeholder-gray-300"
                    style={{
                      backgroundColor: "#F9FAFB",
                      borderColor: errors[f.id as keyof FormData] ? "#EF4444" : "#E2E8F0",
                      color: "#111827",
                    }}
                    onFocus={(e) => { e.currentTarget.style.borderColor = "#0A4DAD"; e.currentTarget.style.backgroundColor = "#fff"; }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = errors[f.id as keyof FormData] ? "#EF4444" : "#E2E8F0"; e.currentTarget.style.backgroundColor = "#F9FAFB"; }}
                  />
                  {errors[f.id as keyof FormData] && (
                    <p className="text-xs mt-1" style={{ color: "#EF4444" }}>{errors[f.id as keyof FormData]?.message}</p>
                  )}
                </div>
              ))}

              <div>
                <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wider" style={{ color: "#374151" }}>
                  Message
                </label>
                <textarea
                  {...register("message")}
                  rows={4}
                  placeholder="I'd like to know more about the monthly pass..."
                  className="w-full rounded-xl px-4 py-3 text-sm border transition-all outline-none resize-none placeholder-gray-300"
                  style={{ backgroundColor: "#F9FAFB", borderColor: errors.message ? "#EF4444" : "#E2E8F0", color: "#111827" }}
                  onFocus={(e) => { e.currentTarget.style.borderColor = "#0A4DAD"; e.currentTarget.style.backgroundColor = "#fff"; }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = errors.message ? "#EF4444" : "#E2E8F0"; e.currentTarget.style.backgroundColor = "#F9FAFB"; }}
                />
                {errors.message && <p className="text-xs mt-1" style={{ color: "#EF4444" }}>{errors.message.message}</p>}
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl text-sm font-semibold text-white flex items-center justify-center gap-2 transition-all duration-200 hover:scale-[1.02] active:scale-95"
                style={{ backgroundColor: "#0A4DAD", boxShadow: "0 4px 14px rgba(10,77,173,0.3)" }}
              >
                <MessageCircle className="w-4 h-4" />
                Send via WhatsApp
              </button>

              <p className="text-center text-xs" style={{ color: "#9CA3AF" }}>
                Opens WhatsApp with your message pre-filled
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
