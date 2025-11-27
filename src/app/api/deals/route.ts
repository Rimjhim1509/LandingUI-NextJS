
import { NextResponse } from 'next/server';

const deals = [
  {
    id: 1,
    title: "Antarctica Classic in Depth",
    type: "MARINE",
    days: 13,
    route: "Ushuaia to Ushuaia",
    oldPrice: 17999,
    newPrice: 8259,
    date: "Dec 01, 2025",
    image: "./deals/antarctica.jpg"
  },
  {
    id: 2,
    title: "Torres del Paine - The W Trek",
    type: "ACTIVE",
    days: 6,
    route: "Puerto Natales to Puerto Natales",
    oldPrice: 3400,
    newPrice: 2570,
    date: "Apr 18, 2026",
    image: "./destinations/peru.jpg"
  },
  {
    id: 3,
    title: "Serengeti to Victoria Falls Overland",
    type: "18-TO-THIRTYSOMETHINGS",
    days: 20,
    route: "Nairobi to Victoria Falls",
    oldPrice: 5400,
    newPrice: 4284,
    date: "Dec 08, 2025",
    image: "./deals/pexels-pixabay-48814.jpg"
  },
  {
    id: 4,
    title: "Japan: Kyoto to Tokyo",
    type: "CLASSIC",
    days: 10,
    route: "Kyoto to Tokyo",
    oldPrice: 6899,
    newPrice: 4999,
    date: "May 01, 2026",
    image: "./deals/pexels-leandrobez-31779045.jpg"
  },
  {
    id: 5,
    title: "Best of Egypt & Jordan",
    type: "CLASSIC",
    days: 15,
    route: "Cairo to Amman",
    oldPrice: "$7899",
    newPrice: 5499,
    date: "Nov 15, 2025",
    image: "./destinations/egypt.jpg"
  }
];

export async function GET() {
  return NextResponse.json(deals);
}