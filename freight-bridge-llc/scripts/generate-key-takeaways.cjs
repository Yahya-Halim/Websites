const fs = require('fs');
const path = require('path');

const locations = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'src', 'data', 'locations.json'), 'utf-8'));

const citySpecific = {
  'iowa-city-ia': 'As our home city, Iowa City is where we built our reputation \u2014 same-day quotes, hands-on service, and a crew that treats every move like it\u2019s our own neighborhood. Our team knows the University of Iowa campus, the downtown corridors, and the residential streets better than any out-of-town mover.',
  'coralville-ia': 'Coralville is right next door to our Iowa City base, which means faster response times, lower travel fees, and a crew that knows the Coralville Ridge and commerce park layouts like the back of our hands.',
  'north-liberty-ia': 'North Liberty is one of Iowa\u2019s fastest-growing communities, and our team stays busy here with both residential moves into new developments and commercial relocations for expanding businesses \u2014 always hands-on and owner-operated.',
  'cedar-rapids-ia': 'Cedar Rapids is Iowa\u2019s second-largest city and a key part of our home market on the I-380 corridor. We handle local moves, business relocations, and freight out of the CR metro every week \u2014 we know the Collins Road and Edgewood Road routes inside out.',
  'des-moines-ia': 'Des Moines is Iowa\u2019s capital and largest metro. We run the I-80 corridor regularly, handling household moves, office relocations, and freight loads to and from the DSM area with the same consistent crew.',
  'davenport-ia': 'Davenport anchors the Quad Cities at the I-80/I-74 junction. We\u2019re there regularly for moves and freight along the Mississippi River corridor, serving both Iowa and Illinois sides of the metro.',
  'chicago-il': 'Chicago is the nation\u2019s freight and transportation capital. We handle residential moves, commercial relocations, and freight loads through the city and surrounding suburbs with direct I-80/I-55 access \u2014 no small operation can match our coverage in the Chicagoland market.',
  'detroit-mi': 'Detroit is the automotive freight capital of the U.S. We move households, relocate businesses, and haul freight through the I-75/I-94 corridor connecting Michigan\u2019s manufacturing base to the national market, with deep knowledge of the metro area\u2019s logistics routes.',
  'minneapolis-mn': 'Minneapolis anchors the Upper Midwest freight corridor. We handle everything from downtown apartment moves to business relocations and freight loads along the I-94/I-35W corridors \u2014 serving both Minneapolis and Saint Paul across the metro.',
  'atlanta-ga': 'Atlanta is the logistics capital of the Southeast with I-75, I-85, and I-20 converging. We serve the metro for residential, commercial, and freight needs across all of Georgia and beyond \u2014 our interstate authority covers every state this hub connects to.',
  'denver-co': 'Denver serves as the Rocky Mountain region\u2019s primary freight and logistics hub at I-25 and I-70. We haul freight, move families, and relocate businesses throughout the Front Range and the surrounding mountain communities.',
  'phoenix-az': 'Phoenix anchors the Southwest freight corridor on I-10 in the Sonoran Desert. We serve the Valley of the Sun with reliable interstate freight hauling connecting Arizona to California, Texas, and everything in between.',
  'los-angeles-ca': 'Los Angeles is the largest port market in the Western U.S. We manage freight and moving through the LA basin with direct I-5 and I-10 connections \u2014 handling loads from the ports to inland distribution centers across the country.',
  'seattle-wa': 'Seattle anchors the Pacific Northwest on I-5. We serve the Puget Sound region with freight hauling and moving services connecting Washington\u2019s ports and tech hubs to national trade routes.',
  'portland-or': 'Portland serves as the Pacific Northwest\u2019s major freight port city on I-5. We handle loads and moves through the Columbia River corridor to the West Coast and beyond \u2014 connecting Oregon to the national freight network.',
  'boston-ma': 'Boston anchors New England\u2019s freight network at the northern end of I-95. We serve Massachusetts and the northeast with reliable interstate freight service through one of the country\u2019s densest regional markets.',
  'san-francisco-ca': 'San Francisco is the gateway to the Bay Area on I-80 and I-101. We serve the city and surrounding region with interstate freight hauling through Northern California \u2014 connecting Silicon Valley and the Bay to the rest of the country.',
  'las-vegas-nv': 'Las Vegas is the entertainment and logistics capital of the Southwest on I-15. We serve the valley with interstate freight hauling connecting Southern California to the Intermountain West and the major distribution centers east.',
  'houston-tx': 'Houston is the energy and logistics capital of the Gulf Coast. We provide interstate freight hauling through the I-10 corridor connecting Texas to the national market, with coverage from the Port of Houston to inland destinations.',
  'honolulu-hi': 'Honolulu serves as the central hub for inter-island and mainland moving logistics. We handle household and commercial moves across the Hawaiian Islands and between Hawaii and the mainland with the same hands-on care.',
  'new-orleans-la': 'New Orleans is a major Gulf Coast freight gateway at the mouth of the Mississippi River. We provide interstate freight hauling connecting Louisiana to the national market via the I-10/I-12 corridor.',
  'nashville-tn': 'Nashville anchors Tennessee\u2019s freight corridor at I-24 and I-40. We serve Music City with interstate freight hauling connecting the Southeast and Midwest through one of America\u2019s fastest-growing logistics markets.',
  'charlotte-nc': 'Charlotte is the banking and logistics capital of the Carolinas on I-77 and I-85. We provide interstate freight hauling through the Southeast and Mid-Atlantic, serving one of the region\u2019s most dynamic distribution hubs.',
  'saint-louis-mo': 'Saint Louis anchors the Midwest freight corridor at the confluence of I-55, I-64, and I-70. We serve the Gateway City with interstate freight and moving services through one of America\u2019s most strategically located logistics markets.',
  'kansas-city-mo': 'Kansas City is one of America\u2019s top freight hubs with the second-largest rail network in the country. We provide freight hauling and moving services through the KC metro with central interstate access via I-35 and I-70.',
  'indianapolis-in': 'Indianapolis is the Crossroads of America with more interstate highways converging than any other U.S. city outside Chicago. We serve the Indy metro with residential, commercial, and freight services across the I-65/I-69/I-70 network.',
  'omaha-ne': 'Omaha anchors Nebraska\u2019s freight corridor along I-80. We serve the Omaha-Council Bluffs metro with moving and freight services, connecting the central plains to Chicago and the Rocky Mountain region.',
  'wichita-ks': 'Wichita is Kansas\u2019s largest city and an essential link in the I-35 corridor. We provide freight hauling and moving services through the Air Capital of the World, connecting the central plains to major national markets.',
  'jacksonville-fl': 'Jacksonville is the largest city by area in the contiguous U.S. and a critical freight hub at the intersection of I-10 and I-95. We serve Florida\u2019s First Coast with reliable interstate freight hauling through the Southeast.',
  'miami-fl': 'Miami is the gateway to Latin America and the Caribbean at the southern terminus of I-95. We serve the Miami metro with interstate freight hauling connecting South Florida to the entire U.S. market.',
  'tampa-fl': 'Tampa anchors Florida\u2019s Gulf Coast at the junction of I-4 and I-275. We provide interstate freight hauling through the Tampa Bay area, connecting the Gulf to the Atlantic via the I-4 corridor.',
  'orlando-fl': 'Orlando sits at the heart of Florida\u2019s I-4 corridor between Tampa and Daytona. We serve the Orlando metro with interstate freight hauling and moving services across Central Florida and beyond.',
  'baltimore-md': 'Baltimore provides strategic Mid-Atlantic freight access with direct I-95 connections to Washington D.C., Philadelphia, and New York. We serve the Baltimore metro with reliable interstate freight service through the Northeast corridor.',
  'louisville-ky': 'Louisville anchors Kentucky\u2019s freight network at the crossroads of I-64, I-65, and I-71 along the Ohio River. We serve the Derby City with interstate freight hauling through one of the nation\u2019s top logistics hubs.',
  'columbus-oh': 'Columbus sits within 600 miles of over 60% of the U.S. population. We serve Ohio\u2019s capital with interstate freight and moving services from one of the most strategically located freight markets in America.',
  'salt-lake-city-ut': 'Salt Lake City is the Intermountain West\u2019s primary freight hub on I-15 and I-80. We serve the Wasatch Front with interstate freight hauling connecting the Rockies to the Pacific Coast and the Great Plains.',
  'san-diego-ca': 'San Diego anchors Southern California\u2019s border region on I-5 and I-8. We serve America\u2019s Finest City with interstate freight hauling connecting the San Diego market to the national highway network.',
  'sacramento-ca': 'Sacramento serves as California\u2019s capital and a key Central Valley freight hub at I-5 and I-80. We provide interstate freight hauling through the Sacramento region, connecting Northern California to the rest of the country.',
  'albuquerque-nm': 'Albuquerque serves as New Mexico\u2019s primary freight hub at the crossroads of I-25 and I-40. We provide interstate freight hauling through the Duke City, connecting the Southwest\u2019s major east-west and north-south trade routes.',
  'oklahoma-city-ok': 'Oklahoma City anchors the Sooner State\u2019s freight corridor at I-35, I-40, and I-44. We provide interstate freight hauling through the OKC metro, connecting the central U.S. to all four directions.',
  'memphis-tn': 'Memphis is home to the world\u2019s busiest cargo airport and sits at the I-40/I-55 crossroads. We provide interstate freight hauling through the Bluff City, connecting the Mid-South to the national logistics network.',
  'el-paso-tx': 'El Paso sits at the intersection of I-10 and the U.S.-Mexico border. We provide interstate freight hauling through the Borderland, connecting West Texas to the national market via the southern transcontinental corridor.',
  'virginia-beach-va': 'Virginia Beach anchors the Hampton Roads region with I-64 and I-95 providing direct access to the Mid-Atlantic and Southeast. We serve Coastal Virginia with interstate freight hauling to the entire Eastern Seaboard.',
  'charleston-sc': 'Charleston is a major East Coast port city on I-26. We provide interstate freight hauling through the Holy City, connecting South Carolina\u2019s port and manufacturing to the Southeast and Mid-Atlantic markets.',
  'milwaukee-wi': 'Milwaukee anchors Wisconsin\u2019s freight corridor on I-94 and Lake Michigan. We serve the Cream City with interstate freight hauling connecting the Badger State to Chicago and the national highway network.',
  'fargo-nd': 'Fargo serves as North Dakota\u2019s primary freight gateway on I-94. We provide interstate freight hauling through the Gateway to the West, connecting the northern plains to Minneapolis and the national highway network.',
  'sioux-falls-sd': 'Sioux Falls is South Dakota\u2019s largest city and primary freight hub. We provide interstate freight hauling through the I-29/I-90 corridor, connecting the Rushmore State to the national transportation network.',
  'burlington-vt': 'Burlington is Vermont\u2019s largest city and primary freight gateway on I-89. We provide interstate freight hauling through the Green Mountain State, connecting Burlington to the Northeast and national trade routes.',
  'portland-me': 'Portland is Maine\u2019s largest city and the northern terminus of I-95. We serve the Forest City with interstate freight hauling, connecting Maine to the entire Eastern Seaboard and beyond.',
  'charleston-wv': 'Charleston serves as West Virginia\u2019s primary freight hub along I-64 and I-77. We provide interstate freight hauling through the Mountain State, connecting the capital to the Midwest and Mid-Atlantic regions.',
  'manchester-nh': 'Manchester provides strategic access to southern New Hampshire and northern New England via I-93. We serve the Queen City with interstate freight hauling connecting New Hampshire to the Northeast corridor.',
  'providence-ri': 'Providence provides strategic access to southern New England via I-95. We serve the Creative Capital with interstate freight hauling connecting Rhode Island and Massachusetts to the entire Eastern Seaboard.',
  'newark-nj': 'Newark sits at the center of the Northeast Corridor with direct port access and I-95 connections. We serve Brick City with interstate freight hauling through one of the country\u2019s densest logistics markets.',
  'cheyenne-wy': 'Cheyenne serves as Wyoming\u2019s freight gateway on I-25 and I-80. We provide interstate freight hauling through the Magic City of the Plains, connecting the Rocky Mountain region to the northern plains and beyond.',
  'biloxi-ms': 'Biloxi anchors the Mississippi Gulf Coast on I-10. We provide interstate freight hauling through the Coastal MS region, connecting the Gulf Coast to the I-10 corridor from Florida to Louisiana.',
};

const freightVariants = [
  (c, s, a) => `${c}, ${a} is connected to our interstate freight network — we haul loads through this market using our own truck and crew, with full 50-state authority and no third-party brokers.`,
  (c, s, a) => `We serve ${c}, ${a} with licensed interstate freight hauling — your loads are picked up, transported, and delivered by our experienced team operating under USDOT 4166904 and MC 1734786.`,
  (c, s, a) => `${c}, ${a} is part of our nationwide freight coverage area — we run coast to coast with our own truck, handling everything from partial loads to full truckload shipments through this market.`,
  (c, s, a) => `Our freight service reaches ${c}, ${a} through the national highway network — we handle pickups and deliveries in the ${c} area with the same hands-on crew from quote to final delivery.`,
  (c, s, a) => `When you need freight hauled to or from ${c}, ${a}, we dispatch our own truck and driver — no subcontractors, no load boards, just direct service with licensed interstate authority.`,
  (c, s, a) => `${c}, ${a} is a regular stop on our interstate freight routes — we serve businesses, brokers, and dispatchers in this market with reliable, on-time service and direct communication throughout every load.`,
  (c, s, a) => `We provide freight hauling service to ${c}, ${a} under our own authority (USDOT 4166904 / MC 1734786) — every load is handled by our crew in our truck, from pickup in ${c} to delivery anywhere in the U.S.`,
  (c, s, a) => `${c}, ${a} is on our regular freight circuit — we pick up and deliver in the ${c} area with full interstate coverage, competitive rates, and the same crew you talk to at dispatch.`,
  (c, s, a) => `Our interstate authority covers ${c}, ${a} and every state in the country — we haul freight through this market with direct service, transparent pricing, and no middlemen.`,
  (c, s, a) => `${c}, ${a} is one of the freight markets we serve directly — our truck runs through this corridor regularly, and we treat every load with the same attention whether it\u2019s a skid or a full truckload.`,
  (c, s, a) => `Licensed interstate freight hauling in ${c}, ${a} — we operate under full USDOT/MC authority with our own equipment, serving shippers, brokers, and businesses in the ${c} area with reliable, hands-on service.`,
  (c, s, a) => `${c}, ${a} — we bring our interstate freight experience to this market with the same approach we use everywhere: our own truck, our own crew, and direct communication from pickup to delivery.`,
  (c, s, a) => `Serving ${c}, ${a} with freight hauled under Freight Bridge LLC\u2019s interstate authority — your freight moves on our schedule with the team that loaded it, from ${c} to any destination in the U.S.`,
  (c, s, a) => `Whether you need freight picked up in ${c}, ${a} or delivered here, our crew handles every job personally — we\u2019re a small, experienced team that doesn\u2019t subcontract or disappear after the call.`,
  (c, s, a) => `${c}, ${a} is part of our nationwide freight network — we serve this market directly with our own truck, providing reliable interstate hauling for businesses, brokers, and anyone who needs freight moved.`,
  (c, s, a) => `Freight hauling service in ${c}, ${a} — we run under full interstate authority with a hands-on approach: the person who answers your call is the same person who shows up to handle your load.`,
  (c, s, a) => `${c}, ${a} sits on major transportation corridors that we travel regularly — we provide interstate freight service to this market with competitive rates and the personal service of a small, experienced crew.`,
  (c, s, a) => `Licensed and insured freight hauling reaching ${c}, ${a} — we operate coast to coast under USDOT 4166904, picking up and delivering in the ${c} area with consistent, reliable service.`,
  (c, s, a) => `We haul freight to and from ${c}, ${a} with our own truck and team — no broker dispatches, no call-center handoffs, just direct interstate service from an experienced crew that treats every load with care.`,
  (c, s, a) => `${c}, ${a} — our freight service covers this market as part of our 50-state authority. We pick up loads in ${c} and deliver anywhere in the continental U.S. with the same hands-on crew from start to finish.`,
];

const movingVariants = [
  (c, s, a, svc) => `In ${c}, ${a} we handle ${svc} — every job is loaded, driven, and unloaded by our own crew with personal attention from our owner. No subcontractors, no hidden fees.`,
  (c, s, a, svc) => `We provide ${svc} in ${c}, ${a} — our experienced team handles the entire process from packing to placement, with the same crew throughout so nothing gets lost in the handoff.`,
  (c, s, a, svc) => `${c}, ${a} residents choose us for ${svc} because we show up ourselves — the owner and his crew handle every job personally, from the first walkthrough to the final box.`,
  (c, s, a, svc) => `Serving ${c}, ${a} with ${svc} — we\u2019re not a dispatch service that sends strangers to your door. You work directly with our experienced crew from quote to completion.`,
  (c, s, a, svc) => `${c}, ${a} — our ${svc} service is built around direct communication and consistent crews. The team that loads your belongings is the same team that delivers them, whether it\u2019s across town or across the country.`,
];

const allServiceVariants = [
  (c, s, a, svc) => `${c}, ${a} gets the full Freight Bridge service — ${svc}. We\u2019re a small enough team that you talk to the owner directly, and experienced enough to handle interstate freight with full 50-state authority.`,
  (c, s, a, svc) => `We provide ${svc} in ${c}, ${a} — all handled directly by our experienced crew without subcontractors or call-center middlemen. From a single-room move to a coast-to-coast freight load, we do it ourselves.`,
  (c, s, a, svc) => `${c}, ${a} — we cover the full spectrum: ${svc}. Every service is backed by our licensed interstate authority and delivered by the same hands-on crew from start to finish.`,
];

const movingFreightVariants = [
  (c, s, a, svc) => `In ${c}, ${a} we offer ${svc} — whether you\u2019re moving your family across town or shipping freight across the country, you work directly with our hands-on crew. We never subcontract your move or your load.`,
  (c, s, a, svc) => `${c}, ${a} is a full-service market for us — ${svc}. We bring the same hands-on approach to both moving and freight: our own crew, our own truck, and personal communication throughout.`,
  (c, s, a, svc) => `Serving ${c}, ${a} with ${svc} — our team handles everything from household furniture to commercial freight with the same consistent, owner-operated crew that knows your needs from start to finish.`,
];

function generateKeyTakeaway(city, state, stateAbbr, servicesOffered, slug) {
  if (citySpecific[slug]) return citySpecific[slug];

  const serviceStr = servicesOffered.map(s => {
    const map = { 'residential-moving': 'residential moving', 'commercial-moving': 'commercial moving', 'freight-hauling': 'freight hauling' };
    return map[s] || s;
  }).join(', ');

  const hasAll = servicesOffered.length >= 3;
  const hasFreight = servicesOffered.includes('freight-hauling');
  const hasMoving = servicesOffered.includes('residential-moving') || servicesOffered.includes('commercial-moving');

  if (hasAll) {
    const idx = locations.filter(l => l.servicesOffered.length >= 3).indexOf(locations.find(l => l.slug === slug)) % allServiceVariants.length;
    return allServiceVariants[idx](city, state, stateAbbr, serviceStr);
  }

  if (hasMoving && hasFreight) {
    const idx = locations.filter(l => (l.servicesOffered.includes('residential-moving') || l.servicesOffered.includes('commercial-moving')) && l.servicesOffered.includes('freight-hauling') && l.servicesOffered.length < 3).indexOf(locations.find(l => l.slug === slug)) % movingFreightVariants.length;
    return movingFreightVariants[idx](city, state, stateAbbr, serviceStr);
  }

  if (hasMoving) {
    const idx = locations.filter(l => (l.servicesOffered.includes('residential-moving') || l.servicesOffered.includes('commercial-moving')) && !l.servicesOffered.includes('freight-hauling')).indexOf(locations.find(l => l.slug === slug)) % movingVariants.length;
    return movingVariants[idx](city, state, stateAbbr, serviceStr);
  }

  if (hasFreight) {
    const idx = locations.filter(l => l.servicesOffered.length === 1 && l.servicesOffered[0] === 'freight-hauling').indexOf(locations.find(l => l.slug === slug)) % freightVariants.length;
    return freightVariants[idx](city, state, stateAbbr, serviceStr);
  }

  return `We serve ${city}, ${stateAbbr} with licensed interstate ${serviceStr} \u2014 no subcontractors, no call centers, just experienced hands-on service from start to finish.`;
}

const updated = locations.map(loc => {
  const takeaway = generateKeyTakeaway(loc.city, loc.state, loc.stateAbbr, loc.servicesOffered, loc.slug);
  return { ...loc, keyTakeaway: takeaway };
});

fs.writeFileSync(
  path.join(__dirname, '..', 'src', 'data', 'locations.json'),
  JSON.stringify(updated, null, 2) + '\n',
  'utf-8'
);

console.log(`Updated ${updated.length} locations with unique key takeaways.`);
