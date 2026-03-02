// 'use client'
// import { useState } from 'react'

// const faqs = [
//     'WHEN IS THE WEDDING?',
//     'WHERE IS THE WEDDING TAKING PLACE?',
//     'WHERE IS THE WEDDING TAKING PLACE?',
//     'WHAT IS THE DRESS CODE?',
//     'WHAT TIME SHOULD I ARRIVE?',
// ]

// const OPEN_TEXT =
//     'The wedding is taking place at La Mamounia, Marrakech, Morocco.'

// export default function FAQ() {
//     const [activeIndex, setActiveIndex] = useState(null)

//     const toggleFAQ = (index) => {
//         setActiveIndex(activeIndex === index ? null : index)
//     }

//     return (
//         <section id='FAQ' className="min-h-screen max-sm:min-h-fit COLOR_BG_RED text-white flex items-center justify-center max-sm:py-[20vw]">
//             <div className=" w-[80%] max-sm:w-full px-6 max-sm:px-[20px]  flex flex-col gap-20 ">
//                 <h2 className="text-center Font_Q flex justify-center items-center ">FAQ</h2>

//                 <div className="space-y-6 w-full   ">
//                     {faqs.map((question, index) => (
//                         <div
//                             key={index}
//                             className="border-t border-white/40   pt-6"
//                         >
//                             <button
//                                 onClick={() => toggleFAQ(index)}
//                                 className="w-full flex items-center justify-between text-left "
//                             >
//                                 <span className="tracking-wide Font_YV   text-[1.5rem] max-sm:text-[1.1rem] md:text-base">
//                                     {question}
//                                 </span>

//                                 {/* ICON */}
//                                 <span
//                                     className={`relative w-5 h-5   select-none cursor-pointer transition-transform duration-500 ${activeIndex === index ? 'rotate-45' : 'rotate-0'
//                                         }`}
//                                 >
//                                     <img src={`/svgs/IconPlus.svg`} alt='IMG' className="absolute inset-0 m-auto object-cover object-center w-full h-full " />
//                                     <span className="absolute inset-0 m-auto w-[7px] h-[7px] COLOR_BG_RED" />
//                                 </span>
//                             </button>

//                             {/* CONTENT */}
//                             <div
//                                 className={`overflow-hidden transition-all duration-500 ease-in-out ${activeIndex === index
//                                         ? 'max-h-40 opacity-100 mt-4'
//                                         : 'max-h-0 opacity-0'
//                                     }`}
//                             >
//                                 <span className=" Font_YV text-[18px] text-white/60">
//                                     {OPEN_TEXT}
//                                 </span>
//                             </div>
//                         </div>
//                     ))}

//                     <div className="border-t border-white/40" />
//                 </div>
//             </div>
//         </section>
//     )
// }

"use client";
import { useState } from "react";

const faqs = [
  {
    question: "What is the nearest airport ?",
    answer:
      "The nearest airport is Maharana Pratap Airport (UDR), approximately 25-30 minutes from Raffles. Transfers will be arranged for guests so please share your travel details in advance to ensure seamless arrangements.",
  },
  {
    question: "What is the weather like in September?",
    answer:
      "September in Udaipur is pleasantly warm with hints of post-monsoon freshness. Expect daytime temperatures around 26–34°C and cooler evenings by the lake.",
  },
  {
    question: "What should I wear ?",
    answer: `Each event will have a suggested dress code mentioned on the Events page.
In general:

Day events: Light, breathable Indian or fusion wear

Evening events: Formal / cocktail / festive glamour

Wedding ceremony: Traditional elegance

Comfortable footwear is recommended due to outdoor venues.`,
  },
  {
    question: "Are the events indoors or outdoors?",
    answer:
      "The celebrations are planned across both indoor and outdoor spaces.",
  },
  {
    question: "Are children welcome?",
    answer:
      "Invited children are welcome to attend. However, some events are designed as adult-only celebrations.",
  },
  {
    question: "Will There be Child Care for Children during adult only events?",
    answer:
      "If you are interested in child care for the duration of the vents, please contact our wedding planners at sonalskushie@gmail.com",
  },
  {
    question: "Whom should I contact for assistance during the wedding?",
    answer:
      "A dedicated hospitality desk will be available throughout the celebrations to assist with room allocations, event timings, and any special requests.",
  },
  {
    question: "What if I have dietary restrictions?",
    answer:
      "Please inform us in advance of any dietary requirements. The culinary team will be happy to accommodate special requests.",
  },
  {
    question: "What is the checkout process?",
    answer:
      "Our hospitality team will assist with smooth departures on the final day. Transfer details will be shared closer to the date.",
  },
  {
    question: "Do I need a visa to travel to India?",
    answer: `For U.S. citizens attending our wedding in India, you’ll need to apply for an Indian e-Tourist Visa: a simple online process that takes about 10–15 minutes. Just visit the link below, upload a passport photo and a scan of your passport, and pay the fee. Be sure your passport is valid for at least six months beyond your travel date (September 2026), and carry a printed copy of the e-visa when you fly. The e-Tourist Visa application opens 30 days before your scheduled departure date.
`,
  },
  {
    question: "What currency is used in India?",
    answer:
      "The local currency is the Indian Rupee (INR). Currency exchange is available at major international airports. Credit cards are widely accepted at the hotel.",
  },
  {
    question: "Will my phone work in India?",
    answer: "International roaming is available through most providers.",
  },
  {
    question: "What if I want to explore Udaipur?",
    answer:
      "Udaipur is known as the “City of Lakes” and offers stunning palaces, boat rides, and heritage experiences.",
  },
  {
    question: "What can I explore in Udaipur?",
    answer: `City Palace

A magnificent lakeside palace complex showcasing centuries of royal heritage. Private guided tours and sunset visits offer breathtaking views over Lake Pichola.

Lake Pichola

Experience Udaipur from the water with a private sunset boat ride. Golden skies, marble palaces, and serene lake views create an unforgettable setting.

 Taj Lake Palace

An iconic white-marble palace floating gracefully on the lake. Ideal for an elegant dinner, afternoon tea, or champagne at sunset.

The Oberoi Udaivilas

A benchmark of Indian luxury. Indulge in a world-class spa, lakeside dining, or sunset cocktails in a setting of timeless grandeur.

Bagore Ki Haveli

An 18th-century haveli offering a glimpse into Rajasthan’s cultural richness. The evening folk performance is particularly enchanting.
`,
  },
   {
    question: "Where can I Shop in Udaipur? ",
    answer:
      `The Charms of Bapu Bazaar
One of Udaipur's oldest and most popular markets, Bapu Bazaar, is a treasure trove for those seeking traditional Rajasthani textiles and handicrafts. Named after the revered Mahatma Gandhi, this bustling market is lined with shops selling colourful fabrics, embroidered textiles, and handicrafts that reflect the city's rich cultural heritage.

The market is near Taj Lake Palace a grand palace hotel in Udaipur, famous for its intricately designed Bandhani sarees and embroidered wall hangings. Bapu Bazaar is a haven for those looking to immerse themselves in Udaipur's traditional craftsmanship.

Jagdish Chowk: Where Heritage Meets Shopping
Jagdish Chowk, located near the famous Jagdish Temple, is a picturesque square surrounded by vibrant shops and stalls. Here, you can find a mix of traditional and contemporary items, ranging from antique jewellery and hand-carved wooden items to modern clothing and accessories. The market's unique blend of heritage and modernity makes it a must-visit destination for shoppers seeking a diverse range of products.

Exploring Hathi Pol Bazaar: The Elephant Gate Market
Stepping into Hathi Pol Bazaar is like entering a bygone era. This market, situated near the City Palace, is named after the Hathi Pol, or Elephant Gate, that once served as the royal entrance. Hathi Pol Bazaar is renowned for its antique shops, offering a captivating array of vintage jewellery, sculptures, and traditional Rajput weaponry. For those with a penchant for history and nostalgia, this market is a haven of unique and timeless treasures.

Shilpgram: A Rural Arts and Crafts Complex
For a more immersive shopping experience, head to Shilpgram, situated on the outskirts of Udaipur. This rural arts and crafts complex is designed to showcase the diverse arts and crafts of Rajasthan's rural communities.

Shilpgram hosts numerous craft fairs and festivals throughout the year, providing an opportunity for visitors to witness traditional art forms like pottery, weaving, and tie-and-dye. The complex's shops offer an extensive range of handmade products, providing an authentic glimpse into the artistic traditions of rural Rajasthan.

Boutique Bliss: Udaipur's Upscale Shopping Destinations
Udaipur is not just about traditional markets; it also boasts upscale boutiques catering to those with a taste for luxury and contemporary fashion. The city's high-end shopping districts are home to renowned designers and brands, highlighting a fusion of traditional and modern styles. From designer clothing and jewellery to chic home décor items, these boutiques are a haven for those looking to indulge in a more refined shopping experience.

City Palace Complex: Where Royalty Meets Retail Therapy
Within the majestic City Palace complex, you will find a curated selection of shops that redefine the concept of royal retail therapy. These exclusive boutiques offer a collection of high-quality handicrafts, textiles, and jewellery inspired by the rich heritage of the Mewar region. Shopping here is not just a transaction; it is an experience that allows you to immerse yourself in the regal charm of Udaipur's history.

Gangaur Ghat: Souvenirs with a View
Gangaur Ghat, overlooking Lake Pichola, provides a stunning backdrop for a unique shopping experience. The shops along the ghat offer an eclectic mix of souvenirs, trinkets, and local artefacts. As you stroll along the serene lakeside, you can browse through a variety of items, from miniature paintings and marble sculptures to vibrant Rajasthani puppets. This picturesque setting elevates the joy of shopping, making it an unforgettable experience for visitors.

Unveiling Udaipur's Hidden Gems: A Deeper Dive into Shopping Delights
Beyond the well-trodden paths of Udaipur's famous markets, lie some hidden gems that cater to a more niche and discerning shopper. These lesser-known shopping destinations offer a distinct experience, highlighting the city's rich cultural tapestry in unique ways.

Meera Kala Mandir: Where Artistry Takes Center Stage
For art connoisseurs and those with a penchant for intricate craftsmanship, Meera Kala Mandir is a hidden gem waiting to be discovered. Tucked away in the narrow lanes of Udaipur, this art gallery and boutique celebrate the legacy of Meera Bai, a revered saint-poetess. The gallery highlights a mesmerizing collection of traditional Rajasthani paintings, depicting scenes from Meera Bai's life and other mythological tales. The attached boutique offers a curated selection of handcrafted items inspired by Meera Bai's devotion, including beautifully adorned textiles and accessories. 

Bada Bazaar: The Unexplored Haven
While Bapu Bazaar is well-known, its counterpart, Bada Bazaar, often escapes the mainstream spotlight. Located near the Clock Tower, Bada Bazaar is a haven for those seeking a more relaxed and authentic shopping experience. The market is dotted with shops offering a variety of local handicrafts, textiles, and jewellery. The laid-back atmosphere allows visitors to explore at their own pace, discovering hidden treasures and engaging with local artisans who often share stories behind their creations.

Vintage Finds at Maldas Street
Maldas Street, located in the heart of Udaipur, is a hidden paradise for vintage enthusiasts and collectors. This narrow lane is lined with shops that specialize in unique, antique pieces, ranging from old coins and vintage jewellery to rare artifacts. Exploring Maldas Street is like embarking on a treasure hunt through time, where each store unveils a piece of history waiting to be admired and acquired.

The Bohemian Vibe of Chand Pole
For those seeking a bohemian touch to their shopping experience, Chand Pole is the place to be. This vibrant area, nestled within the old city, is known for its eclectic mix of shops offering quirky and artistic products. From hand-painted clothing to funky accessories and contemporary artwork, Chand Pole is a refreshing departure from the traditional markets, attracting a younger crowd with its unique and offbeat offerings.

Udaipur Haat: A Cultural Mosaic of Crafts
Udaipur Haat is a government-supported initiative that provides a platform for local artisans to highlight their crafts. This market, situated near the City Palace, features stalls representing various regions of Rajasthan. Visitors can explore a diverse array of handicrafts, textiles, and traditional items from different parts of the state. Udaipur Haat not only supports local artisans but also offers shoppers a chance to experience the cultural diversity that defines Rajasthan.

Contemporary Art Galleries: Beyond Traditional Crafts
While Udaipur is steeped in tradition, it also embraces contemporary art. The city is home to several art galleries highlighting the work of local and national artists. These galleries provide a different shopping experience, where visitors can explore and purchase contemporary paintings, sculptures, and other modern art forms that reflect the evolving cultural landscape of Udaipur.

Empowering Women at Shilpigram's Women's Bazaar
Saheliyon Ki Bari, known for its beautiful gardens, is also home to a unique shopping experience. The area surrounding the gardens features stalls offering Rajasthani culinary delights. Visitors can purchase authentic spices, traditional sweets, and handmade utensils that highlight the richness of Rajasthani cuisine. This unconventional shopping spot allows food enthusiasts to take a piece of Rajasthan's gastronomic heritage home with them
`,
  },
];

const OPEN_TEXT =
  "The wedding is taking place at La Mamounia, Marrakech, Morocco.";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      id="FAQ"
      className="min-h-screen max-sm:min-h-fit COLOR_BG_RED text-white flex items-center justify-center max-sm:py-[20vw] py-[10vh]"
    >
      <div className="w-[80%] max-sm:w-full px-6 max-sm:px-[20px] flex flex-col gap-20">
        <h2 className="text-center Font_Q flex justify-center items-center">
          FAQ
        </h2>

        <div className="space-y-6 w-full">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-t border-white/20 pt-6  group translate-0"
            >
              {/* BUTTON */}
              <button
                onClick={() => toggleFAQ(index)}
                className="group w-full flex items-center justify-between text-left cursor-pointer"
              >
                <span className="tracking-wide uppercase Font_YV text-[1.5rem]  max-sm:text-[1.1rem] md:text-base relative">
                  {faq.question}
                </span>

                {/* ICON */}
                <span
                  className={`
                    relative w-5 h-5 select-none cursor-pointer
                    transition-transform duration-500 ease-in-out
                    group-hover:rotate-45
                    ${activeIndex === index ? "rotate-45" : "rotate-0"}
                  `}
                >
                  <img
                    src="/svgs/IconPlus.svg"
                    alt="IMG"
                    className="absolute inset-0 m-auto object-cover object-center w-full h-full"
                  />
                  <span className="absolute inset-0 m-auto w-[7px] h-[7px] COLOR_BG_RED" />
                </span>
              </button>

              {/* CONTENT */}
              <div
                className={`
                  overflow-hidden transition-all duration-500 ease-in-out
                  ${
                    activeIndex === index
                      ? "max-h-auto opacity-100 mt-4"
                      : "max-h-0 opacity-0"
                  }
                `}
              >
                <span className="Font_YV text-[18px] capitalize text-white/60">
                  {faq.answer}
                </span>
              </div>

              <div
                className={`w-0 h-px bg-white  ${activeIndex !== index ? "group-hover:w-full" : ""} absolute bottom-[-50%] left-0  transition-all duration-200 ease-in`}
              ></div>
            </div>
          ))}

          <div className="border-t border-white/20" />
        </div>
      </div>
    </section>
  );
}
