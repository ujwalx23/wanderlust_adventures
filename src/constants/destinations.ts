
export interface Destination {
  id: string;
  name: string;
  location: string;
  description: string;
  image: string;
  price: string;
  rating: number;
  category: string;
}

export const destinations: Destination[] = [
  {
    id: "1",
    name: "Taj Mahal",
    location: "Agra, Uttar Pradesh",
    description: "Explore the iconic symbol of eternal love, a UNESCO World Heritage site and one of the Seven Wonders of the World.",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGFqJTIwbWFoYWx8ZW58MHx8MHx8fDA%3D",
    price: "₹1,500",
    rating: 4.8,
    category: "Historical"
  },
  {
    id: "2",
    name: "Varanasi Ghats",
    location: "Varanasi, Uttar Pradesh",
    description: "Experience spiritual awakening at the ancient ghats along the sacred Ganges River with traditional evening ceremonies.",
    image: "https://images.unsplash.com/photo-1561361058-c24cecae35ca?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dmFyYW5hc2l8ZW58MHx8MHx8fDA%3D",
    price: "₹1,200",
    rating: 4.7,
    category: "Spiritual"
  },
  {
    id: "3",
    name: "Jaipur City Tour",
    location: "Jaipur, Rajasthan",
    description: "Discover the Pink City's majestic palaces, vibrant bazaars, and rich cultural heritage in the heart of Rajasthan.",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGphaXB1cnxlbnwwfHwwfHx8MA%3D%3D",
    price: "₹1,800",
    rating: 4.6,
    category: "Cultural"
  },
  {
    id: "4",
    name: "Goa Beach Retreat",
    location: "Goa",
    description: "Unwind at pristine beaches, enjoy water sports, and experience vibrant nightlife in India's favorite coastal paradise.",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z29hJTIwYmVhY2h8ZW58MHx8MHx8fDA%3D",
    price: "₹2,500",
    rating: 4.5,
    category: "Beach"
  },
  {
    id: "5",
    name: "Kerala Backwaters",
    location: "Alleppey, Kerala",
    description: "Cruise through serene backwaters on traditional houseboats amidst coconut groves and paddy fields in God's own country.",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8a2VyYWxhJTIwYmFja3dhdGVyc3xlbnwwfHwwfHx8MA%3D%3D",
    price: "₹3,200",
    rating: 4.9,
    category: "Nature"
  },
  {
    id: "6",
    name: "Darjeeling Tea Gardens",
    location: "Darjeeling, West Bengal",
    description: "Enjoy breathtaking Himalayan views, ride the historic toy train, and taste world-famous tea at picturesque plantations.",
    image: "https://images.unsplash.com/photo-1544233726-9f1d2b27be8b?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFyamVlbGluZ3xlbnwwfHwwfHx8MA%3D%3D",
    price: "₹2,200",
    rating: 4.6,
    category: "Mountain"
  }
];

export const categories = [
  "All", 
  "Beach", 
  "Mountain", 
  "Cultural", 
  "Historical", 
  "Spiritual", 
  "Adventure", 
  "Nature"
];

export const faqs = [
  {
    question: "What is the best time to visit India?",
    answer: "The best time to visit India is during the winter months, from October to March, when the weather is pleasant across most parts of the country. However, specific regions like hill stations are best visited during summer (April-June), and the Northeastern states are beautiful during monsoon (June-September)."
  },
  {
    question: "Do I need a visa to visit India?",
    answer: "Yes, most foreign nationals require a visa to enter India. India offers e-Visa facilities for tourism, business, and medical purposes for citizens of over 160 countries. It's recommended to apply at least 4-7 days before your planned travel date."
  },
  {
    question: "What languages are spoken in India?",
    answer: "India has 22 officially recognized languages. Hindi is the most widely spoken and, along with English, is used for official purposes. Each state typically has its own official language, but you'll find English speakers in most tourist areas, hotels, and restaurants."
  },
  {
    question: "Is Indian food always spicy?",
    answer: "Not all Indian food is spicy. India offers a diverse cuisine that varies by region, with many mild dishes available. When ordering at restaurants, you can always request your food to be prepared with less spice according to your preference."
  },
  {
    question: "What should I pack for my trip to India?",
    answer: "Pack light, comfortable cotton clothing, modest attire for visiting religious sites (covering shoulders and knees), a good pair of walking shoes, sunscreen, hat, insect repellent, and any necessary medications. A lightweight scarf is useful for women to cover their heads at religious sites."
  },
  {
    question: "Is it safe to drink tap water in India?",
    answer: "It's not recommended to drink tap water in India. Stick to bottled water with sealed caps, and avoid ice in drinks unless you're sure it's made from purified water. Most reputable hotels and restaurants use filtered water for ice."
  },
  {
    question: "What is the currency of India and can I use credit cards?",
    answer: "The Indian Rupee (₹) is the official currency. Credit cards are widely accepted in urban areas and tourist destinations, but it's advisable to carry some cash for smaller establishments and rural areas. ATMs are readily available in cities and towns."
  }
];

export const testimonials = [
  {
    id: "1",
    name: "Priya Sharma",
    location: "Mumbai",
    text: "Wanderlust Adventures planned our family trip to Rajasthan perfectly! Every detail was taken care of, from comfortable accommodations to knowledgeable local guides. The cultural experiences were authentic and memorable.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: "2",
    name: "Arjun Patel",
    location: "Bangalore",
    text: "My solo backpacking trip across Northeast India was brilliantly organized. The team was responsive to my needs and the itinerary offered the perfect balance of adventure and relaxation.",
    rating: 4,
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: "3",
    name: "Meera and Rahul Khanna",
    location: "Delhi",
    text: "Our honeymoon in Kerala was magical! The houseboat stay and ayurvedic spa experiences recommended by Wanderlust were highlights of our trip. We've already booked our next adventure with them!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/63.jpg"
  }
];
