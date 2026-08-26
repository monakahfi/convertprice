import { NextResponse } from "next/server";

export async function GET() {
  try {
    const apiKey = process.env.NAVASAN_API_KEY;

    console.log("API KEY EXISTS:", !!apiKey);

    const response = await fetch(
      `https://api.navasan.tech/latest/?api_key=${apiKey}`
    );

    if (!response.ok) {
      const errorText = await response.text();

      return NextResponse.json(
        {
          message: "Failed to fetch exchange rate",
          status: response.status,
          error: errorText,
        },
        { status: response.status }
      );
    }

    const data = await response.json();

    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}