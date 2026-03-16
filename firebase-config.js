// ═══════════════════════════════════════════════════════════
//  NagpurViralTech — Firebase Configuration
//  Replace the values below with YOUR Firebase project details
//  Get them from: https://console.firebase.google.com
// ═══════════════════════════════════════════════════════════

const FIREBASE_CONFIG = {
  apiKey:            "YOUR_API_KEY",
  authDomain:        "YOUR_PROJECT_ID.firebaseapp.com",
  projectId:         "YOUR_PROJECT_ID",
  storageBucket:     "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId:             "YOUR_APP_ID"
};

// Admin credentials (change these!)
const ADMIN_USER     = "admin";
const ADMIN_PASSWORD = "nagpur123";

// ─── Default seed deals (used when DB is empty) ───────────
const SEED_DEALS = [
  { emoji:'🎧', name:'BoAt Airdopes 141 TWS Earbuds',      cat:'Audio',       price:999,   orig:2990,  desc:'42hr battery, IWS v5.0, IPX4 water resistant. Top rated on Amazon.', badge:'HOT 🔥',      link:'https://amzn.to/example', status:'Active', clicks:642, createdAt: Date.now()-86400000*3 },
  { emoji:'📱', name:'Redmi 13C 5G – 6GB + 128GB',         cat:'Smartphones', price:10999, orig:14999, desc:'Dimensity 6100+, 50MP camera, 5000mAh battery. Best budget 5G phone.', badge:'LIMITED',     link:'https://amzn.to/example', status:'Active', clicks:518, createdAt: Date.now()-86400000*2 },
  { emoji:'💻', name:'Lenovo IdeaPad Slim 3 – i3 12th Gen', cat:'Laptops',     price:34990, orig:49990, desc:'8GB RAM, 512GB SSD, 15.6" FHD. Best laptop under 40K.', badge:'⭐ TOP PICK', link:'https://amzn.to/example', status:'Active', clicks:310, createdAt: Date.now()-86400000*1 },
  { emoji:'⌚', name:'Fire-Boltt Talk 2 Smartwatch',        cat:'Wearables',   price:1499,  orig:4999,  desc:'Bluetooth calling, 100+ sports modes, SpO2 & heart rate monitor.', badge:'NEW 🆕',       link:'https://amzn.to/example', status:'Active', clicks:280, createdAt: Date.now()-3600000*5 },
  { emoji:'🖥️', name:'Mi Smart Speaker',                   cat:'Smart Home',  price:2499,  orig:3999,  desc:'Full HD audio, Google Assistant built-in, hands-free control.', badge:'🏠 HOME',       link:'https://amzn.to/example', status:'Active', clicks:190, createdAt: Date.now()-3600000*3 },
  { emoji:'🔋', name:'Ambrane 20000mAh Power Bank',         cat:'Accessories', price:1299,  orig:3499,  desc:'65W fast charging, Type-C + USB-A. Charges laptop, phone, tablet.', badge:'⚡ FLASH',      link:'https://amzn.to/example', status:'Active', clicks:176, createdAt: Date.now()-3600000*1 },
];
