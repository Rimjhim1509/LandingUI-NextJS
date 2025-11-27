import { NextResponse } from 'next/server';

const destinations = [
  { name: "Antarctica", image: "./destinations/pexels-leandrobez-31779045.jpg" },
  { name: "Mexico", image: "./destinations/australia.jpg" },
  { name: "Peru", image: "./destinations/scotland.jpg" },
  { name: "Scotland", image: "./destinations/russia.jpg" },
];

export async function GET() {
  return NextResponse.json(destinations);
}