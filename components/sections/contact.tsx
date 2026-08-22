'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import emailjs from '@emailjs/browser';
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Send,
  CheckCircle2,
  Loader2,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { LeetCodeIcon } from '@/components/icons/leetcode';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { SectionHeading } from '@/components/ui/section-heading';
import { profile } from '@/lib/data';

// EmailJS identifiers are public by design; env vars let them be swapped per deploy.
const EMAILJS = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? 'service_kw2clsc',
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? 'template_hdyrcts',
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? 'VNQV_JvESC2SD40d1',
};

type FormState = { name: string; email: string; message: string };
type FormErrors = Partial<Record<keyof FormState, string>>;

const EMPTY: FormState = { name: '', email: '', message: '' };

const CHANNELS = [
  { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: 'Phone', value: profile.phone, href: profile.phoneHref },
  { icon: MapPin, label: 'Location', value: profile.location, href: undefined },
];

export function ContactSection() {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const validate = (): boolean => {
    const next: FormErrors = {};

    if (!form.name.trim()) next.name = 'Please enter your name';
    if (!form.email.trim()) next.email = 'Please enter your email';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = 'That email address looks incomplete';
    if (!form.message.trim()) next.message = 'Please write a message';
    else if (form.message.trim().length < 10)
      next.message = 'A little more detail helps — at least 10 characters';

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      await emailjs.send(
        EMAILJS.serviceId,
        EMAILJS.templateId,
        { name: form.name, email: form.email, message: form.message },
        EMAILJS.publicKey
      );

      setIsSent(true);
      setForm(EMPTY);
      toast.success('Message sent', {
        description: "Thanks for reaching out — I'll reply soon.",
      });
    } catch (error) {
      // Surface a usable fallback instead of dumping the raw error at the visitor.
      console.error('EmailJS error:', error);
      toast.error("Couldn't send the message", {
        description: `Please email me directly at ${profile.email}.`,
        action: {
          label: 'Email',
          onClick: () => window.open(`mailto:${profile.email}`, '_blank'),
        },
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const fieldClass = (hasError: boolean) =>
    `mt-2 rounded-xl border-border bg-background/60 backdrop-blur-sm ${
      hasError ? 'border-destructive focus-visible:ring-destructive' : ''
    }`;

  return (
    <section id="contact" className="relative overflow-hidden py-16 md:py-20">
      <div className="glow left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2" />

      <div className="container relative z-10 max-w-5xl">
        <SectionHeading
          title={
            <>
              Let&apos;s build <span className="text-gradient">something</span>
            </>
          }
          description="Have a role, a project or a question? The form reaches my inbox directly."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          {/* ── Channels ─────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <div className="surface rounded-3xl p-6 md:p-7">
              <ul className="space-y-4">
                {CHANNELS.map(({ icon: Icon, label, value, href }) => {
                  const content = (
                    <>
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-brand/20 bg-brand/10">
                        <Icon className="h-4 w-4 text-brand" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                          {label}
                        </span>
                        <span className="block break-all text-sm font-medium">{value}</span>
                      </span>
                    </>
                  );

                  return (
                    <li key={label}>
                      {href ? (
                        <a
                          href={href}
                          className="flex items-center gap-3 transition-colors hover:text-brand"
                        >
                          {content}
                        </a>
                      ) : (
                        <div className="flex items-center gap-3">{content}</div>
                      )}
                    </li>
                  );
                })}
              </ul>

              <div className="rule my-6" />

              <div className="flex gap-2">
                <Button asChild variant="outline" size="icon" className="rounded-2xl">
                  <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="icon" className="rounded-2xl">
                  <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="icon" className="rounded-2xl">
                  <a href={profile.leetcode} target="_blank" rel="noopener noreferrer" aria-label="LeetCode">
                    <LeetCodeIcon className="h-[18px] w-[18px]" />
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>

          {/* ── Form ─────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="surface rounded-3xl p-6 md:p-8"
          >
            {isSent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex h-full flex-col items-center justify-center py-10 text-center"
              >
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-brand/10">
                  <CheckCircle2 className="h-8 w-8 text-brand" />
                </div>
                <h3 className="font-display text-2xl font-semibold">Message sent</h3>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
                  Thanks for getting in touch — I&apos;ll get back to you as soon as I can.
                </p>
                <Button
                  variant="outline"
                  className="mt-6 rounded-full"
                  onClick={() => setIsSent(false)}
                >
                  Send another
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      autoComplete="name"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                      className={`h-12 ${fieldClass(!!errors.name)}`}
                    />
                    {errors.name && (
                      <p id="name-error" className="mt-1.5 text-xs text-destructive">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      autoComplete="email"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                      className={`h-12 ${fieldClass(!!errors.email)}`}
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-1.5 text-xs text-destructive">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about the role or project…"
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    className={fieldClass(!!errors.message)}
                  />
                  {errors.message && (
                    <p id="message-error" className="mt-1.5 text-xs text-destructive">
                      {errors.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="group h-12 w-full rounded-xl text-base"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      Send message
                      <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </>
                  )}
                </Button>

                <p className="text-center text-xs text-muted-foreground">
                  Prefer email?{' '}
                  <a
                    href={`mailto:${profile.email}`}
                    className="font-medium text-brand hover:underline"
                  >
                    {profile.email}
                  </a>
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
