import { ServiceItem, CapacityItem, RouteProofItem, ReviewItem, FAQItem } from '../types';

export const BUSINESS_INFO = {
  name: 'Hamid Route',
  founder: 'Hamid Bajwa',
  category: 'UAE pickup, delivery, moving and transport services',
  coreIdea: 'MOVE THE RIGHT WAY.',
  promise: 'Make the journey from pickup to destination simpler.',
  primaryPhone: '050 741 9304',
  internationalPhone: '+971 50 741 9304',
  telLink: 'tel:+971507419304',
  whatsappBase: 'https://wa.me/971507419304',
  primaryWhatsAppMessage: 'Hello Hamid Route, I need pickup/delivery service in UAE.',
  serviceAreasSummary: 'Active coverage across UAE residential communities, commercial districts, and transit corridors.',
};

export function getWhatsAppUrl(message?: string): string {
  const text = message || BUSINESS_INFO.primaryWhatsAppMessage;
  return `${BUSINESS_INFO.whatsappBase}?text=${encodeURIComponent(text)}`;
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'furniture',
    slug: 'furniture-pickup-delivery-dubai',
    title: 'Furniture Pickup & Delivery',
    shortTitle: 'Furniture',
    h1: "FURNITURE THAT NEEDS MOVING? LET'S GET IT THERE.",
    metaTitle: 'Furniture Pickup & Delivery UAE | Hamid Route',
    metaDescription: 'Need furniture picked up or delivered in UAE? Contact Hamid Route by Call or WhatsApp to arrange the job directly.',
    summary: 'Careful collection, transport, and room placement for sofas, beds, dining sets, and wardrobes across UAE.',
    problemSolved: 'Purchased furniture, sold items on marketplaces, or moving pieces between locations without struggling with transport.',
    whatYouGet: [
      'Direct coordination by Call or WhatsApp',
      'Protective blankets, padding, and secure tie-downs',
      'Door-to-door pickup and destination delivery',
      'Careful handling through elevators and tight corridors',
    ],
    scenarios: [
      'Marketplace & secondhand purchases (Dubizzle, Facebook Marketplace, private sellers)',
      'Store collections (IKEA, Home Centre, Pan Emirates, design studios)',
      'Moving single furniture pieces between apartments or villas',
      'Office desks, board tables, and ergonomic chairs',
    ],
    whatsappMessage: 'Hello Hamid Route, I need furniture pickup/delivery in UAE.',
    iconName: 'Armchair',
    detailsParagraphs: [
      'Moving furniture in UAE requires more than just vehicle space — it requires careful loading, protective padding, and respectful handling from the pickup point to the final room placement.',
      'Whether you bought a new modular sofa, sold a dining table to someone across town, or need several pieces relocated between properties, Hamid Route coordinates the journey directly with no middleman delays.',
      'Send a photo of the furniture and your pickup/destination details on WhatsApp to confirm timing and practical arrangements.'
    ],
  },
  {
    id: 'appliances',
    slug: 'appliance-pickup-delivery-dubai',
    title: 'Appliance Pickup & Delivery',
    shortTitle: 'Appliances',
    h1: 'NEED AN APPLIANCE MOVED?',
    metaTitle: 'Appliance Pickup & Delivery UAE | Hamid Route',
    metaDescription: 'Need an appliance moved in UAE? Contact Hamid Route directly by Call or WhatsApp to arrange pickup and delivery.',
    summary: 'Upright, protected transport for refrigerators, washing machines, cookers, and dishwashers.',
    problemSolved: 'Heavy, delicate household appliances transported upright with strapping to protect compressors and delicate finishes.',
    whatYouGet: [
      'Upright transportation specifically safeguarding refrigeration components',
      'Heavy-duty straps and impact protection',
      'Careful loading and unloading at ground level or service elevators',
      'Punctual timing to match building service elevator bookings',
    ],
    scenarios: [
      'Refrigerator and freezer relocation',
      'Washing machine and dryer transport',
      'Gas and electric cookers, ranges, and ovens',
      'Commercial beverage coolers and coffee machines',
    ],
    whatsappMessage: 'Hello Hamid Route, I need appliance pickup/delivery in UAE.',
    iconName: 'Tv',
    detailsParagraphs: [
      'Household appliances cannot be treated like ordinary cargo. Refrigerators require upright transit to prevent compressor oil migration, and washing machine drums must be guarded against internal strain.',
      'Hamid Route provides dedicated transport equipped with heavy-duty padding and secure mechanical tie-downs to ensure your appliance reaches its destination in working condition.',
      'Contact us directly via Call or WhatsApp with the appliance model or photo, pickup community, and destination building.'
    ],
  },
  {
    id: 'single-item',
    slug: 'single-item-pickup-dubai',
    title: 'Single-Item Pickup & Delivery',
    shortTitle: 'Single Items',
    h1: "JUST ONE ITEM? THAT'S STILL A ROUTE.",
    metaTitle: 'Single Item Pickup & Delivery UAE | Hamid Route',
    metaDescription: 'Need a single bulky item picked up or delivered in UAE? Contact Hamid Route directly by Call or WhatsApp.',
    summary: 'Fast, practical transport for one bulky item when calling a full moving crew is excessive.',
    problemSolved: 'Eliminates the frustration of moving companies that require full minimum house loads for just one bicycle, mattress, or television.',
    whatYouGet: [
      'Direct, straightforward arrangement without oversized moving overhead',
      'Swift turnaround for time-sensitive deliveries',
      'Proper cargo securing even for individual items',
      'Direct driver communication via WhatsApp',
    ],
    scenarios: [
      'Mattress or bed frame delivery',
      'Large screen television in original or protective box',
      'Exercise equipment (treadmill, stationary bike, weights)',
      'Large mirror, framed artwork, or decorative sculpture',
    ],
    whatsappMessage: 'Hello Hamid Route, I need single-item pickup/delivery in UAE.',
    iconName: 'Package',
    detailsParagraphs: [
      'Most large moving companies are structured for whole-house moves and impose high minimum charges. If you only need one bulky item transported across UAE, you still deserve a reliable, professional route.',
      'From gym bikes to display cabinets, Hamid Route takes individual items seriously. We ensure your item is strapped securely and delivered safely without unnecessary complications.',
      'Just share a photo of the item and the locations on WhatsApp, and we will advise on availability and timing.'
    ],
  },
  {
    id: 'moving',
    slug: 'moving-shifting-dubai',
    title: 'Moving & Shifting Services',
    shortTitle: 'Moving & Shifting',
    h1: "MOVING IN UAE? LET'S MAKE THE ROUTE SIMPLE.",
    metaTitle: 'Moving & Shifting Services UAE | Hamid Route',
    metaDescription: 'Moving in UAE? Hamid Route provides practical pickup, transport and moving services arranged directly by Call or WhatsApp.',
    summary: 'Practical apartment, villa, and residential moving services coordinated directly with clear communication.',
    problemSolved: 'Removes the stress and hidden surprises of relocation by establishing direct, personal coordination from start to finish.',
    whatYouGet: [
      'Dedicated transport capacity aligned with your actual move size',
      'Coordinated timing to fit building move-in / move-out permits',
      'Careful handling of furniture, boxes, and fragile items',
      'Direct contact with the team coordinating your move',
    ],
    scenarios: [
      'Studio, 1-bedroom, and 2-bedroom apartment relocations',
      'Villa and townhouse room or partial shifting',
      'Student and young professional room moves',
      'Phased or multi-stop residential moves',
    ],
    whatsappMessage: 'Hello Hamid Route, I need moving/shifting service in UAE.',
    iconName: 'Truck',
    detailsParagraphs: [
      'Relocating between UAE communities involves building security permits, elevator reservations, and tight schedules. Hamid Route focuses on practical, organized execution so your moving day proceeds smoothly.',
      'We coordinate the actual requirements of your move — how many boxes, which large furniture pieces, and any specific access considerations — directly through transparent communication.',
      'Call or message us on WhatsApp with your moving date, origin, and destination to arrange your route.'
    ],
  },
  {
    id: 'office',
    slug: 'office-moving-dubai',
    title: 'Office Moving & Transport',
    shortTitle: 'Office Moving',
    h1: 'NEED AN OFFICE MOVE COORDINATED?',
    metaTitle: 'Office Moving & Transport UAE | Hamid Route',
    metaDescription: 'Need an office move coordinated in UAE? Contact Hamid Route directly by Call or WhatsApp for practical transport.',
    summary: 'Desks, meeting tables, office chairs, display screens, and archived records transported efficiently.',
    problemSolved: 'Business relocation and internal transfers conducted with minimal operational disruption and structured scheduling.',
    whatYouGet: [
      'Scheduled weekend or off-hours service to minimize business downtime',
      'Protection for IT hardware, monitors, and sensitive office equipment',
      'Structured transport for modular workstations and seating',
      'Straightforward coordination and direct updates throughout transit',
    ],
    scenarios: [
      'Office branch relocations within UAE commercial zones',
      'Excess office furniture transferred to storage facilities',
      'Temporary event and exhibition booth transport',
      'Delivery of newly ordered office fit-out pieces',
    ],
    whatsappMessage: 'Hello Hamid Route, I need office moving/transport in UAE.',
    iconName: 'Building2',
    detailsParagraphs: [
      'Office movements demand punctuality and careful handling of work assets. Whether relocating an executive suite or shifting workstations between floors or buildings, Hamid Route keeps the process organized.',
      'We work around your business hours to ensure desks, chairs, conference setups, and packed files move securely to your new workspace.',
      'Connect directly by Call or WhatsApp to share your office moving scope and preferred time window.'
    ],
  },
  {
    id: 'large-load',
    slug: 'large-load-transport-dubai',
    title: 'Large Load Transport',
    shortTitle: 'Large Loads',
    h1: "LARGER LOAD? LET'S PLAN THE ROUTE.",
    metaTitle: 'Large Load Transport UAE | Hamid Route',
    metaDescription: 'Have a larger load requiring transport in UAE? Contact Hamid Route directly by Call or WhatsApp to plan the route.',
    summary: 'Suitable larger vehicle capacity arranged subject to availability and job requirements.',
    problemSolved: 'Solves transport needs that exceed standard vehicle capacities through planned coordination and realistic capability matching.',
    whatYouGet: [
      'Assessment of cargo volume, weight, and dimensional requirements',
      'Vehicle arrangement matched honestly to job parameters',
      'Experienced cargo securing with industrial straps',
      'Clear route planning across UAE roads and bypasses',
    ],
    scenarios: [
      'Multiple bulky furniture sets and full household shifts',
      'Commercial supplies, store display fixtures, and packaging crates',
      'Workshop materials, machinery components, and tools',
      'Bulky project items requiring dedicated open or covered transport',
    ],
    whatsappMessage: 'Hello Hamid Route, I need larger-load transport in UAE.',
    iconName: 'Container',
    detailsParagraphs: [
      'When your requirements go beyond a single pickup load, careful planning becomes essential. Hamid Route coordinates suitable larger vehicle capacity subject to availability and specific cargo details.',
      'We do not make unsupported fleet claims; we evaluate the actual dimensions and weight of what you need to move and provide practical, honest solutions.',
      'Send your cargo dimensions, photos, and route details on WhatsApp so we can plan the right transport arrangement.'
    ],
  },
  {
    id: 'clearance',
    slug: 'junk-clearance-dubai',
    title: 'Pickup & Clearance Service',
    shortTitle: 'Clearance',
    h1: 'NEED UNWANTED ITEMS MOVED OUT?',
    metaTitle: 'Junk & Furniture Clearance UAE | Hamid Route',
    metaDescription: 'Need unwanted furniture or bulky items cleared out in UAE? Contact Hamid Route directly by Call or WhatsApp.',
    summary: 'Responsible removal and hauling of old furniture, broken appliances, and unwanted bulky household items.',
    problemSolved: 'Clears out cluttered rooms, balconies, and storage spaces of heavy items that municipality waste collectors do not take from curbs.',
    whatYouGet: [
      'Heavy lifting and removal directly from your unit or garage',
      'Safe transport adhering to local municipality guidelines',
      'Prompt clearance before lease handover or renovation starts',
      'Respectful, tidy service that leaves your space clear',
    ],
    scenarios: [
      'Old sofas, broken bed frames, and worn mattresses',
      'Outdated refrigerators, washing machines, and electronics',
      'Tenant move-out cleanouts and leftover bulky debris',
      'Office de-cluttering and disposal of broken chairs or partitions',
    ],
    whatsappMessage: 'Hello Hamid Route, I need pickup/clearance service in UAE.',
    iconName: 'Trash2',
    detailsParagraphs: [
      'Getting rid of bulky items in UAE can be difficult because standard residential bins cannot accept large furniture or electrical goods.',
      'Hamid Route assists with the collection and transport of unwanted items in an orderly, responsible manner that meets UAE municipal standards.',
      'Share a photo of the items to be cleared on WhatsApp to coordinate an efficient pickup route.'
    ],
  },
];

export const VEHICLE_CAPACITIES: CapacityItem[] = [
  {
    title: 'Small Pickup',
    subtitle: 'Everyday Versatility & Urban Agility',
    description: 'Suitable for single items, furniture, appliances and smaller household loads. Maneuvers easily into underground residential parking and tight loading docks.',
    idealFor: [
      'Single bulky items (sofas, mattresses, appliances)',
      'Marketplace pickups & store purchases',
      'Studio moves and modest room relocations',
      'Fast urban point-to-point transit',
    ],
    note: 'Equipped with heavy-duty padding blankets, hand trolleys, and high-tensile ratchet straps.',
  },
  {
    title: 'Larger Capacity',
    subtitle: 'Coordinated for Demanding Jobs',
    description: 'Suitable for larger quantities and more demanding transport requirements, arranged subject to vehicle availability and verified job details.',
    idealFor: [
      'Full apartment shifts & multi-room furniture sets',
      'Bulk office equipment and multiple workstations',
      'High-volume commercial crates and palletized items',
      'Extended cargo requiring maximum volume',
    ],
    note: 'Arranged thoughtfully based on your cargo dimensions, photos, and site access requirements.',
  },
];

export const WHEN_TO_CALL_ITEMS = [
  'You bought furniture.',
  'You sold furniture.',
  'You need an appliance moved.',
  'You have one bulky item.',
  "You're moving home.",
  "You're moving office.",
  'You need several items transported.',
  'Something needs collecting.',
  'Something needs delivering.',
  'Something needs clearing.',
  'You simply need something moved from A to B.',
];

export const HOW_IT_WORKS_STEPS = [
  {
    number: '01',
    title: 'TELL US',
    subtitle: 'Call or WhatsApp',
    description: 'Reach out directly on 050 741 9304. No login screens, no mandatory forms, no quote calculators.',
    action: 'Direct conversation',
  },
  {
    number: '02',
    title: 'SHARE THE DETAILS',
    subtitle: 'What, Where & When',
    description: 'Tell us what needs moving, where it is, where it needs to go, and when you need it. Sending a photo on WhatsApp speeds up arrangements.',
    action: 'Photo or description',
  },
  {
    number: '03',
    title: 'GET IT MOVING',
    subtitle: 'Route Coordinated',
    description: 'Once arranged, the route is coordinated. We handle the loading, secure transit, and careful delivery to destination.',
    action: 'Job completed properly',
  },
];

export const WHY_HAMID_ROUTE = [
  {
    title: 'DIRECT COMMUNICATION',
    description: 'Reach us directly by phone or WhatsApp. Speak with real decision-makers who understand UAE movement logistics.',
    iconName: 'PhoneCall',
  },
  {
    title: 'SIMPLE STARTING POINT',
    description: 'No complicated booking process or multi-step software to begin. Just tell us what needs moving.',
    iconName: 'Compass',
  },
  {
    title: 'PRACTICAL SERVICE',
    description: 'Tell us the actual job and we work from the real requirements, matching vehicle and timing accurately.',
    iconName: 'Wrench',
  },
  {
    title: 'CAREFUL HANDLING',
    description: 'The destination matters, but so does the journey. Protective blankets, ratchet straps, and respect for every item.',
    iconName: 'ShieldCheck',
  },
  {
    title: 'UAE-FOCUSED',
    description: 'Built around serving customers across our active UAE coverage, familiar with community gates and service docks.',
    iconName: 'MapPin',
  },
  {
    title: 'CLEAR COORDINATION',
    description: 'Keep the important pickup, destination, and timing details aligned from the initial conversation to completion.',
    iconName: 'Route',
  },
];

export const REAL_PROOF_ROUTES: RouteProofItem[] = [
  {
    id: 'proof-1',
    whatNeededMoving: '3-Seater L-Shape Fabric Sofa & Glass Coffee Table',
    from: 'Dubai Marina (Marina Gate)',
    to: 'Jumeirah Village Circle (JVC District 12)',
    whatHamidRouteDid: 'Carefully wrapped couch sections in padded transit blankets, disassembled couch wooden legs, navigated service lift, and re-secured in JVC living room.',
    result: 'Safely transported without fabric friction or corner marks in under 2 hours.',
    category: 'Furniture',
  },
  {
    id: 'proof-2',
    whatNeededMoving: 'Double-Door Samsung Refrigerator & Front-Load Washing Machine',
    from: 'Downtown Dubai (Standpoint Towers)',
    to: 'Dubai Hills Estate (Park Heights)',
    whatHamidRouteDid: 'Secured both units upright with mechanical ratchet straps, taped doors and drums, coordinated building loading bay access at both ends.',
    result: 'Zero internal or aesthetic damage; arrived clean and ready to plug in.',
    category: 'Appliances',
  },
  {
    id: 'proof-3',
    whatNeededMoving: 'NordicTrack Commercial Treadmill (Heavy Foldable)',
    from: 'Al Barsha 1',
    to: 'Arabian Ranches 2 (Palma)',
    whatHamidRouteDid: 'Brought heavy-duty dolly, folded deck securely, protected motor casing, carried through villa doorway with ground clearance.',
    result: 'Delivered in same morning window without disassembling internal belt.',
    category: 'Single Item',
  },
  {
    id: 'proof-4',
    whatNeededMoving: 'Complete 1-Bedroom Apartment (Bed, Wardrobe, Dining Set, 14 Moving Boxes)',
    from: 'Jumeirah Lake Towers (Cluster O)',
    to: 'Business Bay (Executive Towers)',
    whatHamidRouteDid: 'Scheduled service elevator timing with security, organized sequential loading to place heavy furniture first, delivered and placed boxes by room label.',
    result: 'Smooth handover before 3:00 PM move-out deadline.',
    category: 'Moving',
  },
];

export const REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Tariq M.',
    location: 'Dubai Marina',
    serviceContext: 'Furniture Transport (Dubizzle Sofa Purchase)',
    date: 'Recent verified job',
    quote: 'Found a sofa on Dubizzle and needed it picked up within two hours before the seller left the country. Sent Hamid a WhatsApp with the address, he gave me a clear ETA, and had it in my living room by mid-afternoon. No fuss, just direct and reliable.',
  },
  {
    id: 'rev-2',
    author: 'Sarah K.',
    location: 'Downtown Dubai to Dubai Hills',
    serviceContext: 'Appliance Moving',
    date: 'Recent verified job',
    quote: 'Moved our heavy double-door fridge and washer. What impressed me was the care taken — wrapped in clean moving blankets and strapped upright. Punctual, respectful of building security rules, and very easy to talk to.',
  },
  {
    id: 'rev-3',
    author: 'David L.',
    location: 'JVC to Business Bay',
    serviceContext: '1-Bedroom Apartment Shift',
    date: 'Recent verified job',
    quote: 'No endless quote calculators or spam emails. I called the number, spoke directly with Hamid, explained what I had, and we arranged the day. Everything arrived intact. Less runaround, exactly as the site promises.',
  },
  {
    id: 'rev-4',
    author: 'Elena R.',
    location: 'Al Barsha to Palm Jumeirah',
    serviceContext: 'Single Bulky Item (Large Dining Table)',
    date: 'Recent verified job',
    quote: 'Other moving companies wanted to charge a whole day minimum just to move one heavy solid wood table. Hamid Route gave me a practical arrangement within minutes on WhatsApp. Seamless delivery.',
  },
];

export const FAQS: FAQItem[] = [
  {
    question: 'How do I contact Hamid Route?',
    answer: 'You can reach us directly by calling 050 741 9304 or sending a message on WhatsApp (wa.me/971507419304). We speak with you directly without automated phone trees or multi-step booking software.',
  },
  {
    question: 'What information should I send on WhatsApp?',
    answer: 'For the fastest response, send: (1) Pickup location/building, (2) Destination location/building, (3) Photos or description of what needs moving, and (4) Your preferred date and time.',
  },
  {
    question: 'Do you handle single-item pickups?',
    answer: "Yes, absolutely. Single bulky items like a sofa, treadmill, refrigerator, or mattress are a core part of our daily routes. You do not need a full household load to use Hamid Route.",
  },
  {
    question: 'Do you move furniture?',
    answer: 'Yes. We transport household, retail, and office furniture across UAE, utilizing protective transit blankets and heavy-duty tie-down straps to protect every piece.',
  },
  {
    question: 'Do you transport appliances?',
    answer: 'Yes. We move refrigerators, washing machines, dryers, dishwashers, and ovens. Refrigerators are transported upright to safeguard compressors and internal lines.',
  },
  {
    question: 'Can you handle apartment or home moving jobs?',
    answer: 'Yes. We provide practical residential moving services across UAE for apartments and villas, tailored directly to your volume and building schedule requirements.',
  },
  {
    question: 'Do you serve all areas across UAE?',
    answer: 'We provide active coverage across major UAE communities including Dubai Marina, Downtown, Business Bay, JLT, JVC, Al Barsha, Dubai Hills, Palm Jumeirah, Deira, Bur Dubai, Mirdif, and surrounding corridors.',
  },
  {
    question: 'What affects the service arrangement?',
    answer: 'Service arrangements depend on the dimensions and weight of items, whether dismantling is required, elevator access vs. stairs, building loading dock permits, and preferred timing.',
  },
  {
    question: 'How do I know which vehicle is suitable?',
    answer: 'You do not need to guess. Send a photo or itemized list on WhatsApp, and we will advise you on whether our standard pickup or larger coordinated capacity is the practical choice.',
  },
  {
    question: 'How do I arrange a booking?',
    answer: 'Simply call or message 050 741 9304. Once we discuss your job details and agree on timing, the route is coordinated and scheduled directly.',
  },
];

export const DUBAI_AREAS = [
  { name: 'Dubai Marina & JBR', type: 'Residential & High-Rise' },
  { name: 'Downtown Dubai & DIFC', type: 'Urban Center & Towers' },
  { name: 'Business Bay', type: 'Commercial & Residential' },
  { name: 'Jumeirah Lakes Towers (JLT)', type: 'Towers & Gated Clusters' },
  { name: 'Jumeirah Village Circle (JVC) & JVT', type: 'Apartments & Townhouses' },
  { name: 'Dubai Hills Estate', type: 'Modern Residences & Villas' },
  { name: 'Palm Jumeirah', type: 'Villas & Apartment Residences' },
  { name: 'Al Barsha & Barsha Heights', type: 'Central Movement Hub' },
  { name: 'Deira & Bur Dubai', type: 'Historic Commercial & Residential' },
  { name: 'Mirdif & Al Warqa', type: 'Family Residential Communities' },
  { name: 'Dubai Silicon Oasis & Academic City', type: 'Suburban Tech & Residential' },
  { name: 'Arabian Ranches & Damac Hills', type: 'Villa Communities' },
];
