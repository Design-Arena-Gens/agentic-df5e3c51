import { NextResponse } from "next/server";

const PHONE_REGEX = /^\+?\d[\d\s.-]{6,}$/;

export async function POST(request: Request) {
  const body = await request.json();

  if (!body) {
    return NextResponse.json(
      { message: "Requête invalide." },
      { status: 400 }
    );
  }

  const { name, email, phone, date, time, guests } = body;

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof phone !== "string" ||
    typeof date !== "string" ||
    typeof time !== "string" ||
    typeof guests !== "number"
  ) {
    return NextResponse.json(
      { message: "Certains champs sont manquants." },
      { status: 422 }
    );
  }

  if (!PHONE_REGEX.test(phone)) {
    return NextResponse.json(
      { message: "Le numéro de téléphone est invalide." },
      { status: 422 }
    );
  }

  await new Promise((resolve) => setTimeout(resolve, 750));

  return NextResponse.json(
    {
      message:
        "Votre demande de réservation a été transmise. Nous vous répondrons rapidement.",
    },
    { status: 201 }
  );
}
