"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { FaPaperPlane, FaCheckCircle } from "react-icons/fa";
import emailjs from "@emailjs/browser";

// Types
type FormState = {
  name: string;
  email: string;
  message: string;
};

type FormErrors = {
  name?: string;
  email?: string;
  message?: string;
};

export function ContactSection() {
  const [formState, setFormState] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Validation
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formState.name.trim())
      newErrors.name = "Name is required";

    if (!formState.email.trim())
      newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formState.email))
      newErrors.email = "Email is invalid";

    if (!formState.message.trim())
      newErrors.message = "Message is required";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // Submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      await emailjs.send(
        "service_kw2clsc",
        "template_hdyrcts",
        {
          name: formState.name,
          email: formState.email,
          message: formState.message,
        },
        "VNQV_JvESC2SD40d1"
      );

      setIsSubmitted(true);

      setFormState({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS error:", error);
      alert(JSON.stringify(error));
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle Change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  // Animation Variants
  const formVariants = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        staggerChildren: 0.1,
      },
    },
  };

  const childVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section
      id="contact"
      className="
        relative overflow-hidden
        py-24
        bg-gradient-to-br
        from-green-500/10
        via-background
        to-emerald-500/10
      "
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-green-500/10 blur-3xl rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="
            max-w-2xl mx-auto
            rounded-3xl
            border border-white/10
            bg-gradient-to-br
            from-white/70
            to-white/40
            dark:from-zinc-900/80
            dark:to-zinc-950/60
            backdrop-blur-xl
            shadow-[0_10px_40px_rgba(0,0,0,0.08)]
            dark:shadow-[0_10px_40px_rgba(0,0,0,0.35)]
            overflow-hidden
          "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={formVariants}
        >
          <div className="p-8 sm:p-12">
            {/* Header */}
            <motion.div
              className="text-center mb-10"
              variants={childVariants}
            >
              <div>             
               </div>
              <motion.h2
                className="text-4xl md:text-5xl font-bold tracking-tight text-foreground"
                variants={childVariants}
              >
                Get in Touch
              </motion.h2>

              <motion.p
                className="mt-4 text-muted-foreground text-sm md:text-base leading-relaxed"
                variants={childVariants}
              >
                Have a project idea, collaboration, or opportunity?
                Feel free to reach out anytime.
              </motion.p>
            </motion.div>

            {isSubmitted ? (
              <motion.div
                className="text-center"
                initial={{
                  opacity: 0,
                  scale: 0.8,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                }}
              >
                <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-5">
                  <FaCheckCircle className="w-10 h-10 text-green-500" />
                </div>

                <h3 className="text-2xl font-semibold mb-3">
                  Thank You!
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  Your message has been sent successfully.
                  I’ll get back to you as soon as possible.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit}>
                <motion.div
                  className="space-y-6"
                  variants={formVariants}
                >
                  {/* Name */}
                  <motion.div variants={childVariants}>
                    <Label
                      htmlFor="name"
                      className="text-green-600 dark:text-green-400"
                    >
                      Name
                    </Label>

                    <Input
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className={`
                        mt-2 h-12 rounded-xl
                        border-border
                        bg-background/50
                        backdrop-blur-sm
                        focus-visible:ring-green-500
                        ${
                          errors.name
                            ? "border-destructive"
                            : ""
                        }
                      `}
                    />

                    {errors.name && (
                      <p className="mt-1 text-sm text-destructive">
                        {errors.name}
                      </p>
                    )}
                  </motion.div>

                  {/* Email */}
                  <motion.div variants={childVariants}>
                    <Label
                      htmlFor="email"
                      className="text-green-600 dark:text-green-400"
                    >
                      Email
                    </Label>

                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className={`
                        mt-2 h-12 rounded-xl
                        border-border
                        bg-background/50
                        backdrop-blur-sm
                        focus-visible:ring-green-500
                        ${
                          errors.email
                            ? "border-destructive"
                            : ""
                        }
                      `}
                    />

                    {errors.email && (
                      <p className="mt-1 text-sm text-destructive">
                        {errors.email}
                      </p>
                    )}
                  </motion.div>

                  {/* Message */}
                  <motion.div variants={childVariants}>
                    <Label
                      htmlFor="message"
                      className="text-green-600 dark:text-green-400"
                    >
                      Message
                    </Label>

                    <Textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Write your message..."
                      className={`
                        mt-2 rounded-xl
                        border-border
                        bg-background/50
                        backdrop-blur-sm
                        focus-visible:ring-green-500
                        ${
                          errors.message
                            ? "border-destructive"
                            : ""
                        }
                      `}
                    />

                    {errors.message && (
                      <p className="mt-1 text-sm text-destructive">
                        {errors.message}
                      </p>
                    )}
                  </motion.div>

                  {/* Submit */}
                  <motion.div variants={childVariants}>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="
                        w-full h-12 rounded-xl
                        bg-green-600
                        hover:bg-green-700
                        text-white
                        font-medium
                        transition-all duration-300
                        shadow-lg shadow-green-500/20
                      "
                    >
                      {isSubmitting ? (
                        <motion.div
                          className="h-5 w-5 rounded-full border-t-2 border-r-2 border-white"
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        />
                      ) : (
                        <>
                          Send Message
                          <FaPaperPlane className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </motion.div>
                </motion.div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}