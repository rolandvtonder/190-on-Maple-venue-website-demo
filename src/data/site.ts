/**
 * All copy lives here, so wording can be changed without touching layout.
 *
 * Positioning: 190 on Maple is an event styling and hosting service. The
 * Kyalami home is a private residence and is never offered for hire; venue
 * hire is arranged at the client's own venue or a partner venue.
 */

export const site = {
  name: '190 on Maple',
  legalName: '190 on Maple Venue Hire',
  tagline: 'Event styling & hosting',
  url: 'https://190onmaple.co.za',
  phone: '062 820 1498',
  phoneIntl: '+27628201498',
  whatsapp: 'https://wa.me/27628201498',
  email: 'hello@190onmaple.co.za',
  instagram: 'https://www.instagram.com/190onmaple/',
  facebook: 'https://www.facebook.com/p/190-on-Maple-Venue-Hire-61573265846053/',
  area: 'Kyalami, Midrand',
  region: 'Gauteng',
  serves: ['Kyalami', 'Midrand', 'Fourways', 'Sandton', 'Centurion', 'Johannesburg', 'Gauteng'],
  residenceNote:
    'Our Kyalami home is a private residence. We don’t host paid events there or take venue bookings or deposits for it. Every event we style happens at your venue or one of our partner venues.',
};

export const nav = [
  {label: 'Home', href: '/'},
  {label: 'Events', href: '/events/'},
  {label: 'Gallery', href: '/gallery/'},
  {label: 'Packages', href: '/packages/'},
  {label: 'Venues', href: '/venues/'},
  {label: 'About', href: '/about/'},
  {label: 'FAQ', href: '/faq/'},
  {label: 'Contact', href: '/contact/'},
];

/** Headline lines; `s` lines are set in the brand script. */
export type Line = {t: string; s?: boolean};

export const hero = {
  lines: [{t: 'Your dream'}, {t: 'Event,', s: true}, {t: 'beautifully'}, {t: 'Curated.', s: true}] as Line[],
  body: 'Versatile, stylish and fully equipped event styling, tailored to you. Garden ceremonies, 21sts, baby showers and brand days, all with a full walk in, walk out service.',
  slides: ['ceremony-02.jpg', 'tablescapes-05.jpg', 'ceremony-03.jpg', 'lounge-03.jpg'],
};

export type Occasion = {
  id: string;
  name: [string, string];
  specs: [string, string][];
  photo: string;
  href: string;
};

export const occasions: Occasion[] = [
  {
    id: 'weddings',
    name: ['Weddings &', 'Receptions'],
    specs: [['Styled', 'Ceremony to reception'], ['Ideal for', 'Garden weddings & vow renewals']],
    photo: 'ceremony-06.jpg',
    href: '/events/weddings/',
  },
  {
    id: 'celebrations',
    name: ['Milestones &', 'Celebrations'],
    specs: [['Styled', '21sts, showers & kids’ parties'], ['Themes', 'Black & gold to pastel whimsy']],
    photo: 'birthdays-09.jpg',
    href: '/events/milestone-birthdays/',
  },
  {
    id: 'brand',
    name: ['Brands &', 'Workshops'],
    specs: [['Styled', 'Launches, seminars & high teas'], ['Setting', 'Lounge, cocktail or banquet']],
    photo: 'lounge-02.jpg',
    href: '/events/corporate-events/',
  },
];

export const pillars = [
  {title: 'Décor & styling', body: 'Backdrops, balloon installations, florals, draping, tableware and signage, designed around your theme.'},
  {title: 'Catering & grazing', body: 'Grazing tables, canapés, hot buffets and dessert spreads, served beautifully and kept topped up.'},
  {title: 'Furniture & tents', body: 'Crossback chairs, lounge sets, cocktail tables, marquees and gazebos for any guest count.'},
  {title: 'Setup to pack-down', body: 'We arrive early, build it all and stay to host. When the last guest leaves, we pack it all away.'},
];

export type EventType = {
  slug: string;
  name: string;
  lines: Line[];
  metaTitle: string;
  metaDescription: string;
  hero: string;
  intro: string;
  includes: string[];
  ideas: string[];
  cats: string[];
  photos: string[];
  quote?: number;
};

export const events: EventType[] = [
  {
    slug: 'weddings',
    name: 'Weddings & Receptions',
    lines: [{t: 'Weddings &'}, {t: 'Receptions', s: true}],
    metaTitle: 'Wedding Styling & Décor in Midrand',
    metaDescription:
      'Garden ceremony and reception styling in Midrand and Kyalami: draped arches, crossback chairs, florals, catering and a full walk in, walk out service.',
    hero: 'ceremony-01.jpg',
    intro:
      'From an intimate garden ceremony under the trees to a long-table reception that runs late into the evening, we style the whole day so you can simply be present in it. Draped arches, aisle florals, paper lanterns, tablescapes and catering, set up before you arrive and packed away after you leave.',
    includes: ['Ceremony arch, aisle runner and chair florals', 'Crossback or Tiffany seating and dressed banquet tables', 'Tablescapes with glassware, chargers, menus and candles', 'Grazing tables, canapés or a plated or buffet meal', 'Welcome drinks cart and bar station', 'On-the-day hosting, setup and pack-down'],
    ideas: ['Boho garden', 'Blush & gold', 'Earthy terracotta', 'Classic white', 'Lantern-lit evening'],
    cats: ['ceremony', 'tablescapes'],
    photos: ['ceremony-02.jpg', 'ceremony-03.jpg', 'tablescapes-05.jpg', 'tablescapes-15.jpg', 'ceremony-04.jpg', 'tablescapes-09.jpg', 'tablescapes-14.jpg', 'ceremony-05.jpg'],
  },
  {
    slug: 'kids-parties',
    name: 'Kids’ Parties',
    lines: [{t: 'Kids’'}, {t: 'Parties', s: true}],
    metaTitle: 'Kids’ Party Décor & Styling in Midrand',
    metaDescription:
      'Themed kids’ birthday parties in Midrand and Kyalami: pastel balloon arches, low tables with floor cushions, sweets carts, party favours and full setup.',
    hero: 'kids-13.jpg',
    intro:
      'Pick a favourite character or colour and we build the world around it: balloon arches, themed backdrops, low tables with floor cushions, sweets carts and party packs for every little guest. Parents get to enjoy the party too, because we handle the setup, the hosting and the tidy-up.',
    includes: ['Themed backdrop and balloon installation', 'Kids’ tables with floor cushions or mini chairs', 'Sweets cart, cupcakes and treat stations', 'Party favours and personalised signage', 'Snacks and a grown-ups’ grazing table', 'Setup, hosting and pack-down'],
    ideas: ['Pastel whimsy', 'Favourite characters', 'Rainbow brights', 'Princess & tea party', 'Superheroes'],
    cats: ['kids'],
    photos: ['kids-07.jpg', 'kids-05.jpg', 'kids-08.jpg', 'kids-01.jpg', 'kids-11.jpg', 'kids-10.jpg', 'kids-04.jpg', 'kids-12.jpg'],
  },
  {
    slug: 'milestone-birthdays',
    name: '21sts & Milestone Birthdays',
    lines: [{t: '21sts &'}, {t: 'Milestones', s: true}],
    metaTitle: '21st & Milestone Birthday Décor in Midrand',
    metaDescription:
      'Black and gold 21sts, 30ths, 40ths and milestone birthdays in Midrand and Gauteng: marquees, balloon backdrops, light-up numbers, banquet styling and catering.',
    hero: 'birthdays-15.jpg',
    intro:
      'Milestones deserve a proper entrance. We have dressed marquees in black and gold, built balloon backdrops with throne chairs and light-up numbers, and set banquet tables for big celebrations. Tell us the age, the colours and the guest list, and we’ll take it from there.',
    includes: ['Marquee or gazebo setup with draping and lanterns', 'Balloon backdrop, throne chair and light-up numbers', 'Banquet tables with chair covers, sashes and gold chargers', 'Personalised welcome boards and keepsake signage', 'Buffet catering with gold chafing dishes', 'Bar and drinks station'],
    ideas: ['Black & gold', 'All white', 'Champagne & blush', 'Vintage cheers', 'Neon night'],
    cats: ['birthdays'],
    photos: ['birthdays-09.jpg', 'birthdays-12.jpg', 'birthdays-05.jpg', 'birthdays-17.jpg', 'birthdays-16.jpg', 'birthdays-18.jpg', 'birthdays-23.jpg', 'birthdays-13.jpg'],
  },
  {
    slug: 'baby-showers',
    name: 'Baby Showers, Gender Reveals & Kitchen Teas',
    lines: [{t: 'Baby showers'}, {t: '& kitchen teas', s: true}],
    metaTitle: 'Baby Shower, Gender Reveal & Kitchen Tea Décor',
    metaDescription:
      'Baby showers, gender reveals and bridal kitchen teas in Midrand and Kyalami: teddy bear backdrops, neutral tablescapes, games, cakes and full setup.',
    hero: 'baby-03.jpg',
    intro:
      'Soft neutrals, teddy bears and balloon garlands, or a blue-and-pink smoke reveal on the lawn: we design showers and kitchen teas that feel warm, personal and calm. Game cards, name-suggestion boxes and a beautiful cake table are all part of the story.',
    includes: ['Themed backdrop with balloon garland and feature chair', 'Long tables with satin runners, florals and lanterns', 'Shower games, game cards and a name-suggestion box', 'Cake and dessert table styling', 'Smoke or confetti gender reveal moment', 'High tea, grazing or buffet catering'],
    ideas: ['We can bearly wait', 'Neutral boho', 'Oh baby! sage & cream', 'Bridal blush', 'Garden high tea'],
    cats: ['baby'],
    photos: ['baby-01.jpg', 'baby-18.jpg', 'baby-28.jpg', 'baby-25.jpg', 'baby-05.jpg', 'baby-26.jpg', 'baby-15.jpg', 'baby-24.jpg'],
  },
  {
    slug: 'high-teas',
    name: 'High Teas & Ladies’ Events',
    lines: [{t: 'High teas &'}, {t: 'Ladies’ days', s: true}],
    metaTitle: 'High Tea & Ladies’ Event Styling in Midrand',
    metaDescription:
      'Elegant high teas, ladies’ lunches and women’s gatherings in Midrand: blush tablescapes, tea stations, pastries, grazing and gracious hosting.',
    hero: 'tablescapes-11.jpg',
    intro:
      'Pretty tables, good tea and room to talk. Our high teas pair blush and floral tablescapes with tea and coffee stations, pastries and grazing boards, and hosting that makes every guest feel looked after, whatever the budget.',
    includes: ['Blush or floral tablescapes with gold-stemmed glassware', 'Tea, coffee and infused-water stations', 'Pastries, sandwiches and grazing boards', 'Lounge corners for conversation', 'Speaker or programme setup if needed', 'Hosting, setup and pack-down'],
    ideas: ['Blush & roses', 'English garden', 'Sage & gold', 'Moody florals'],
    cats: ['tablescapes', 'drinks', 'catering'],
    photos: ['tablescapes-07.jpg', 'tablescapes-12.jpg', 'drinks-02.jpg', 'catering-08.jpg', 'tablescapes-08.jpg', 'catering-03.jpg', 'tablescapes-04.jpg', 'drinks-03.jpg'],
    quote: 1,
  },
  {
    slug: 'corporate-events',
    name: 'Workshops, Seminars & Product Launches',
    lines: [{t: 'Workshops &'}, {t: 'Brand events', s: true}],
    metaTitle: 'Corporate Events, Workshops & Product Launches',
    metaDescription:
      'Workshops, seminars, product launches and brand events in Midrand and Gauteng: lounge and cocktail setups, catering, branding and full event hosting.',
    hero: 'lounge-03.jpg',
    intro:
      'For teams and brands that want a day people remember, we set up lounge seating, cocktail tables and long working tables in your space or at a partner venue. Then we add catering and drinks and look after your guests, so you can focus on your message.',
    includes: ['Lounge, cocktail or classroom-style layouts', 'Branded backdrops and welcome signage', 'Grazing, canapés or working lunches', 'Tea, coffee and drinks stations', 'Tents and marquees for outdoor launches', 'Coordination, setup and pack-down'],
    ideas: ['Garden lounge', 'Cocktail launch', 'Team lunch', 'Workshop day', 'Year-end function'],
    cats: ['lounge', 'catering', 'drinks'],
    photos: ['lounge-02.jpg', 'lounge-04.jpg', 'catering-05.jpg', 'lounge-08.jpg', 'catering-12.jpg', 'drinks-07.jpg', 'lounge-06.jpg', 'catering-10.jpg'],
  },
];

export const testimonials = [
  {
    quote:
      'I especially want to thank you for accommodating me so graciously despite my tight budget. Your kindness, generosity, patience, and willingness to work with me did not go unnoticed. You helped bring my vision to life in such a beautiful way.',
    who: 'Private celebration',
  },
  {
    quote:
      'Thank you so much for everything you did for my Single Mom’s High Tea. From the stunning décor to the warmth and love you showed, I truly appreciate every single effort you made to make the day special.',
    who: 'Single Mom’s High Tea',
  },
];

export const packages = [
  {
    name: 'Styled',
    script: 'by us',
    lede: 'You have the venue and the caterer; we make it beautiful.',
    items: ['Concept, colour palette and mood board', 'Backdrop and feature installation', 'Table styling, linen, glassware and centrepieces', 'Delivery, setup and pack-down'],
  },
  {
    name: 'Styled & catered',
    script: 'most loved',
    lede: 'Everything in Styled, plus the food and drink.',
    items: ['Everything in Styled', 'Grazing tables, canapés or buffet', 'Welcome drinks, bar or tea stations', 'Serving staff on the day', 'Furniture and lounge hire'],
    featured: true,
  },
  {
    name: 'Walk in, walk out',
    script: 'full service',
    lede: 'You arrive, celebrate and leave. We handle everything else.',
    items: ['Everything in Styled & catered', 'Venue sourcing at a partner venue', 'Tents, marquees and gazebos', 'Full on-the-day hosting and coordination', 'Supplier management (cake, entertainment, photography)'],
  },
];

export const addOns = ['Balloon arches & garlands', 'Custom backdrops & signage', 'Light-up marquee numbers', 'Lounge furniture', 'Marquees & gazebos', 'Sweets carts', 'Mimosa & mocktail carts', 'Gender reveal moments', 'Game cards & favours', 'Kids’ jumping castles'];

export const steps = [
  {title: 'Enquire', body: 'Send us your date, guest count and the feeling you’re after.'},
  {title: 'Design', body: 'We put together a concept, palette and a clear, itemised quote.'},
  {title: 'Confirm', body: 'Lock in your date. We take care of suppliers, hire and logistics.'},
  {title: 'Celebrate', body: 'Walk in to a finished room, then walk out when it’s over. We pack down.'},
];

export const faqs = [
  {q: 'Can we hire 190 Maple Road as a venue?', a: 'No. 190 Maple Road is our private home and is not available for hire. We don’t take venue bookings or deposits for it. We style and host events at your own venue or at one of our partner venues, and we’re happy to help you find the right one.'},
  {q: 'What does “walk in, walk out” mean?', a: 'It means you don’t lift a finger. We deliver, build and style everything before you arrive, look after the details on the day, and pack it all away once your guests have left.'},
  {q: 'Which areas do you cover?', a: 'We’re based in Kyalami, Midrand and work across Gauteng, including Midrand, Fourways, Sandton, Centurion and greater Johannesburg. Further afield? Ask us and we’ll do our best.'},
  {q: 'Can you work with my budget?', a: 'Yes. Tell us what you’d like to spend and we’ll suggest where it makes the most impact. Several of our clients have come to us with tight budgets, and we love making it work.'},
  {q: 'Do you provide catering?', a: 'Yes: grazing tables, canapés, hot buffets, desserts and drinks stations. You can also use your own caterer and book styling only.'},
  {q: 'Can you do a specific theme or character?', a: 'Absolutely. From Powerpuff Girls and teddy bears to black-and-gold 21sts and boho garden weddings, we design around your theme, colours and personal touches.'},
  {q: 'How far in advance should we book?', a: 'As early as you can, especially for weekends in spring and summer. Send us your date and we’ll confirm availability straight away.'},
  {q: 'Do you supply tents, chairs and tables?', a: 'Yes. Marquees, gazebos, crossback and Tiffany chairs, banquet and cocktail tables, lounge furniture, linen and tableware can all be included in your quote.'},
  {q: 'How do we get a quote?', a: 'Use the enquiry form, WhatsApp us or call 062 820 1498. Share your date, guest count, venue (or the area you’d like) and theme, and we’ll come back with ideas and a quote.'},
];

export const galleryCats: Record<string, string> = {
  ceremony: 'Ceremonies',
  tablescapes: 'Tablescapes',
  birthdays: 'Milestone birthdays',
  baby: 'Baby showers',
  kids: 'Kids’ parties',
  lounge: 'Lounges & tents',
  catering: 'Catering',
  drinks: 'Drinks & bars',
};
