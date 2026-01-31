/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState } from "react";

type ReservationState = "idle" | "loading" | "success" | "error";

export function ReservationForm() {
  const [status, setStatus] = useState<ReservationState>("idle");
  const [message, setMessage] = useState<string>("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/reservation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.get("name"),
          email: form.get("email"),
          phone: form.get("phone"),
          date: form.get("date"),
          time: form.get("time"),
          guests: Number(form.get("guests")),
          message: form.get("message"),
        }),
      });

      if (!response.ok) {
        throw new Error("Erreur serveur");
      }

      setStatus("success");
      setMessage(
        "Merci ! Votre demande de réservation a bien été envoyée. Nous vous contacterons dans les plus brefs délais."
      );
      event.currentTarget.reset();
    } catch (error) {
      console.error(error);
      setStatus("error");
      setMessage(
        "Une erreur est survenue, veuillez réessayer ou nous contacter par téléphone."
      );
    }
  }

  return (
    <section
      id="reservation"
      className="rounded-4xl bg-neutral-900 px-10 py-12 text-white shadow-xl"
    >
      <div className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.4em] text-white/60">
          Réservation
        </p>
        <h2 className="text-3xl font-semibold sm:text-4xl">
          Réservez votre expérience gastronomique
        </h2>
        <p className="max-w-xl text-white/70">
          Notre équipe vous accueillera avec plaisir. Réservez votre table en ligne
          ou contactez-nous au{" "}
          <a href="tel:+33184230345" className="font-semibold text-white">
            +33 1 84 23 03 45
          </a>
          .
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="grid gap-2">
          <label htmlFor="name" className="text-sm font-medium text-white/80">
            Nom complet *
          </label>
          <input
            id="name"
            name="name"
            required
            placeholder="Votre nom"
            className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/30"
          />
        </div>

        <div className="grid gap-2">
          <label htmlFor="email" className="text-sm font-medium text-white/80">
            Adresse e-mail *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="vous@example.com"
            className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/30"
          />
        </div>

        <div className="grid gap-2">
          <label htmlFor="phone" className="text-sm font-medium text-white/80">
            Téléphone *
          </label>
          <input
            id="phone"
            name="phone"
            required
            placeholder="+33 6 12 34 56 78"
            className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/30"
          />
        </div>

        <div className="grid gap-2">
          <label htmlFor="guests" className="text-sm font-medium text-white/80">
            Nombre de convives *
          </label>
          <input
            id="guests"
            name="guests"
            type="number"
            min={1}
            max={8}
            required
            defaultValue={2}
            className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/30"
          />
        </div>

        <div className="grid gap-2">
          <label htmlFor="date" className="text-sm font-medium text-white/80">
            Date souhaitée *
          </label>
          <input
            id="date"
            name="date"
            type="date"
            required
            className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/30"
          />
        </div>

        <div className="grid gap-2">
          <label htmlFor="time" className="text-sm font-medium text-white/80">
            Heure d'arrivée *
          </label>
          <input
            id="time"
            name="time"
            type="time"
            required
            className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/30"
          />
        </div>

        <div className="md:col-span-2">
          <label htmlFor="message" className="text-sm font-medium text-white/80">
            Message (optionnel)
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Allergies, demandes particulières..."
            className="mt-2 w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/30"
          />
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-200 disabled:cursor-not-allowed disabled:bg-white/60 md:w-max"
        >
          {status === "loading" ? "Envoi en cours..." : "Envoyer la demande"}
        </button>
      </form>

      {status !== "idle" ? (
        <p
          className={`mt-6 rounded-2xl px-4 py-3 text-sm ${
            status === "success"
              ? "bg-white/10 text-white"
              : "bg-red-500/20 text-red-100"
          }`}
        >
          {message}
        </p>
      ) : null}
    </section>
  );
}

