# Currency Converter

A simple USD/Toman currency converter built with **Next.js, TypeScript, Tailwind CSS, and TanStack Query**.

## Features

* Convert USD to Toman
* Convert Toman to USD
* Display current USD price
* Display USD buy and sell prices
* Loading state
* Error handling
* Number formatting
* Responsive design

## Technologies

* Next.js
* React
* TypeScript
* TanStack Query
* Tailwind CSS

## API

Exchange rate data is provided by **Navasan API**.

The API key is stored securely in environment variables and is not included in the source code.

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Then open:

```text
http://localhost:3000
```

## Environment Variables

Create a `.env.local` file in the root of the project:

```env
NAVASAN_API_KEY=your_api_key
```

The `.env.local` file is excluded from Git using `.gitignore`.

## Project Structure

```text
app/
├── api/
│   └── exchange-rate/
│       └── route.ts
├── components/
├── hooks/
├── logic/
├── layout.tsx
├── page.tsx
└── providers.tsx
```

## Resources

* Navasan API for exchange rate data
* UIverse for the loader component

## Live Demo

[Add your deployed project URL here]

## GitHub

[Add your GitHub repository URL here]
