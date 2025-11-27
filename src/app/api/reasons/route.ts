
import { NextResponse } from 'next/server';

const reasons = [
  {
    title: "Guides so good we call them CEOs",
    desc: "Our Chief Experience Officers have local smarts, big energy, and serious skills to make your trip unforgettable.",
    icon: "UserCheck"
  },
  {
    title: "Small groups, lots of passports",
    desc: "Small groups mean big connections. And with travellers from all over, every trip feels globally inspired.",
    icon: "Users"
  },
  {
    title: "As ungrouped as it gets",
    desc: "The safety of a group, with freedom to explore on your own terms.",
    icon: "Binoculars"
  },
  {
    title: "Immersive experiences are how we roll",
    desc: "Get hands-on with culture, food, and local life. No sidelines, just full-on adventure.",
    icon: "HeartHandshake"
  },
  {
    title: "Doing good has never been so fun",
    desc: "Travel that helps people, places, and the planet — powered by our Community Tourism model.",
    icon: "Home"
  },
  {
    title: "Book with all the confidence in the world",
    desc: "No stress here. Flexible policies, guaranteed departures, and support whenever you need it.",
    icon: "Leaf"
  }
];

export async function GET() {
  return NextResponse.json(reasons);
}