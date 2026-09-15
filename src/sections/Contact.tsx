import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Mail,  MapPin, Send } from "lucide-react";
import { LuLinkedin, LuGithub } from "react-icons/lu";
import emailjs from "@emailjs/browser";

type FormStatus = "idle" | "sending" | "success" | "error";

function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<FormStatus>("idle");
  return (
 
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-(--accent) text-sm font-semibold uppercase tracking-[0.25em]">
            Contact
          </span>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Let's Build Something Great Together
          </h2>

          <p className="mt-6 max-w-2xl leading-8 text-zinc-400">
            Whether you have an exciting project, a job opportunity,
            or simply want to connect, I'd love to hear from you.
          </p>
        </motion.div>

        {/* Content */}

        <div className="mt-16 grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Left Side */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold">
              Get in touch
            </h3>

            <p className="mt-6 leading-8 text-zinc-400">
              I'm currently open to frontend engineering opportunities,
              freelance projects, and collaborations involving React,
              TypeScript, Next.js, and modern web technologies.
            </p>

            <div className="mt-10 space-y-6">
              <a
                href="mailto:charlesudenwoke011@gmail.com"
                className="group flex items-center gap-4"
              >
                <div className="rounded-xl border border-(--border) bg-(--card) p-3 transition-colors group-hover:border-(--accent)">
                  <Mail size={20} className="text-(--accent)" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-zinc-400">
                    charlesudenwoke011@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/charles-udenwoke-238142188/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4"
              >
                <div className="rounded-xl border border-(--border) bg-(--card) p-3 transition-colors group-hover:border-(--accent)">
                  <LuLinkedin size={20} className="text-(--accent)" />
                </div>
                <div>
                  <p className="font-medium">LinkedIn</p>
                  <p className="text-zinc-400">
                    Connect with me professionally
                  </p>
                </div>
              </a>

              <a
                href="https://github.com/charlespharrell"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4"
              >
                <div className="rounded-xl border border-(--border) bg-(--card) p-3 transition-colors group-hover:border-(--accent)">
                  <LuGithub size={20} className="text-(--accent)" />
                </div>
                <div>
                  <p className="font-medium">GitHub</p>
                  <p className="text-zinc-400">
                    Explore my projects and code
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="rounded-xl border border-(--border) bg-(--card) p-3">
                  <MapPin size={20} className="text-(--accent)" />
                </div>
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-zinc-400">
                    Abuja, Nigeria
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Form */}

          <motion.form
            ref={formRef}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
            onSubmit={async (e) => {
              e.preventDefault();
              if (!formRef.current || status === "sending") return;

              const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
              const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
              const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

              if (!serviceId || !templateId || !publicKey || publicKey.includes("PASTE")) {
                setStatus("error");
                return;
              }

              try {
                setStatus("sending");
                await emailjs.sendForm(serviceId, templateId, formRef.current, {
                  publicKey,
                });
                setStatus("success");
                formRef.current.reset();
                window.setTimeout(() => setStatus("idle"), 5000);
              } catch {
                setStatus("error");
              }
            }}
            aria-label="Contact form"
          >
            <div>
              <label htmlFor="contact-name" className="mb-2 block text-sm font-medium">
                Your Name
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                autoComplete="name"
                placeholder="John Doe"
                required
                disabled={status === "sending"}
                className="w-full rounded-2xl border border-(--border) bg-(--card) px-5 py-4 outline-none transition-[border-color,box-shadow] duration-300 focus:border-(--accent) focus:ring-2 focus:ring-(--accent)/20 disabled:opacity-60"
              />
            </div>

            <div>
              <label htmlFor="contact-email" className="mb-2 block text-sm font-medium">
                Email Address
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="john@example.com"
                required
                disabled={status === "sending"}
                className="w-full rounded-2xl border border-(--border) bg-(--card) px-5 py-4 outline-none transition-[border-color,box-shadow] duration-300 focus:border-(--accent) focus:ring-2 focus:ring-(--accent)/20 disabled:opacity-60"
              />
            </div>

            <div>
              <label htmlFor="contact-subject" className="mb-2 block text-sm font-medium">
                Subject
              </label>
              <input
                id="contact-subject"
                name="subject"
                type="text"
                placeholder="Project inquiry"
                required
                disabled={status === "sending"}
                className="w-full rounded-2xl border border-(--border) bg-(--card) px-5 py-4 outline-none transition-[border-color,box-shadow] duration-300 focus:border-(--accent) focus:ring-2 focus:ring-(--accent)/20 disabled:opacity-60"
              />
            </div>

            <div>
              <label htmlFor="contact-message" className="mb-2 block text-sm font-medium">
                Your Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={6}
                placeholder="Tell me about your project or opportunity..."
                required
                disabled={status === "sending"}
                className="w-full resize-none rounded-2xl border border-(--border) bg-(--card) px-5 py-4 outline-none transition-[border-color,box-shadow] duration-300 focus:border-(--accent) focus:ring-2 focus:ring-(--accent)/20 disabled:opacity-60"
              />
            </div>

            <motion.button
              type="submit"
              disabled={status === "sending"}
              whileHover={status === "sending" ? undefined : { y: -2 }}
              whileTap={status === "sending" ? undefined : { scale: 0.98 }}
              className="flex items-center gap-2 rounded-2xl bg-(--accent) px-6 py-4 font-semibold text-black transition-[transform,box-shadow] duration-300 hover:shadow-[0_10px_30px_rgba(167,139,250,0.25)] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:shadow-none"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
              <Send size={18} />
            </motion.button>

            {status === "success" && (
              <p role="status" aria-live="polite" className="rounded-xl border border-green-500/20 bg-green-500/10 px-4 py-3 text-sm text-green-400">
                Message sent successfully! I’ll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p role="alert" className="rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                Something went wrong. Please check your connection and try again, or email me directly at charlesudenwoke011@gmail.com.
              </p>
            )}
          </motion.form>
        </div>
      </div>
  
  );
}

export default Contact;