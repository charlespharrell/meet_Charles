import { motion } from "framer-motion";
import { Mail,  MapPin, Send } from "lucide-react";
import { LuLinkedin, LuGithub } from "react-icons/lu";
// import * as Icons from "lucide-react";

// console.log(Icons);
function Contact() {
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
                href="mailto:charles@example.com"
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
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div>
              <label className="mb-2 block text-sm font-medium">
                Your Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full rounded-2xl border border-(--border) bg-(--card) px-5 py-4 outline-none transition-all duration-300 focus:border-(--accent) focus:ring-2 focus:ring-(--accent)/20"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Email Address
              </label>
              <input
                type="email"
                placeholder="john@example.com"
                className="w-full rounded-2xl border border-(--border) bg-(--card) px-5 py-4 outline-none transition-all duration-300 focus:border-(--accent) focus:ring-2 focus:ring-(--accent)/20"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Your Message
              </label>
              <textarea
                rows={6}
                placeholder="Tell me about your project or opportunity..."
                className="w-full resize-none rounded-2xl border border-(--border) bg-(--card) px-5 py-4 outline-none transition-all duration-300 focus:border-(--accent) focus:ring-2 focus:ring-(--accent)/20"
              />
            </div>

            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 rounded-2xl bg-(--accent) px-6 py-4 font-semibold text-black transition-all duration-300 hover:shadow-[0_10px_30px_rgba(167,139,250,0.25)]"
            >
              Send Message
              <Send size={18} />
            </motion.button>
          </motion.form>
        </div>
      </div>
  
  );
}

export default Contact;