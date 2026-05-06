import { NextResponse } from "next/server";

const priceCatalog = {
  "whole milk": {
    itemName: "Whole Milk",
    unit: "1 gal",
    prices: { Kroger: 3.49, Walmart: 3.22, Costco: 3.35 },
  },
  "large eggs": {
    itemName: "Large Eggs",
    unit: "12 ct",
    prices: { Kroger: 2.65, Walmart: 2.79, Costco: 4.53 },
  },
  "white bread": {
    itemName: "White Bread",
    unit: "1 loaf",
    prices: { Kroger: 1.99, Walmart: 1.84, Costco: 2.19 },
  },
  "banana": {
    itemName: "Banana",
    unit: "1 bunch",
    prices: { Kroger: 1.03, Walmart: 1.09, Costco: 1.15 },
  },
  "butter": {
    itemName: "Butter",
    unit: "8 oz",
    prices: { Kroger: 2.79, Walmart: 2.48, Costco: 15.38},
  },
    "strawberry": {
    itemName: "Strawberry",
    unit: "2 lbs",
    prices: { Kroger: 5.99, Walmart: 4.72, Costco: 5.10 },
  },
};

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const item = searchParams.get("item")?.trim().toLowerCase();

  if (!item) {
    return NextResponse.json({ error: "Missing query parameter: item" }, { status: 400 });
  }

  const product = priceCatalog[item];
  if (!product) {
    return NextResponse.json(
      { error: "Item not found in sample catalog. Try strawberry,milk, Large Eggs, White Bread, Banana, or Butter." },
      { status: 404 }
    );
  }

  return NextResponse.json(product);
}
