//Constants
import { PropertyProps } from "@/interfaces/index";
import HeroImage from "@/public/assets/hero.jpg";
import LogoDark from "@/public/assets/ALX_LOGO_DARK.png";
import LogoLight from "@/public/assets/ALX_LOGO_LIGHT.png";

export const HERO_IMAGE = HeroImage;
export const LOGO_DARK = LogoDark;
export const LOGO_LIGHT = LogoLight;

export const PROPERTYLISTINGSAMPLE: PropertyProps[] = [
  {
    id: 1,
    name: "Villa Ocean Breeze",
    description: `Wake up to the sound of rolling waves and the scent of sea air at Villa Ocean Breeze — a stunning Bali getaway designed for relaxation and luxury. Lounge by the infinity pool, enjoy open-air dining on the deck, or unwind with sunset cocktails as the horizon melts into color.

The Space
BEDROOM & BATHROOM
• Bedroom 1 – Primary: King size bed, Ensuite bathroom with stand-alone rain shower, Dual vanity, Walk-in closet, Ocean view  
• Bedroom 2 – Queen bed, Shared bathroom  
• Bedroom 3 – Twin beds, Shared bathroom  

FEATURES & AMENITIES  
• Infinity pool with panoramic sea view  
• Open-plan living and dining area  
• Fully equipped kitchen with breakfast bar  
• Smart TV, WiFi, air conditioning  
• Outdoor lounge and dining terrace  
• Daily housekeeping and chef available on request`,
    address: { state: "Seminyak", city: "Bali", country: "Indonesia" },
    rating: 4.89,
    category: ["Luxury Villa", "Pool", "Free Parking"],
    price: 3200,
    offers: { bed: "3", shower: "3", occupants: "4-6" },
    image: "https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271_1280.jpg",
    discount: ""
  },
  {
    id: 2,
    name: "Mountain Escape Chalet",
    description: `Tucked in the heart of the Aspen mountains, this cozy alpine chalet offers the perfect retreat for skiers, hikers, and dreamers alike. Enjoy crisp mountain air, rustic wooden interiors, and the comfort of a roaring fireplace after a day on the slopes.

The Space
BEDROOM & BATHROOM  
• Bedroom 1 – King bed, Ensuite bath, Fireplace, Balcony  
• Bedroom 2 – Queen bed, Shared bath  
• Bedroom 3 – Bunk beds, Shared bath  

FEATURES & AMENITIES  
• Fireplace and panoramic mountain views  
• Private hot tub under the stars  
• Open kitchen and dining area  
• WiFi, Smart TV, washer/dryer  
• Private ski storage and parking`,
    address: { state: "Aspen", city: "Colorado", country: "USA" },
    rating: 4.70,
    category: ["Mountain View", "Fireplace", "Self Checkin"],
    price: 1800,
    offers: { bed: "4", shower: "2", occupants: "5-7" },
    image: "https://cdn.pixabay.com/photo/2017/07/09/03/19/home-2486092_1280.jpg",
    discount: "30"
  },
  {
    id: 3,
    name: "Cozy Desert Retreat",
    description: `Nestled in the serene desert of Palm Springs, this mid-century modern home captures the spirit of calm and creativity. Bask in the glow of desert sunsets, soak in the outdoor tub, or stargaze from your private patio with a glass of wine in hand.

The Space  
BEDROOM & BATHROOM  
• Bedroom 1 – Queen bed, Ensuite shower  
• Bedroom 2 – Queen bed, Shared bath  

FEATURES & AMENITIES  
• Private courtyard with fire pit  
• Outdoor soaking tub and loungers  
• Open kitchen with modern appliances  
• Air conditioning, WiFi, and Smart TV  
• Pet-friendly property with secure fencing`,
    address: { state: "Palm Springs", city: "California", country: "USA" },
    rating: 4.92,
    category: ["Desert View", "Pet Friendly", "Self Checkin"],
    price: 1500,
    offers: { bed: "2", shower: "1", occupants: "2-3" },
    image: "https://cdn.pixabay.com/photo/2016/08/26/15/06/home-1622401_1280.jpg",
    discount: ""
  },
  {
    id: 4,
    name: "City Lights Penthouse",
    description: `Experience the energy of New York from your private penthouse overlooking the glittering skyline. Floor-to-ceiling windows fill the space with light, while the rooftop terrace invites evenings under the stars.

The Space  
BEDROOM & BATHROOM  
• Bedroom 1 – King bed, Ensuite bath with rain shower  
• Bedroom 2 – Queen bed, Ensuite bath  

FEATURES & AMENITIES  
• Panoramic city views from every room  
• Private rooftop terrace and outdoor dining  
• Modern kitchen with espresso bar  
• WiFi, Smart TV, and 24-hour concierge access`,
    address: { state: "New York", city: "New York", country: "USA" },
    rating: 4.85,
    category: ["City View", "Free WiFi", "24h Checkin"],
    price: 4500,
    offers: { bed: "2", shower: "2", occupants: "2-4" },
    image: "https://cdn.pixabay.com/photo/2016/10/28/13/09/usa-1777986_1280.jpg",
    discount: "15"
  },
  {
    id: 5,
    name: "Riverside Cabin",
    description: `Hidden along the peaceful banks of the Kawarau River, this timber-framed cabin offers tranquil mornings and star-filled nights. Kayak from your private dock or curl up by the fire with a warm drink.

The Space  
BEDROOM & BATHROOM  
• Bedroom 1 – King bed, Ensuite bath  
• Bedroom 2 – Queen bed, Shared bath  
• Bedroom 3 – Twin beds  

FEATURES & AMENITIES  
• Private river dock with free kayaks  
• Outdoor lounge and fire pit  
• Full kitchen, Smart TV, and WiFi  
• Complimentary parking on site`,
    address: { state: "Queenstown", city: "Otago", country: "New Zealand" },
    rating: 4.77,
    category: ["Riverside", "Private Dock", "Free Kayaks"],
    price: 2800,
    offers: { bed: "3", shower: "2", occupants: "4-6" },
    image: "https://cdn.pixabay.com/photo/2022/06/02/11/12/felucca-7237715_1280.jpg",
    discount: "20"
  },
  {
    id: 6,
    name: "Modern Beachfront Villa",
    description: `Perched directly on the sands of Sidemen, this sleek villa combines modern architecture with island serenity. Wake up to gentle waves, enjoy freshly prepared breakfasts, and swim under the tropical sun.

The Space  
BEDROOM & BATHROOM  
• Bedroom 1 – Primary suite with king bed, ocean view, ensuite bath  
• Bedroom 2 – Queen bed, Shared bath  
• Bedroom 3 – Twin beds  

FEATURES & AMENITIES  
• Beach access and infinity pool  
• Personal chef and daily housekeeping  
• Open-air lounge and dining spaces  
• High-speed WiFi, A/C, Smart TV`,
    address: { state: "Sidemen", city: "Bali", country: "Indonesia" },
    rating: 4.95,
    category: ["Beachfront", "Private Pool", "Chef Service"],
    price: 5000,
    offers: { bed: "5", shower: "4", occupants: "8-10" },
    image: "https://cdn.pixabay.com/photo/2020/04/17/12/28/pool-5055009_1280.jpg",
    discount: ""
  },
  {
    id: 7,
    name: "Lakeside Chalet",
    description: `Overlooking a pristine alpine lake, this charming chalet offers the perfect escape for hikers and families. Enjoy morning coffee with mountain reflections and evenings by the wood-burning stove.

The Space  
BEDROOM & BATHROOM  
• Bedroom 1 – King bed, Ensuite bath  
• Bedroom 2 – Queen bed  
• Bedroom 3 – Twin beds  

FEATURES & AMENITIES  
• Lakeside deck with seating  
• Fireplace and mountain views  
• Fully equipped kitchen  
• Free parking and WiFi`,
    address: { state: "Banff", city: "Alberta", country: "Canada" },
    rating: 4.65,
    category: ["Lakeside", "Mountain View", "Hiking Trails"],
    price: 2300,
    offers: { bed: "3", shower: "3", occupants: "4-5" },
    image: "https://cdn.pixabay.com/photo/2017/08/10/18/33/chalet-2626127_1280.jpg",
    discount: "10"
  },
  {
    id: 8,
    name: "Tropical Garden Villa",
    description: `Nestled among lush palms in Koh Samui, this villa invites guests to slow down and breathe in tropical tranquility. Listen to the birds, stroll through private gardens, and relax in open-air living spaces.

The Space  
BEDROOM & BATHROOM  
• Bedroom 1 – King bed, Ensuite bath  
• Bedroom 2 – Queen bed, Shared bath  
• Bedroom 3 – Twin beds  

FEATURES & AMENITIES  
• Private tropical garden  
• Outdoor dining and lounge area  
• Air-conditioned bedrooms  
• Self check-in, free parking, WiFi`,
    address: { state: "Koh Samui", city: "Surat Thani", country: "Thailand" },
    rating: 4.80,
    category: ["Garden", "Free Parking", "Self Checkin"],
    price: 2750,
    offers: { bed: "3", shower: "3", occupants: "5-6" },
    image: "https://cdn.pixabay.com/photo/2012/08/06/00/53/bridge-53769_1280.jpg",
    discount: "25"
  },
  {
    id: 9,
    name: "Urban Loft",
    description: `Located in the vibrant heart of Berlin, this modern loft blends industrial chic with comfort. Huge windows fill the space with light, and the open kitchen makes it ideal for entertaining.

The Space  
BEDROOM & BATHROOM  
• Bedroom – Queen bed, Ensuite bath  

FEATURES & AMENITIES  
• Floor-to-ceiling windows  
• Fully equipped kitchen  
• Smart TV, WiFi, workspace  
• Elevator access and 24h check-in`,
    address: { state: "Berlin", city: "Berlin", country: "Germany" },
    rating: 4.60,
    category: ["City Center", "Free WiFi", "24h Checkin"],
    price: 2000,
    offers: { bed: "2", shower: "1", occupants: "2-3" },
    image: "https://cdn.pixabay.com/photo/2021/10/30/18/03/berlin-6755246_1280.jpg",
    discount: ""
  },
  {
    id: 10,
    name: "Secluded Forest Cabin",
    description: `Hidden deep within Whistler’s evergreen forests, this log cabin offers complete privacy and rustic charm. Unplug from the world, unwind in the hot tub, and reconnect with nature.

The Space  
BEDROOM & BATHROOM  
• Bedroom 1 – King bed  
• Bedroom 2 – Queen bed  
• Bedroom 3 – Bunk beds  

FEATURES & AMENITIES  
• Private outdoor hot tub  
• Wood-burning stove and full kitchen  
• Hiking trails from your doorstep  
• WiFi, fire pit, and outdoor deck`,
    address: { state: "Whistler", city: "British Columbia", country: "Canada" },
    rating: 4.72,
    category: ["Secluded", "Hot Tub", "Self Checkin"],
    price: 2600,
    offers: { bed: "4", shower: "2", occupants: "5-7" },
    image: "https://cdn.pixabay.com/photo/2020/12/19/10/45/mountains-5844031_1280.jpg",
    discount: "40"
  },
  {
    id: 11,
    name: "Cliffside Villa",
    description: `Perched high above the Amalfi Coast, this breathtaking villa combines classic Italian charm with endless sea views. Swim in the infinity pool or dine under the stars as waves crash below.

The Space  
BEDROOM & BATHROOM  
• Bedroom 1 – King bed, Ensuite bath, Balcony  
• Bedroom 2 – Queen bed  
• Bedroom 3 – Twin beds  

FEATURES & AMENITIES  
• Infinity pool and ocean terrace  
• Outdoor dining with sea view  
• Full kitchen and wine fridge  
• WiFi, A/C, and private parking`,
    address: { state: "Amalfi", city: "Salerno", country: "Italy" },
    rating: 4.93,
    category: ["Cliffside", "Infinity Pool", "Sea View"],
    price: 6000,
    offers: { bed: "4", shower: "4", occupants: "6-8" },
    image: "https://cdn.pixabay.com/photo/2017/06/12/21/03/infinity-pool-2396808_1280.jpg",
    discount: "50"
  },
  {
    id: 12,
    name: "Coastal Escape Villa",
    description: `Steps away from the golden sands of Noosa Beach, this airy villa offers modern style and relaxed coastal vibes. Perfect for families or couples seeking sun, sea, and serenity.

The Space  
BEDROOM & BATHROOM  
• Bedroom 1 – King bed, Ensuite bath  
• Bedroom 2 – Queen bed, Shared bath  
• Bedroom 3 – Twin beds  

FEATURES & AMENITIES  
• Private pool and terrace  
• Fully equipped kitchen  
• Pet-friendly, WiFi, and free parking  
• Outdoor shower and barbecue`,
    address: { state: "Noosa", city: "Queensland", country: "Australia" },
    rating: 4.83,
    category: ["Beachfront", "Pet Friendly", "Free Parking"],
    price: 3400,
    offers: { bed: "3", shower: "3", occupants: "4-6" },
    image: "https://cdn.pixabay.com/photo/2020/06/04/04/12/beach-5257079_1280.jpg",
    discount: ""
  },
  {
    id: 13,
    name: "Historical Villa",
    description: `Set among Tuscany’s rolling hills, this 17th-century villa blends rustic elegance with modern comfort. Enjoy vineyard views, Italian cuisine, and peaceful countryside charm.

The Space  
BEDROOM & BATHROOM  
• Bedroom 1 – King bed, Ensuite bath  
• Bedroom 2 – Queen bed  
• Bedroom 3 – Twin beds  

FEATURES & AMENITIES  
• Stone terrace with dining area  
• Traditional kitchen with pizza oven  
• Free breakfast, WiFi, and parking`,
    address: { state: "Florence", city: "Tuscany", country: "Italy" },
    rating: 4.67,
    category: ["Historical", "Free Breakfast", "Self Checkin"],
    price: 2700,
    offers: { bed: "2", shower: "2", occupants: "2-4" },
    image: "https://cdn.pixabay.com/photo/2020/04/23/03/21/italy-5080894_1280.jpg",
    discount: "35"
  },
  {
    id: 14,
    name: "Downtown Apartment",
    description: `Sleek, bright, and perfectly located in central Tokyo, this minimalist apartment places you steps away from top restaurants and nightlife. Watch the skyline come alive at night through panoramic windows.

The Space  
BEDROOM & BATHROOM  
• Bedroom – Queen bed, Ensuite bath  

FEATURES & AMENITIES  
• Open-concept living room  
• City views and balcony seating  
• Free WiFi and workspace  
• Public transport just outside`,
    address: { state: "Tokyo", city: "Tokyo", country: "Japan" },
    rating: 4.81,
    category: ["City Center", "Free WiFi", "Public Transport"],
    price: 2200,
    offers: { bed: "1", shower: "1", occupants: "2" },
    image: "https://cdn.pixabay.com/photo/2020/01/15/19/05/shibuyasky-4768679_1280.jpg",
    discount: ""
  },
  {
    id: 15,
    name: "Luxury Safari Lodge",
    description: `Set in the heart of Serengeti National Park, this luxury lodge offers guided safaris, elegant dining, and the thrill of wildlife views from your private terrace.

The Space  
BEDROOM & BATHROOM  
• Bedroom 1 – King canopy bed, Ensuite bath  
• Bedroom 2 – Queen bed, Ensuite bath  

FEATURES & AMENITIES  
• Guided tours and game drives  
• Outdoor dining deck overlooking plains  
• Free breakfast and WiFi  
• Fire pit and evening entertainment`,
    address: { state: "Serengeti", city: "Mara", country: "Tanzania" },
    rating: 4.97,
    category: ["Safari", "Guided Tours", "Free Breakfast"],
    price: 4500,
    offers: { bed: "4", shower: "4", occupants: "6-8" },
    image: "https://cdn.pixabay.com/photo/2022/08/10/10/04/safari-7376766_1280.jpg",
    discount: "20"
  },
  {
    id: 16,
    name: "Countryside Cottage",
    description: `This picture-perfect English cottage sits among the wildflowers of the Cotswolds. Curl up by the fireplace with tea or explore nearby villages and trails.

The Space  
BEDROOM & BATHROOM  
• Bedroom 1 – Queen bed  
• Bedroom 2 – Twin beds  

FEATURES & AMENITIES  
• Stone fireplace and cozy lounge  
• Traditional kitchen and garden patio  
• Free WiFi and parking`,
    address: { state: "Cotswolds", city: "Gloucestershire", country: "UK" },
    rating: 4.58,
    category: ["Countryside", "Fireplace", "Self Checkin"],
    price: 1800,
    offers: { bed: "2", shower: "1", occupants: "3-4" },
    image: "https://cdn.pixabay.com/photo/2017/06/17/10/55/cottage-2417323_1280.jpg",
    discount: ""
  },
  {
    id: 17,
    name: "Jungle Treehouse",
    description: `Live among the treetops in this eco-luxury treehouse in Costa Rica. Wake to the sounds of birds, swim in the natural pool, and unwind in total seclusion.

The Space  
BEDROOM & BATHROOM  
• Bedroom 1 – King bed, Ensuite bath  
• Bedroom 2 – Loft twin beds  

FEATURES & AMENITIES  
• Private plunge pool  
• Open-air kitchen and lounge  
• Solar power, WiFi, and eco amenities`,
    address: { state: "Puntarenas", city: "Osa", country: "Costa Rica" },
    rating: 4.90,
    category: ["Eco Stay", "Jungle", "Pool"],
    price: 3100,
    offers: { bed: "3", shower: "2", occupants: "4" },
    image: "https://cdn.pixabay.com/photo/2017/08/31/09/28/tree-house-2696919_1280.jpg",
    discount: "15"
  },
  {
    id: 18,
    name: "Icelandic Glass Cabin",
    description: `Experience the magic of the Northern Lights from your glass-roofed cabin. This modern hideaway offers comfort, warmth, and stunning views of Iceland’s rugged landscape.

The Space  
BEDROOM & BATHROOM  
• Bedroom – Queen bed, Ensuite bath  

FEATURES & AMENITIES  
• Glass roof for stargazing  
• Heated floors and kitchenette  
• Outdoor hot tub  
• WiFi and private parking`,
    address: { state: "Reykjavik", city: "Capital Region", country: "Iceland" },
    rating: 4.99,
    category: ["Northern Lights", "Hot Tub", "Self Checkin"],
    price: 4000,
    offers: { bed: "1", shower: "1", occupants: "2" },
    image: "https://cdn.pixabay.com/photo/2019/12/11/22/41/northern-lights-4689850_1280.jpg",
    discount: ""
  },
  {
    id: 19,
    name: "Beach Bungalow",
    description: `Bright, breezy, and steps from the shore — this Maldives bungalow lets you wake up to crystal-clear water views and gentle waves at your doorstep.

The Space  
BEDROOM & BATHROOM  
• Bedroom – King bed, Ensuite bath  

FEATURES & AMENITIES  
• Direct beach access  
• Private deck and hammocks  
• Mini fridge, WiFi, air conditioning`,
    address: { state: "Maafushi", city: "Kaafu Atoll", country: "Maldives" },
    rating: 4.85,
    category: ["Beachfront", "Private Deck", "WiFi"],
    price: 3700,
    offers: { bed: "1", shower: "1", occupants: "2" },
    image: "https://cdn.pixabay.com/photo/2016/03/09/15/10/maldives-1245110_1280.jpg",
    discount: ""
  },
  {
    id: 20,
    name: "Desert Dome Retreat",
    description: `Sleep beneath the stars in a modern desert dome in Joshua Tree. Designed for comfort and wonder, this off-grid retreat is perfect for romantic getaways or creative escapes.

The Space  
BEDROOM & BATHROOM  
• Bedroom – Queen bed  
• Bathroom – Outdoor shower and compost toilet  

FEATURES & AMENITIES  
• Stargazing dome with A/C and WiFi  
• Fire pit and BBQ  
• Off-grid solar power`,
    address: { state: "Joshua Tree", city: "California", country: "USA" },
    rating: 4.94,
    category: ["Desert View", "Eco Stay", "Off Grid"],
    price: 2100,
    offers: { bed: "1", shower: "1", occupants: "2" },
    image: "https://cdn.pixabay.com/photo/2021/02/28/10/33/geodesic-dome-6057449_1280.jpg",
    discount: ""
  }
];

