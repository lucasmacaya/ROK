"use strict";

/* ======== IMAGE PATHS (RELATIVE) ======== */
const IMG_BASE = "images/gear";
const p = (f) => `${IMG_BASE}/${f}`; // build relative path

const exactImageMap = {
    // Accessories
    "Bard's Cunning": p("accessory_bards.webp"),
    "Eternal Codex": p("accessory_eternal.webp"),
    "Horn of Fury": p("accessory_horn.webp"),
    "Wardrums of Hell": p("accessory_wardrum.webp"),
    "Ash of Dawn": p("ashdawn.webp"),
    "Conqueror's Will": p("conqueror.webp"),
    "Ring of Doom": p("accessory_ring.webp"),

    // Standalones / specials
    "Eternal Night": p("eternalnight.webp"),
    "Dominion": p("dominion.webp"),
    "Hydrablast": p("hydrablast.webp"),
    "Ian's Choice": p("ian.webp"),
    "Khan's Bow": p("khan.webp"),
    "Milky Way": p("milky.webp"),
    "Navar's Control": p("navar.webp"),
    "Nightveil": p("night.webp"),
    "Retribution": p("retribution.webp"),
    "Sun and Moon": p("sunandmoon.webp"),
    "Hope": p("hope.webp"),
    "Grips of the Immortal": p("grips.webp"),
};

const setCode = { "Dragon's Breath": "db", "Eternal Empire": "ee", "Glorious Greatness": "gg", "Hope War": "hw" };
const slotCode = { Helmet: "helmet", Chest: "chest", Gloves: "gloves", Legs: "pants", Boots: "boots", Weapon: "weapon" };

const slotPlaceholder = {
    Helmet: p("helmet.webp"),
    Chest: p("chest.webp"),
    Gloves: p("gloves.webp"),
    Legs: p("pants.webp"),
    Boots: p("boots.webp"),
    Weapon: p("weapon.webp"),
    "Accessory 1": p("accessory1.webp"),
    "Accessory 2": p("accessory2.webp"),
};

function iconFor(it) {
    if (exactImageMap[it.name]) return exactImageMap[it.name];
    const c = setCode[it.set],
        s = slotCode[it.slot];
    if (c && s) return p(`${c}_${s}.webp`);
    return p("weapon.webp"); // generic fallback
}

/* Roman numerals for 1..5 */
function roman(n) {
    const map = ["I", "II", "III", "IV", "V"];
    const x = Math.max(1, Math.min(5, n | 0));
    return map[x - 1];
}

/* ============================================================
   DEMO MINIMAL DATA (names only; images resolved by iconFor)
============================================================ */
let EQUIPMENT = [
    // Accessories
    { id: "eternal-codex", name: "Eternal Codex", slot: "Accessory", rarity: "legendary", set: "", iconic_group: "none" },
    { id: "horn-of-fury", name: "Horn of Fury", slot: "Accessory", rarity: "legendary", set: "", iconic_group: "none" },
    { id: "wardrums-of-hell", name: "Wardrums of Hell", slot: "Accessory", rarity: "legendary", set: "", iconic_group: "none" },
    { id: "ring-of-doom", name: "Ring of Doom", slot: "Accessory", rarity: "legendary", set: "", iconic_group: "none" },

    // The two below kept as your choice:
    { id: "ash-of-dawn", name: "Ash of Dawn", slot: "Legs", rarity: "legendary", set: "", iconic_group: "chest_pants_helmet" },
    { id: "conquerors-will", name: "Conqueror's Will", slot: "Helmet", rarity: "legendary", set: "", iconic_group: "chest_pants_helmet" },

    // Dragon's Breath
    { id: "db-helmet", name: "Dragon's Breath Helm", slot: "Helmet", rarity: "legendary", set: "Dragon's Breath", iconic_group: "chest_pants_helmet" },
    { id: "db-chest", name: "Dragon's Breath Armor", slot: "Chest", rarity: "legendary", set: "Dragon's Breath", iconic_group: "chest_pants_helmet" },
    { id: "db-gloves", name: "Dragon's Breath Gauntlets", slot: "Gloves", rarity: "legendary", set: "Dragon's Breath", iconic_group: "gloves_boots" },
    { id: "db-pants", name: "Dragon's Breath Pants", slot: "Legs", rarity: "legendary", set: "Dragon's Breath", iconic_group: "chest_pants_helmet" },
    { id: "db-boots", name: "Dragon's Breath Boots", slot: "Boots", rarity: "legendary", set: "Dragon's Breath", iconic_group: "gloves_boots" },
    { id: "db-weapon", name: "Dragon's Breath Sword", slot: "Weapon", rarity: "legendary", set: "Dragon's Breath", iconic_group: "weapons" },

    // Eternal Empire
    { id: "ee-helmet", name: "Eternal Empire Helm", slot: "Helmet", rarity: "legendary", set: "Eternal Empire", iconic_group: "chest_pants_helmet" },
    { id: "ee-chest", name: "Eternal Empire Armor", slot: "Chest", rarity: "legendary", set: "Eternal Empire", iconic_group: "chest_pants_helmet" },
    { id: "ee-gloves", name: "Eternal Empire Gauntlets", slot: "Gloves", rarity: "legendary", set: "Eternal Empire", iconic_group: "gloves_boots" },
    { id: "ee-pants", name: "Eternal Empire Pants", slot: "Legs", rarity: "legendary", set: "Eternal Empire", iconic_group: "chest_pants_helmet" },
    { id: "ee-boots", name: "Eternal Empire Boots", slot: "Boots", rarity: "legendary", set: "Eternal Empire", iconic_group: "gloves_boots" },
    { id: "ee-weapon", name: "Eternal Empire Sword", slot: "Weapon", rarity: "legendary", set: "Eternal Empire", iconic_group: "weapons" },

    // Glorious Greatness
    { id: "gg-helmet", name: "Glorious Greatness Helm", slot: "Helmet", rarity: "legendary", set: "Glorious Greatness", iconic_group: "chest_pants_helmet" },
    { id: "gg-chest", name: "Glorious Greatness Armor", slot: "Chest", rarity: "legendary", set: "Glorious Greatness", iconic_group: "chest_pants_helmet" },
    { id: "gg-gloves", name: "Glorious Greatness Gauntlets", slot: "Gloves", rarity: "legendary", set: "Glorious Greatness", iconic_group: "gloves_boots" },
    { id: "gg-pants", name: "Glorious Greatness Pants", slot: "Legs", rarity: "legendary", set: "Glorious Greatness", iconic_group: "chest_pants_helmet" },
    { id: "gg-boots", name: "Glorious Greatness Boots", slot: "Boots", rarity: "legendary", set: "Glorious Greatness", iconic_group: "gloves_boots" },
    { id: "gg-weapon", name: "Glorious Greatness Sword", slot: "Weapon", rarity: "legendary", set: "Glorious Greatness", iconic_group: "weapons" },

    // Hope War
    { id: "hw-helmet", name: "Hope War Helm", slot: "Helmet", rarity: "legendary", set: "Hope War", iconic_group: "chest_pants_helmet" },
    { id: "hw-chest", name: "Hope War Armor", slot: "Chest", rarity: "legendary", set: "Hope War", iconic_group: "chest_pants_helmet" },
    { id: "hw-boots", name: "Hope War Boots", slot: "Boots", rarity: "legendary", set: "Hope War", iconic_group: "gloves_boots" },
    { id: "hw-weapon", name: "Hope War Scepter", slot: "Weapon", rarity: "legendary", set: "Hope War", iconic_group: "weapons" },

    // Standalone (as you had them)
    { id: "eternal-night", name: "Eternal Night", slot: "Legs", rarity: "legendary", set: "", iconic_group: "chest_pants_helmet" },
    { id: "dominion", name: "Dominion", slot: "Weapon", rarity: "legendary", set: "", iconic_group: "weapons" },
    { id: "hydrablast", name: "Hydrablast", slot: "Weapon", rarity: "legendary", set: "", iconic_group: "weapons" },
    { id: "ians-choice", name: "Ian's Choice", slot: "Gloves", rarity: "legendary", set: "", iconic_group: "gloves_boots" },
    { id: "khans-bow", name: "Khan's Bow", slot: "Helmet", rarity: "legendary", set: "", iconic_group: "chest_pants_helmet" },
    { id: "milky-way", name: "Milky Way", slot: "Chest", rarity: "legendary", set: "", iconic_group: "chest_pants_helmet" },
    { id: "navars-control", name: "Navar's Control", slot: "Gloves", rarity: "legendary", set: "", iconic_group: "gloves_boots" },
    { id: "nightveil", name: "Nightveil", slot: "Helmet", rarity: "legendary", set: "", iconic_group: "chest_pants_helmet" },
    { id: "retribution", name: "Retribution", slot: "Chest", rarity: "legendary", set: "", iconic_group: "chest_pants_helmet" },
    { id: "sun-and-moon", name: "Sun and Moon", slot: "Weapon", rarity: "legendary", set: "", iconic_group: "weapons" },
    { id: "hope", name: "Hope", slot: "Chest", rarity: "legendary", set: "", iconic_group: "chest_pants_helmet" },
    { id: "grips", name: "Grips of the Immortal", slot: "Gloves", rarity: "legendary", set: "", iconic_group: "gloves_boots" },
];

let SET_EFFECTS = [
    { set: "Dragon's Breath", effects: [{ pieces: 2, stat: "Health", value: 3 }, { pieces: 4, stat: "Defense", value: 8 }] },
    { set: "Glorious Greatness", effects: [{ pieces: 2, stat: "Attack", value: 3 }, { pieces: 4, stat: "Health", value: 8 }] },
    { set: "Eternal Empire", effects: [{ pieces: 2, stat: "Defense", value: 3 }, { pieces: 4, stat: "Attack", value: 8 }] },
];

// formations (placeholder)
const FORMATIONS = [
    { name: "Wedge", bonus: { Attack: 3 } },
    { name: "Pincer", bonus: { Defense: 3 } },
    { name: "Delta", bonus: { Health: 3 } },
];
const TROOPS = ["Infantry", "Cavalry", "Archer", "Mixed"];

// Iconic cost buckets (placeholder)
const ICONIC_COST = {
    gloves_boots: { "2": { crystal: 500 }, "3": { crystal: 700 }, "4": { crystal: 900 }, "5": { crystal: 1200 } },
    chest_pants_helmet: { "2": { crystal: 800 }, "3": { crystal: 1000 }, "4": { crystal: 1300 }, "5": { crystal: 1700 } },
    weapons: { "2": { crystal: 900 }, "3": { crystal: 1200 }, "4": { crystal: 1600 }, "5": { crystal: 2100 } },
    none: {},
};

/* ============================================================
   STATE
============================================================ */
const slotsList = ["Helmet", "Chest", "Weapon", "Gloves", "Legs", "Boots", "Accessory 1", "Accessory 2"];
const state = {
    activeSet: "set1",
    activeSlot: "Helmet",
    sets: { set1: initSet(), set2: initSet() },
    filters: { q: "", slot: "", rarity: "", set: "" },
};

function initSet() {
    const o = { formation: FORMATIONS[0].name, troop: TROOPS[0], items: {} };
    slotsList.forEach((s) => (o.items[s] = null));
    return o;
}

const el = (s) => document.querySelector(s);
const grid = el("#equip-grid");

/* ============================================================
   RENDERING
============================================================ */
function rarityClass(r) { return r === "epic" ? "rar-epic" : r === "elite" ? "rar-elite" : "rar-legendary"; }

function renderAll() {
    renderSlots("set1");
    renderSlots("set2");
    renderFilters();
    renderLibrary();
    renderStats("set1");
    renderStats("set2");
}

function renderFilters() {
    const sets = [...new Set(EQUIPMENT.map((x) => x.set).filter(Boolean))].sort();
    el("#filter-set").innerHTML = `<option value="">All Sets</option>${sets.map((s) => `<option>${s}</option>`).join("")}`;
}

function renderSlots(setId) {
  const root = el(`#slots-${setId}`);
  root.innerHTML = "";

  const layoutRows = [
    ["Helmet"],
    ["Chest"],
    ["Weapon", "Gloves"],
    ["Legs"],
    ["Accessory 1", "Accessory 2"],
    ["Boots"],
  ];

  const makeDiamond = (slot) => {
    const it = state.sets[setId].items[slot];

    const wrap = document.createElement("div");
    wrap.className = "diamond-wrap";

    const div = document.createElement("div");
    div.className = "diamond" + (state.activeSet === setId && state.activeSlot === slot ? " active" : "");
    div.title = slot;

    div.onclick = () => {
      state.activeSet = setId;
      state.activeSlot = slot;
      state.filters.q = "";
      const search = el("#search"); if (search) search.value = "";
      state.filters.slot = slot.startsWith("Accessory") ? "Accessory" : slot;
      const slotSel = el("#filter-slot"); if (slotSel) slotSel.value = state.filters.slot;
      renderSlots(setId); renderLibrary();
    };

    if (it) {
      const lvl = it.iconic || 1;

      div.innerHTML = `
  <div class="inner"><img src="${iconFor(it)}" alt=""></div>
  <div class="controls">
    <button class="btn btn-trash" title="Remove">🗑</button>
    <button class="btn btn-crit ${it.crit ? "on" : ""}" title="Toggle Crit"><span class="lab">▲</span></button>
    <button class="btn btn-roman" title="Iconic Level"><span class="lab">${roman(lvl)}</span></button>
  </div>
`;

      setTimeout(() => {
        div.querySelector(".btn-trash").onclick = (e) => {
          e.stopPropagation();
          state.sets[setId].items[slot] = null;
          renderSlots(setId); renderStats(setId);
        };
        const critBtn = div.querySelector(".btn-crit");
        critBtn.onclick = (e) => {
          e.stopPropagation();
          it.crit = !it.crit;
          critBtn.classList.toggle("on", it.crit);
          renderStats(setId);
        };
        const romBtn = div.querySelector(".btn-roman");
        romBtn.onclick = (e) => {
          e.stopPropagation();
          it.iconic = (it.iconic || 1) + 1;
          if (it.iconic > 5) it.iconic = 1;
          romBtn.querySelector(".lab").textContent = roman(it.iconic);
          renderStats(setId);
        };

      }, 0);
    } else {
      const ph = slotPlaceholder[slot] || slotPlaceholder[slot.split(" ")[0]] || p("weapon.webp");
      div.innerHTML = `<div class="inner"><img src="${ph}" alt=""></div>`;
    }

    wrap.appendChild(div);
    return wrap;
  };

  layoutRows.forEach((row) => {
    const r = document.createElement("div");
    r.className = "slot-row";
    row.forEach((slot) => r.appendChild(makeDiamond(slot)));
    root.appendChild(r);
  });

  // armament selectors
  const formSel = el(setId === "set1" ? "#arm1-formation" : "#arm2-formation");
  const troopSel = el(setId === "set1" ? "#arm1-troop" : "#arm2-troop");
  formSel.innerHTML = FORMATIONS.map((f) => `<option ${f.name === state.sets[setId].formation ? "selected" : ""}>${f.name}</option>`).join("");
  troopSel.innerHTML = TROOPS.map((t) => `<option ${t === state.sets[setId].troop ? "selected" : ""}>${t}</option>`).join("");
  formSel.onchange = () => { state.sets[setId].formation = formSel.value; renderStats(setId); };
  troopSel.onchange = () => { state.sets[setId].troop = troopSel.value; renderStats(setId); };
}

function filteredItems() {
  const { q, slot, rarity, set } = state.filters;
  const query = q.trim().toLowerCase();
  return EQUIPMENT.filter((it) => {
    if (query && !(`${it.name} ${it.set} ${it.slot}`.toLowerCase().includes(query))) return false;
    if (slot) { if (slot === "Accessory" ? it.slot !== "Accessory" : it.slot !== slot) return false; }
    if (rarity && it.rarity !== rarity) return false;
    if (set && it.set !== set) return false;
    return true;
  });
}

function renderLibrary() {
  grid.innerHTML = "";
  filteredItems().forEach((it) => {
    const tile = document.createElement("div");
    tile.className = `tile ${rarityClass(it.rarity)}`;
    tile.innerHTML = `<img src="${iconFor(it)}" alt="">`;
    tile.onclick = () => {
      const s = state.activeSlot;
      if (s.startsWith("Accessory") && it.slot === "Accessory") equip(state.activeSet, s, it);
      else if (s === it.slot) equip(state.activeSet, s, it);
    };
    grid.appendChild(tile);
  });
}

/* ============================================================
   EQUIP + STATS
============================================================ */
function equip(setId, slot, it) {
  const copy = { ...it, iconic: it.iconic || 1, crit: !!it.crit };
  state.sets[setId].items[slot] = copy;
  renderSlots(setId); renderStats(setId);
}

function setPieces(setId) {
  const items = state.sets[setId].items, counts = {};
  for (const s of slotsList) {
    const it = items[s]; if (!it || !it.set) continue;
    counts[it.set] = (counts[it.set] || 0) + 1;
  }
  return counts;
}
function applySetEffects(setId, totals) {
  const counts = setPieces(setId);
  for (const row of SET_EFFECTS) {
    const have = counts[row.set] || 0;
    for (const eff of row.effects) if (have >= eff.pieces) totals[eff.stat] = (totals[eff.stat] || 0) + eff.value;
  }
}
function addMats(a, b) { const out = { ...a }; for (const k in b) out[k] = (out[k] || 0) + b[k]; return out; }
function iconicCostFor(it) {
  const grp = it.iconic_group || "none"; const lvl = it.iconic || 1; let sum = {};
  const tb = ICONIC_COST[grp] || {};
  for (let L = 2; L <= lvl; L++) { const row = tb[String(L)]; if (row) sum = addMats(sum, row); }
  return sum;
}
function applyCrit(stats, it) { if (!it.crit) return; for (const a of it.attributes || []) stats[a.stat] = (stats[a.stat] || 0) + a.value * 0.05; }
function applyIconic(stats, it) {
  const lv = (it.iconic || 1) - 1; if (lv <= 0) return;
  for (const a of it.attributes || []) stats[a.stat] = (stats[a.stat] || 0) + a.value * 0.04 * lv;
}

function aggregate(setId) {
  const items = state.sets[setId].items;
  const totals = {}; let matsAll = {}, iconicAll = {};
  for (const s of slotsList) {
    const it = items[s]; if (!it) continue;
    (it.attributes || []).forEach((a) => (totals[a.stat] = (totals[a.stat] || 0) + a.value));
    applyCrit(totals, it); applyIconic(totals, it);
    matsAll = addMats(matsAll, it.materials || {}); iconicAll = addMats(iconicAll, iconicCostFor(it));
  }
  applySetEffects(setId, totals);
  const form = FORMATIONS.find((f) => f.name === state.sets[setId].formation);
  if (form) for (const k in form.bonus) totals[k] = (totals[k] || 0) + form.bonus[k];
  return { totals, matsAll, iconicAll };
}
const fmt = (v) => Math.round((+v || 0) * 100) / 100;

/* ===== stats panel (chips + set effects) ===== */
function renderStats(setId) {
  const panel = el(setId === "set1" ? "#stats1" : "#stats2");
  panel.classList.add("open");
  const { totals } = aggregate(setId);

  const entries = [];
  for (const [k, v] of Object.entries(totals)) {
    const name = k;
    const val = Math.round((+v || 0) * 100) / 100;
    const cat = /infantry/i.test(name) ? "inf" : /cavalry/i.test(name) ? "cav" : /archer/i.test(name) ? "arc" : /siege/i.test(name) ? "sie" : "oth";
    entries.push({ name, val, cat });
  }

  const chips = `
    <div class="stat-chips">
      <span class="chip active" data-cat="all">All</span>
      <span class="chip" data-cat="inf">Infantry</span>
      <span class="chip" data-cat="cav">Cavalry</span>
      <span class="chip" data-cat="arc">Archer</span>
      <span class="chip" data-cat="sie">Siege</span>
    </div>`;

  const rowHTML = (e) => `
    <div class="stat-row" data-cat="${e.cat}">
      <div class="stat-left"><span class="dot ${e.cat}"></span><span class="stat-name">${e.name}</span></div>
      <div class="stat-val">${e.val}%</div>
      <div class="stat-delta">(+${e.val}%)</div>
    </div>`;

  const statsList = `<div class="stat-list">${entries.map(rowHTML).join("")}</div>`;

  const counts = setPieces(setId);
  const activeSets = Object.entries(counts).filter(([_, n]) => n > 0);

  let setHTML = "";
  if (activeSets.length) {
    const effectsHTML = activeSets.map(([setName, have]) => {
      const row = SET_EFFECTS.find((r) => r.set === setName);
      if (!row) return "";
      const applied = row.effects.filter((e) => have >= e.pieces);
      const head = `<div class="set-head">${setName} (${have}/4)</div>`;
      const note = `<div class="set-note">Note: Set effects are already applied to the overall stats above.</div>`;
      const lines = applied.map((e) => `
          <div class="set-row">
            <div class="set-name">${e.pieces} pieces: ${e.stat}</div>
            <div class="set-val">+${e.value}%</div>
          </div>`).join("");
      return head + note + `<div class="set-rows">${lines}</div>`;
    }).join("");
    setHTML = `<div class="set-section">${effectsHTML}</div>`;
  }

  panel.innerHTML = `
    <div class="statbox">
      <h4 class="title">Equipment Stats</h4>
      <div class="note">Note: Troop Health, Troop Attack, Troop Defense are already applied to the overall stats below.</div>
      ${chips}
      ${statsList}
      ${setHTML}
    </div>
  `;

  const chipEls = panel.querySelectorAll(".chip");
  chipEls.forEach((ch) => {
    ch.onclick = () => {
      chipEls.forEach((c) => c.classList.remove("active"));
      ch.classList.add("active");
      const cat = ch.dataset.cat;
      const rows = panel.querySelectorAll(".stat-row");
      rows.forEach((r) => { r.style.display = (cat === "all" || r.dataset.cat === cat) ? "" : "none"; });
    };
  });
}

/* ============================================================
   EVENTS
============================================================ */
document.querySelectorAll(".toggle").forEach((btn) => {
  btn.onclick = () => {
    const id = btn.dataset.target;
    const box = el("#" + id);
    box.classList.toggle("open");
    btn.textContent = box.classList.contains("open") ? "Hide overall stats" : "Show overall stats";
  };
});
el("#search").oninput = (e) => { state.filters.q = e.target.value; renderLibrary(); };
el("#filter-slot").onchange = (e) => { state.filters.slot = e.target.value; renderLibrary(); };
el("#filter-rarity").onchange = (e) => { state.filters.rarity = e.target.value; renderLibrary(); };
el("#filter-set").onchange = (e) => { state.filters.set = e.target.value; renderLibrary(); };

el("#equipFile").onchange = async (e) => {
  const f = e.target.files[0]; if (!f) return;
  EQUIPMENT = normalize(JSON.parse(await f.text()));
  renderAll();
};
el("#setsFile").onchange = async (e) => {
  const f = e.target.files[0]; if (!f) return;
  SET_EFFECTS = JSON.parse(await f.text());
  renderAll();
};
el("#loadDemo").onclick = () => { EQUIPMENT = normalize(EQUIPMENT); renderAll(); };

el("#compareBtn").onclick = () => {
  const a = aggregate("set1").totals, b = aggregate("set2").totals;
  const keys = [...new Set([...Object.keys(a), ...Object.keys(b)])];
  const body = el("#compareBody");
  body.innerHTML = `<div class="delta">${keys.map((k) => {
    const dv = fmt((b[k] || 0) - (a[k] || 0));
    const c = dv > 0 ? "good" : dv < 0 ? "bad" : "";
    return `<div class="kpi"><div>${k}</div><div class="${c}">${dv}%</div></div>`;
  }).join("")}</div>`;
  body.style.display = body.style.display === "block" ? "none" : "block";
};

/* ============================================================
   UTIL + INIT
============================================================ */
function normalize(arr) {
  return arr.map((it) => {
    const copy = { ...it };
    if (copy.slot && copy.slot.toLowerCase().includes("access")) copy.slot = "Accessory";
    copy.attributes = Array.isArray(copy.attributes) ? copy.attributes : copy.attributes ? [copy.attributes] : [];
    copy.materials = copy.materials || {};
    copy.src = iconFor(copy);
    return copy;
  });
}

/* ---------- NEW: optional data loader (non-destructive) ---------- */
const DATA_DIR = "data";

async function tryFetchJSON(url) {
  try {
    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch (e) {
    console.warn("[data] could not load", url, e.message);
    return null;
  }
}
function normalizeKey(s) {
  return String(s || "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ")
    .replace(/[–—]/g, "-")
    .replace(/_/g, "-");
}
function mergeExternalData(externalEquipment, externalSets) {
  if (Array.isArray(externalEquipment) && externalEquipment.length) {
    const byName = new Map(EQUIPMENT.map(it => [normalizeKey(it.name), it]));
    const byId   = new Map(EQUIPMENT.map(it => [normalizeKey(it.id), it]));

    externalEquipment.forEach(src => {
      const kName = normalizeKey(src.name);
      const kId   = normalizeKey(src.id || "");
      const target = byName.get(kName) || byId.get(kId);
      if (!target) return;

      // Only enrich—never rename or remove
      if (Array.isArray(src.attributes)) target.attributes = src.attributes.slice();
      if (src.notes) target.notes = src.notes;
      if (src.iconic_group) target.iconic_group = src.iconic_group;
      if (src.set) target.set = target.set || src.set; // keep your set if already present
      // do NOT touch target.name/id/slot or images
    });
  }
  if (Array.isArray(externalSets) && externalSets.length) {
    SET_EFFECTS = externalSets; // safe override, same structure
  }
}

/* init: load & merge external stats, then proceed exactly as before */
(async function init() {
  const extEquip = await tryFetchJSON(`${DATA_DIR}/equipment.json`);
  const extSets  = await tryFetchJSON(`${DATA_DIR}/set-effects.json`);
  mergeExternalData(extEquip, extSets);

  ["#arm1-formation", "#arm2-formation"].forEach((s) => el(s).innerHTML = FORMATIONS.map((f) => `<option>${f.name}</option>`).join(""));
  ["#arm1-troop", "#arm2-troop"].forEach((s) => el(s).innerHTML = TROOPS.map((t) => `<option>${t}</option>`).join(""));
  EQUIPMENT = normalize(EQUIPMENT);
  renderAll();
})();