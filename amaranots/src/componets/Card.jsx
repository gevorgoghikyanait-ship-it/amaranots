
import React, { useState } from "react";
import "../App.css";

const apartments = [
  {
    id: 1,
    name: "Բյուրական",
    people: 4,
    price: "39,000",
    images: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0",
      ""
    ]
  },
  {
    id: 2,
    name: "Բջնի",
    people: 4,
    price: "45,000",
    images: [
      "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea"
    ]
  },
  {
    id: 3,
    name: "Աբովյան",
    people: 30,
    price: "60,000",
    images: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
      "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7"
    ]
  },
  {
    id: 4,
    name: "Դիլիջան",
    people: 6,
    price: "55,000",
    images: [
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3"
    ]
  },
  {
    id: 5,
    name: "Ծաղկաձոր",
    people: 8,
    price: "70,000",
    images: [
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d"
    ]
  },
  {
    id: 6,
    name: "Երևան",
    people: 5,
    price: "50,000",
    images: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
    ]
  },
  
{
  id: 16,
  name: "Ապարան",
  people: 3,
  price: "73,000",
  images: [
    "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1792591399194--0.8532839249740269image.webp&w=1920&q=75"
  ]
},
{
  id: 17,
  name: "Աբովյան",
  people: 30,
  price: "90,000",
  images: [
    "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1792580053383--0.08425090373865451image.webp&w=1920&q=75"
  ]
},
{
  id: 18,
  name: "Դիլիջան",
  people: 4,
  price: "35,000",
  images: [
    "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1792238109458--0.2715003312410573image.webp&w=1920&q=75"
  ]
},

{
  id: 19,
  name: "Գառնի",
  people: 50,
  price: "60,000",
  images: [
    "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1791986617257--0.8340604055103791image.webp&w=1920&q=75"
  ]
},
{
  id: 20,
  name: "Արգավան",
  people: 25,
  price: "25,000",
  images: [
    "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1791982423636--0.7897758035388378image.webp&w=1920&q=75"
  ]
},
{
  id: 21,
  name: "Էջմիածին",
  people: 70,
  price: "60,000",
  images: [
    "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1791717330974--0.09814041058059297image.webp&w=1920&q=75"
  ]
},
{
  id: 22,
  name: "Դիլիջան",
  people: 4,
  price: "35,000",
  images: [
    "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1791460867784--0.530917952265161image.webp&w=1920&q=75"
  ]
},
{
  id: 23,
  name: "Ծաղկաձոր",
  people: 4,
  price: "45,000",
  images: [
    "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1791187728151--0.7372887855586852image.webp&w=1920&q=75"
  ]
},
{
  id: 24,
  name: "Դիլիջան",
  people: 20,
  price: "100,000",
  images: [
    "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1790862215944--0.7695930654837577image.webp&w=1920&q=75"
  ]
},

{
  id: 25,
  name: "Ակունք",
  people: 25,
  price: "45,000",
  images: [
    "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1791986617255--0.8467192870777291image.webp&w=1920&q=75"
  ]
},
{
  id: 26,
  name: "Աշտարակ",
  people: 60,
  price: "75,000",
  images: [
    "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1791982423643--0.9839437240794469image.webp&w=1920&q=75"
  ]
},
{
  id: 27,
  name: "Երևան",
  people: 100,
  price: "120,000",
  images: [
    "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1791717330984--0.5077910552218572image.webp&w=1920&q=75"
  ]
},
{
  id: 28,
  name: "Դիլիջան",
  people: 6,
  price: "55,000",
  images: [
    "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1791460867788--0.8578820965146758image.webp&w=1920&q=75"
  ]
},
{
  id: 29,
  name: "Պռոշյան",
  people: 40,
  price: "120,000",
  images: [
    "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1791187728166--0.7352685867904512image.webp&w=1920&q=75"
  ]
},
{
  id: 30,
  name: "Ջերմուկ",
  people: 4,
  price: "50,000",
  images: [
    "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1790862215951--0.3683497874113906image.webp&w=1920&q=75"
  ]
}



];

function ApartmentCard({ apartment }) {
  const [liked, setLiked] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <div className="card">

      <div className="image-box">
        <img
          src={apartment.images[currentImage]}
          alt={apartment.name}
        />

        <button
          className="heart"
          onClick={() => setLiked(!liked)}
        >
          {liked ? "❤️" : "♡"}
        </button>

        <div className="dots">
          {apartment.images.map((image, index) => (
            <span
              key={index}
              className={currentImage === index ? "active" : ""}
              onClick={() => setCurrentImage(index)}
            />
          ))}
        </div>
      </div>

      <div className="details">

        <div className="info">
          <span>♧ {apartment.name}</span>
          <span>♙ {apartment.people}</span>
        </div>

        <div className="price">
          <span>♢</span>
          {apartment.price} ֏
        </div>

      </div>
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <div className="apartments">
        {apartments.map((apartment) => (
          <ApartmentCard
            key={apartment.id}
            apartment={apartment}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
