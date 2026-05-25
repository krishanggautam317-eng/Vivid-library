import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { MapPin, Phone, Mail, Send } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Enter a valid phone number"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});
type FormData = z.infer<typeof schema>;

export default function Contact() {
  const { register, handleSubmit, formState: { errors, isSubmitSuccessful }, reset } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    const text = `Hi, I'm ${data.name}. My number is ${data.phone}.%0A%0A${encodeURIComponent(data.message)}`;
    window.open(`https://wa.me/917987654321?text=${text}`, "_blank");
    reset();
  };

  return (
    <section id="contact" className="py-20 sm:py-28 relative border-t border-white/5" style={{ backgroundColor: "hsl(222 47% 7%)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Get In Touch</h2>
            <p className="text-white/50 text-base sm:text-lg">We're here to help you start your focused journey.</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            {/* Contact cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: Phone, title: "Call / WhatsApp", value: "+91 79876 54321" },
                { icon: Mail,  title: "Email Us",        value: "gyansarovar@gmail.com" },
              ].map((c, i) => (
                <div
                  key={i}
                  className="p-5 rounded-2xl border border-white/10 flex items-start gap-4"
                  style={{ backgroundColor: "hsl(222 47% 11%)" }}
                >
                  <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: "hsl(217 91% 60% / 0.15)" }}>
                    <c.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm mb-0.5">{c.title}</p>
                    <p className="text-white/50 text-sm">{c.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Address + Map */}
            <div className="p-5 rounded-2xl border border-white/10" style={{ backgroundColor: "hsl(222 47% 11%)" }}>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: "hsl(217 91% 60% / 0.15)" }}>
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-white font-medium text-sm mb-0.5">Location</p>
                  <p className="text-white/50 text-sm leading-relaxed">MG Road, Near Civil Lines,<br />Bilaspur, Chhattisgarh 495001</p>
                </div>
              </div>
              <div className="w-full rounded-xl overflow-hidden border border-white/10" style={{ height: "220px" }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119183.5!2d82.0510!3d22.0797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a280b0b4f3d48dd%3A0x8f9f8de84eb2f9b7!2sBilaspur%2C+Chhattisgarh!5e0!3m2!1sen!2sin!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Gyan Sarovar Library Location"
                />
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-6 sm:p-8 rounded-2xl border border-white/10"
            style={{ backgroundColor: "hsl(222 47% 11%)" }}
          >
            <h3 className="text-xl font-semibold text-white mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {[
                { id: "name",    label: "Your Name",              placeholder: "Rahul Kumar",          type: "text" },
                { id: "phone",   label: "Phone / WhatsApp",       placeholder: "+91 9876543210",       type: "tel" },
              ].map((field) => (
                <div key={field.id} className="space-y-1.5">
                  <label className="text-sm font-medium text-white/70">{field.label}</label>
                  <input
                    {...register(field.id as keyof FormData)}
                    type={field.type}
                    placeholder={field.placeholder}
                    className="w-full rounded-xl px-4 py-3 text-white text-sm border border-white/10 focus:outline-none focus:border-primary/50 focus:ring-1 transition-all placeholder-white/25"
                    style={{ backgroundColor: "hsl(222 47% 7%)" }}
                  />
                  {errors[field.id as keyof FormData] && (
                    <p className="text-red-400 text-xs">{errors[field.id as keyof FormData]?.message}</p>
                  )}
                </div>
              ))}

              <div className="space-y-1.5">
                <label className="text-sm font-medium text-white/70">Message</label>
                <textarea
                  {...register("message")}
                  rows={4}
                  placeholder="I want to know more about the monthly pass..."
                  className="w-full rounded-xl px-4 py-3 text-white text-sm border border-white/10 focus:outline-none focus:border-primary/50 focus:ring-1 transition-all resize-none placeholder-white/25"
                  style={{ backgroundColor: "hsl(222 47% 7%)" }}
                />
                {errors.message && <p className="text-red-400 text-xs">{errors.message.message}</p>}
              </div>

              {isSubmitSuccessful && (
                <p className="text-green-400 text-sm text-center">Opening WhatsApp...</p>
              )}

              <button
                type="submit"
                className="w-full py-3.5 text-white font-semibold rounded-xl flex items-center justify-center gap-2 text-sm transition-all duration-200 hover:opacity-90"
                style={{ backgroundColor: "hsl(217 91% 60%)", boxShadow: "0 0 20px hsl(217 91% 60% / 0.3)" }}
              >
                Send via WhatsApp
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
