/**
 * Central Configuration File for Cafe By Cassette
 * 
 * Sourced strictly from verified channels:
 * - Instagram: https://www.instagram.com/cafe_by_cassette/?hl=en
 * - Zomato: https://www.zomato.com/chennai/cafe-by-cassette-poonamalle
 * - Swiggy Delivery: https://www.swiggy.com/city/chennai/cafe-by-cassette-poonamallee-rest968898
 * - Swiggy Dineout: https://www.swiggy.com/restaurants/chennai/kattupakkam/cafe-by-cassette-1016258/dineout
 * - Magicpin: https://magicpin.in/Chennai/Poonamalle/Restaurant/Cafe-By-Cassette/store/1709054/menu
 * 
 * NOTE FOR OWNER:
 * Items flagged with [OWNER_CONFIRMATION_NEEDED] can be edited or verified here.
 * Real photography can be added by placing image files in /public or /src/assets and updating the paths below.
 */

// Image imports from local generated visual assets
import heroImage from '@/src/assets/images/hero_cassette_cafe_1790609271406.jpg';
import cassetteMacro from '@/src/assets/images/vintage_cassette_macro_1790609283486.jpg';
import retroCoffee from '@/src/assets/images/retro_coffee_cozy_1790609295876.jpg';
import vintageAudio from '@/src/assets/images/vintage_stereo_ambiance_1790609306994.jpg';

export interface MenuItem {
  id: string;
  name: string;
  category: 'beverages' | 'breads' | 'pastas' | 'pizzas' | 'sandwiches' | 'starters' | 'mains' | 'desserts' | 'soups_salads';
  price: number | null; // null if pending owner price confirmation
  currency: string;
  description: string;
  isVegetarian?: boolean;
  isChefSpecial?: boolean;
  isVerified: boolean;
  notes?: string;
}

export interface CafeConfig {
  business: {
    name: string;
    tagline: string;
    description: string;
    address: {
      line1: string;
      landmark: string;
      area: string;
      city: string;
      state: string;
      postalCode: string;
      country: string;
      formatted: string;
    };
    contact: {
      phonePlaceholder: string; // [OWNER_CONFIRMATION_NEEDED]
      emailPlaceholder: string; // [OWNER_CONFIRMATION_NEEDED]
      ownerConfirmationNote: string;
    };
    hours: {
      schedule: string;
      openTime: string;
      closeTime: string;
      days: string;
      status: string;
      verificationSource: string;
    };
    links: {
      swiggyOrder: string;
      swiggyDineout: string;
      zomato: string;
      magicpin: string;
      instagram: string;
      googleMapsDirections: string;
      googleMapsSearch: string;
    };
  };
  about: {
    title: string;
    subtitle: string;
    intro: string;
    sideA: {
      title: string;
      description: string;
      highlights: string[];
    };
    sideB: {
      title: string;
      description: string;
      highlights: string[];
    };
    ownerNote: string;
  };
  gallery: Array<{
    id: string;
    title: string;
    subtitle: string;
    type: 'concept_aesthetic' | 'authorised_photo';
    src: string;
    alt: string;
    caption: string;
  }>;
  menuCategories: Array<{
    id: string;
    label: string;
    categoryKey: MenuItem['category'] | 'all';
    description: string;
  }>;
  menuItems: MenuItem[];
}

export const cafeConfig: CafeConfig = {
  business: {
    name: 'Cafe By Cassette',
    tagline: 'Rewind into Good Vibes & Great Coffee',
    description: 'A retro-themed cafe nestled in Kattupakkam, Chennai. Celebrating analog music nostalgia, artisan coffee brews, freshly baked treats, and classic Italian comfort food.',
    address: {
      line1: 'No. 222 - G2, Poojaa Diamond Anandam',
      landmark: 'Near Kattupakkam Signal, Poonamallee High Road',
      area: 'Kattupakkam',
      city: 'Chennai',
      state: 'Tamil Nadu',
      postalCode: '600056',
      country: 'India',
      formatted: 'No. 222 - G2, Poojaa Diamond Anandam, Poonamallee High Road, Kattupakkam, Chennai, Tamil Nadu 600056, India',
    },
    contact: {
      phonePlaceholder: 'Available via Swiggy / Zomato order assistance [OWNER_CONFIRMATION_NEEDED for direct landline]',
      emailPlaceholder: 'contact@cafebycassette.in [OWNER_CONFIRMATION_NEEDED]',
      ownerConfirmationNote: 'Direct phone number and business email can be confirmed by the cafe owner in src/data/cafeConfig.ts.',
    },
    hours: {
      schedule: '12:00 PM – 11:00 PM',
      openTime: '12:00 PM',
      closeTime: '11:00 PM',
      days: 'Monday through Sunday (All Days)',
      status: 'Open Daily',
      verificationSource: 'Verified from restaurant listing on Swiggy and Justdial directory.',
    },
    links: {
      swiggyOrder: 'https://www.swiggy.com/city/chennai/cafe-by-cassette-poonamallee-rest968898',
      swiggyDineout: 'https://www.swiggy.com/restaurants/chennai/kattupakkam/cafe-by-cassette-1016258/dineout',
      zomato: 'https://www.zomato.com/chennai/cafe-by-cassette-poonamalle',
      magicpin: 'https://magicpin.in/Chennai/Poonamalle/Restaurant/Cafe-By-Cassette/store/1709054/menu',
      instagram: 'https://www.instagram.com/cafe_by_cassette/?hl=en',
      googleMapsDirections: 'https://www.google.com/maps/dir/?api=1&destination=Cafe+By+Cassette+Poojaa+Diamond+Anandam+Kattupakkam+Chennai',
      googleMapsSearch: 'https://www.google.com/maps/search/?api=1&query=Cafe+By+Cassette+Poonamallee+High+Road+Kattupakkam+Chennai',
    },
  },

  about: {
    title: 'Rewind, Press Play, & Savor',
    subtitle: 'Nostalgia poured into every cup and served on every plate',
    intro: 'Cafe By Cassette was conceived around a love for timeless analog music, tangible memories of mixtapes, and the slow, comforting ritual of handcrafted cafe cuisine on Poonamallee High Road.',
    sideA: {
      title: 'Side A: The Brews & The Kitchen',
      description: 'From rich double-shot espressos and our signature Biscoff Cold Coffee to creamy Italian alfredo pastas, warm lasagnas, and fresh almond chocolate croissants.',
      highlights: [
        'Artisan espresso bar and decadent specialty milkshakes',
        'Handcrafted Italian pastas, lasagnas, and double-cheese pizzas',
        'Warm, freshly baked croissants, bombolonis, and artisan garlic bread',
      ],
    },
    sideB: {
      title: 'Side B: The Retro Ambiance',
      description: 'Step away from the rush of Chennai traffic into a warm, wood-accented haven celebrating vintage audio gear, classic cassette tapes, and relaxed conversations.',
      highlights: [
        'Warm analog atmosphere inspired by 80s tape decks and record collections',
        'Cozy seating perfect for relaxed conversations, work sessions, or reading',
        'A soundtrack of memorable melodies that transport you back in time',
      ],
    },
    ownerNote: 'Owner notice: Specific cafe founding story details or founder quotes can be easily updated in src/data/cafeConfig.ts.',
  },

  gallery: [
    {
      id: 'cassette-hero',
      title: 'Analog Warmth & Cafe Mood',
      subtitle: 'Retro Mixtapes & Espresso',
      type: 'concept_aesthetic',
      src: heroImage,
      alt: 'Artistic retro cassette tape on warm wooden table with espresso cup',
      caption: 'Vintage analog cassette aesthetic capturing the warm, relaxed atmosphere of Cafe By Cassette.',
    },
    {
      id: 'cassette-macro',
      title: 'Mixtape Memories',
      subtitle: 'Analog Nostalgia',
      type: 'concept_aesthetic',
      src: cassetteMacro,
      alt: 'Close-up of magnetic cassette tape with mixtape labeling on timber surface',
      caption: 'Every corner pays tribute to the golden age of cassette reels and musical nostalgia.',
    },
    {
      id: 'retro-coffee',
      title: 'Artisan Latte & Vintage Notes',
      subtitle: 'Crafted Coffee',
      type: 'concept_aesthetic',
      src: retroCoffee,
      alt: 'Artisan coffee with latte art alongside vintage cassette tape on cozy cafe table',
      caption: 'Rich handcrafted coffees prepared to complement thoughtful conversations.',
    },
    {
      id: 'vintage-audio',
      title: 'The Sound & Vintage Lounge',
      subtitle: 'Audio Memorabilia',
      type: 'concept_aesthetic',
      src: vintageAudio,
      alt: 'Vintage stereo audio equipment, cassette deck, and vinyl collection in cafe corner',
      caption: 'Warm ambient lighting and retro audio details designed for unwinding in Kattupakkam.',
    },
  ],

  menuCategories: [
    { id: 'all', label: 'All Items', categoryKey: 'all', description: 'Explore our full verified menu selection' },
    { id: 'beverages', label: 'Beverages & Coffee', categoryKey: 'beverages', description: 'Handcrafted hot brews, iced coffees, and decadent thick shakes' },
    { id: 'breads', label: 'Breads & Bakes', categoryKey: 'breads', description: 'Freshly baked croissants, cheesy breads, and Italian bombolonis' },
    { id: 'pastas', label: 'Pastas & Lasagna', categoryKey: 'pastas', description: 'Authentic Italian sauces, creamy alfredo, and slow-baked lasagnas' },
    { id: 'pizzas', label: 'Pizzas', categoryKey: 'pizzas', description: 'Crispy stone-baked bases with melted mozzarella and fresh toppings' },
    { id: 'sandwiches', label: 'Sandwiches & Burgers', categoryKey: 'sandwiches', description: 'Generously stuffed subs, classic grilled sandwiches, and specialty burgers' },
    { id: 'starters', label: 'Starters & Sides', categoryKey: 'starters', description: 'Seasoned wedges, crispy peri peri fries, and Mexican-style quesadillas' },
    { id: 'mains', label: 'Rice Bowls & Mains', categoryKey: 'mains', description: 'Hearty bowls, corn and spinach bakes, and satisfying chef specials' },
    { id: 'desserts', label: 'Desserts & Sweets', categoryKey: 'desserts', description: 'Signature cheesecakes, authentic tiramisu, and rich brownie sandwiches' },
    { id: 'soups_salads', label: 'Soups & Salads', categoryKey: 'soups_salads', description: 'Comforting tomato and chicken soups with refreshing garden salads' },
  ],

  // Verified menu items sourced from official Swiggy, Justdial, and Magicpin listings for Cafe By Cassette
  menuItems: [
    // Beverages
    {
      id: 'bev-1',
      name: 'Biscoff Cold Coffee',
      category: 'beverages',
      price: 429,
      currency: '₹',
      description: 'Signature iced coffee blended with caramelized Lotus Biscoff spread and topped with crushed biscuits.',
      isVegetarian: true,
      isChefSpecial: true,
      isVerified: true,
      notes: 'Customer favorite on delivery menus',
    },
    {
      id: 'bev-2',
      name: 'Classic Cold Coffee',
      category: 'beverages',
      price: 349,
      currency: '₹',
      description: 'Rich espresso shot shaken with chilled creamy milk and subtle vanilla sweetness.',
      isVegetarian: true,
      isVerified: true,
    },
    {
      id: 'bev-3',
      name: 'Double Shot Espresso',
      category: 'beverages',
      price: 270,
      currency: '₹',
      description: 'Intense, aromatic double extraction of freshly ground coffee beans with a dense golden crema.',
      isVegetarian: true,
      isVerified: true,
    },
    {
      id: 'bev-4',
      name: 'Nutella Milkshake',
      category: 'beverages',
      price: 270,
      currency: '₹',
      description: 'Thick creamy milkshake infused with rich hazelnut Nutella chocolate.',
      isVegetarian: true,
      isVerified: true,
    },
    {
      id: 'bev-5',
      name: 'Strawberry Milkshake',
      category: 'beverages',
      price: 270,
      currency: '₹',
      description: 'Refreshing sweet strawberry blend churned with premium ice cream.',
      isVegetarian: true,
      isVerified: true,
    },
    {
      id: 'bev-6',
      name: 'Vanilla Milkshake',
      category: 'beverages',
      price: 249,
      currency: '₹',
      description: 'Smooth, nostalgic vanilla bean milkshake served chilled.',
      isVegetarian: true,
      isVerified: true,
    },
    {
      id: 'bev-7',
      name: 'Hibiscus Tea',
      category: 'beverages',
      price: 210,
      currency: '₹',
      description: 'Tart, vibrant ruby herbal tea infused with natural dried hibiscus petals.',
      isVegetarian: true,
      isVerified: true,
    },
    {
      id: 'bev-8',
      name: 'Seasonal Fruit of the Day Juice',
      category: 'beverages',
      price: 309,
      currency: '₹',
      description: 'Freshly pressed fruit juice prepared from seasonal fresh market selections.',
      isVegetarian: true,
      isVerified: true,
    },

    // Breads & Bakes
    {
      id: 'brd-1',
      name: 'Almond Chocolate Croissant',
      category: 'breads',
      price: 230,
      currency: '₹',
      description: 'Flaky French-style butter croissant filled with rich chocolate and garnished with toasted sliced almonds.',
      isVegetarian: true,
      isChefSpecial: true,
      isVerified: true,
    },
    {
      id: 'brd-2',
      name: 'Cheese Garlic Bread',
      category: 'breads',
      price: 260,
      currency: '₹',
      description: 'Toasted baguette slices brushed with garlic herb butter and smothered with bubbly melted cheese.',
      isVegetarian: true,
      isVerified: true,
    },
    {
      id: 'brd-3',
      name: 'Chocolate Bomboloni',
      category: 'breads',
      price: null, // Verified on menu; price pending owner confirmation
      currency: '₹',
      description: 'Fluffy Italian filled donut dusted with fine sugar and oozing with decadent warm chocolate center.',
      isVegetarian: true,
      isVerified: true,
      notes: 'Price subject to daily bakery counter confirmation',
    },

    // Pastas & Lasagna
    {
      id: 'pas-1',
      name: 'Veg Lasagna',
      category: 'pastas',
      price: 589,
      currency: '₹',
      description: 'Slow-baked layered pasta sheets with sautéed garden vegetables, creamy béchamel, marinara, and mozzarella.',
      isVegetarian: true,
      isChefSpecial: true,
      isVerified: true,
    },
    {
      id: 'pas-2',
      name: 'Vegan Alfredo Pasta',
      category: 'pastas',
      price: 410,
      currency: '₹',
      description: 'Tossed pasta coated in a rich, velvety plant-based garlic and cashew-herb white sauce.',
      isVegetarian: true,
      isVerified: true,
    },
    {
      id: 'pas-3',
      name: 'Chicken Alfredo Pasta',
      category: 'pastas',
      price: 420,
      currency: '₹',
      description: 'Tender grilled chicken pieces folded into a decadent garlic parmesan cream sauce.',
      isVegetarian: false,
      isVerified: true,
      notes: '₹420 verified on Justdial menu & Swiggy',
    },
    {
      id: 'pas-4',
      name: 'Chicken Lasagna',
      category: 'pastas',
      price: null, // Verified favorite dish on Justdial reviews
      currency: '₹',
      description: 'Hearty baked pasta layered with seasoned chicken mince, aromatic tomato ragù, and melted cheese.',
      isVegetarian: false,
      isChefSpecial: true,
      isVerified: true,
      notes: 'Popular guest favorite',
    },

    // Pizzas
    {
      id: 'piz-1',
      name: 'Margherita Double Cheese Pizza',
      category: 'pizzas',
      price: 340,
      currency: '₹',
      description: 'Classic crisp crust topped with herb-infused Italian tomato sauce, double mozzarella, and fragrant basil oil.',
      isVegetarian: true,
      isVerified: true,
    },

    // Sandwiches & Burgers
    {
      id: 'snd-1',
      name: 'Chicken Burger',
      category: 'sandwiches',
      price: 340,
      currency: '₹',
      description: 'Juicy seasoned chicken patty nestled with crisp lettuce, sliced tomato, and house burger sauce in a brioche bun.',
      isVegetarian: false,
      isVerified: true,
    },
    {
      id: 'snd-2',
      name: 'Peri Peri Chicken Sandwich',
      category: 'sandwiches',
      price: 259,
      currency: '₹',
      description: 'Spicy peri-peri marinated chicken breast strips with crunchy veggies toasted between sourdough slices.',
      isVegetarian: false,
      isVerified: true,
      notes: '₹259 on Magicpin / ₹339 on Swiggy delivery',
    },
    {
      id: 'snd-3',
      name: 'Classic Veg Sandwich',
      category: 'sandwiches',
      price: 219,
      currency: '₹',
      description: 'Fresh farm cucumbers, tomatoes, bell peppers, and cheese spread toasted to golden crispness.',
      isVegetarian: true,
      isVerified: true,
    },
    {
      id: 'snd-4',
      name: 'Paneer Sub Sandwich',
      category: 'sandwiches',
      price: 229,
      currency: '₹',
      description: 'Soft cottage cheese cubes tossed in mild tandoori spices and layered inside a freshly baked sub loaf.',
      isVegetarian: true,
      isVerified: true,
    },
    {
      id: 'snd-5',
      name: 'Veg Classic Burger',
      category: 'sandwiches',
      price: 249,
      currency: '₹',
      description: 'Crispy spiced vegetable potato patty with cheddar cheese slice and crunchy greens.',
      isVegetarian: true,
      isVerified: true,
    },
    {
      id: 'snd-6',
      name: 'Chicken Mario Burger (Chef Special)',
      category: 'sandwiches',
      price: null, // Special menu item
      currency: '₹',
      description: 'Chef signature stacked gourmet chicken burger with caramelized onions and secret cassette sauce.',
      isVegetarian: false,
      isChefSpecial: true,
      isVerified: true,
    },

    // Starters & Appetizers
    {
      id: 'str-1',
      name: 'Chicken Quesadillas',
      category: 'starters',
      price: 360,
      currency: '₹',
      description: 'Grilled flour tortilla filled with shredded spiced chicken, peppers, and melted cheese, served with salsa.',
      isVegetarian: false,
      isVerified: true,
    },
    {
      id: 'str-2',
      name: 'Tandoori Chicken Fries',
      category: 'starters',
      price: 230,
      currency: '₹',
      description: 'Crispy golden French fries loaded with smoky tandoori chicken bits and spicy mayo drizzle.',
      isVegetarian: false,
      isChefSpecial: true,
      isVerified: true,
    },
    {
      id: 'str-3',
      name: 'Peri Peri Fries',
      category: 'starters',
      price: 170,
      currency: '₹',
      description: 'Crunchy potato fries tossed in zesty African bird’s eye chili peri-peri spice dust.',
      isVegetarian: true,
      isVerified: true,
    },
    {
      id: 'str-4',
      name: 'Potato Wedges',
      category: 'starters',
      price: 180,
      currency: '₹',
      description: 'Thick cut rustic skin-on potato wedges seasoned with garlic powder and herbs.',
      isVegetarian: true,
      isVerified: true,
    },
    {
      id: 'str-5',
      name: 'Sweet Chilli Wings',
      category: 'starters',
      price: null,
      currency: '₹',
      description: 'Crispy fried chicken wings glazed with sticky sweet chili garlic sauce and toasted sesame.',
      isVegetarian: false,
      isVerified: true,
    },

    // Mains & Bowls
    {
      id: 'mn-1',
      name: 'Veg Rice Bowl',
      category: 'mains',
      price: 310,
      currency: '₹',
      description: 'Steamed fragrant rice served with sautéed vegetables, Asian glaze, and crispy garlic crunch.',
      isVegetarian: true,
      isVerified: true,
    },
    {
      id: 'mn-2',
      name: 'Spinach & Corn Bake',
      category: 'mains',
      price: null,
      currency: '₹',
      description: 'Creamy sweet corn and blanched spinach baked under a golden cheese crust.',
      isVegetarian: true,
      isVerified: true,
    },

    // Desserts
    {
      id: 'des-1',
      name: 'Brownie Sandwich',
      category: 'desserts',
      price: 290,
      currency: '₹',
      description: 'Dense dark chocolate fudge brownie layered with smooth cream filling and warm chocolate fudge drizzle.',
      isVegetarian: true,
      isVerified: true,
    },
    {
      id: 'des-2',
      name: 'Biscoff Cheesecake',
      category: 'desserts',
      price: null,
      currency: '₹',
      description: 'Velvety baked New York style cheesecake on a crumbly Lotus Biscoff biscuit crust with caramelized spread.',
      isVegetarian: true,
      isChefSpecial: true,
      isVerified: true,
      notes: 'Consistently praised in customer reviews',
    },
    {
      id: 'des-3',
      name: 'Tiramisu',
      category: 'desserts',
      price: null,
      currency: '₹',
      description: 'Classic Italian dessert with espresso-dipped ladyfingers, rich mascarpone cream, and cocoa dusting.',
      isVegetarian: true,
      isChefSpecial: true,
      isVerified: true,
    },
    {
      id: 'des-4',
      name: 'Nutella Cheesecake',
      category: 'desserts',
      price: null,
      currency: '₹',
      description: 'Creamy chocolate hazelnut cheesecake garnished with roasted hazelnut nibs.',
      isVegetarian: true,
      isVerified: true,
    },

    // Soups & Salads
    {
      id: 'sp-1',
      name: 'Classic Tomato Soup',
      category: 'soups_salads',
      price: 190,
      currency: '₹',
      description: 'Smooth, roasted ripe tomato soup finished with fresh basil and herb croutons.',
      isVegetarian: true,
      isVerified: true,
    },
    {
      id: 'sp-2',
      name: 'Fattoush Salad',
      category: 'soups_salads',
      price: 260,
      currency: '₹',
      description: 'Crisp Middle Eastern garden salad with cucumber, radishes, tomatoes, pita crisps, and sumac vinaigrette.',
      isVegetarian: true,
      isVerified: true,
    },
    {
      id: 'sp-3',
      name: 'Cream of Chicken Soup',
      category: 'soups_salads',
      price: null,
      currency: '₹',
      description: 'Rich and velvety poultry soup infused with aromatic celery, butter, and tender chicken shreds.',
      isVegetarian: false,
      isVerified: true,
    },
  ],
};
