# Sample Datasets — Decision Tree Builder
**Module 3 Tutorial**

Three labeled datasets for use with the interactive decision tree builder. Each dataset is designed to be:
- **Accessible:** No specialized knowledge required
- **Classifiable:** A simple decision tree can reach ≥85% accuracy
- **Discussable:** The features spark interesting "why?" conversations

---

## Dataset 1: 🐾 Animals

**Classification goal:** Classify each animal into one of four groups: **Mammal**, **Bird**, **Fish**, or **Insect**

**Number of examples:** 20
**Number of classes:** 4

### Features

| Feature | Type | Values |
|---------|------|--------|
| Has fur / hair? | Boolean | Yes / No |
| Has feathers? | Boolean | Yes / No |
| Has gills? | Boolean | Yes / No |
| Has wings? | Boolean | Yes / No |
| Is warm-blooded? | Boolean | Yes / No |
| Has more than 4 legs? | Boolean | Yes / No |
| Gives live birth? | Boolean | Yes / No |

### Training Examples

| ID | Animal | Has fur? | Has feathers? | Has gills? | Has wings? | Warm-blooded? | >4 legs? | Live birth? | **Label** |
|----|--------|----------|--------------|-----------|-----------|--------------|---------|-------------|-----------|
| A01 | Dog | Yes | No | No | No | Yes | No | Yes | Mammal |
| A02 | Cat | Yes | No | No | No | Yes | No | Yes | Mammal |
| A03 | Horse | Yes | No | No | No | Yes | No | Yes | Mammal |
| A04 | Whale | Yes | No | No | No | Yes | No | Yes | Mammal |
| A05 | Bat | Yes | No | No | Yes | Yes | No | Yes | Mammal |
| A06 | Robin | No | Yes | No | Yes | Yes | No | No | Bird |
| A07 | Eagle | No | Yes | No | Yes | Yes | No | No | Bird |
| A08 | Penguin | No | Yes | No | No | Yes | No | No | Bird |
| A09 | Parrot | No | Yes | No | Yes | Yes | No | No | Bird |
| A10 | Ostrich | No | Yes | No | No | Yes | No | No | Bird |
| A11 | Salmon | No | No | Yes | No | No | No | No | Fish |
| A12 | Shark | No | No | Yes | No | No | No | No | Fish |
| A13 | Goldfish | No | No | Yes | No | No | No | No | Fish |
| A14 | Tuna | No | No | Yes | No | No | No | No | Fish |
| A15 | Clownfish | No | No | Yes | No | No | No | No | Fish |
| A16 | Ant | No | No | No | No | No | Yes | No | Insect |
| A17 | Bee | No | No | No | Yes | No | Yes | No | Insect |
| A18 | Butterfly | No | No | No | Yes | No | Yes | No | Insect |
| A19 | Beetle | No | No | No | No | No | Yes | No | Insect |
| A20 | Grasshopper | No | No | No | No | No | Yes | No | Insect |

### Suggested Decision Path (Spoiler — for teachers only)

```
Has fur?
├── Yes → Mammal ✓
└── No
    └── Has feathers?
        ├── Yes → Bird ✓
        └── No
            └── Has gills?
                ├── Yes → Fish ✓
                └── No → Insect ✓
```
**Expected accuracy with this tree: 100% (20/20)**

### Discussion Notes
- Bat (A05) is a fun edge case: it has wings AND fur — good conversation starter about why it's still a mammal
- Penguin (A08) has no wings listed (wings collapsed into flippers) — can spark debate
- Students may try "Has wings?" first — only gets 65% accuracy, good lesson about feature choice

---

## Dataset 2: 🌤 Weather Types

**Classification goal:** Classify each weather scenario as: **Sunny**, **Rainy**, **Cloudy**, or **Snowy**

**Number of examples:** 20
**Number of classes:** 4

### Features

| Feature | Type | Values |
|---------|------|--------|
| Temperature | Categorical | Hot / Warm / Cool / Cold |
| Sky | Categorical | Clear / Partly cloudy / Overcast |
| Precipitation | Boolean | Yes / No |
| Precipitation type | Categorical | None / Rain / Snow / Sleet |
| Wind | Categorical | Calm / Breezy / Windy |
| Humidity | Categorical | Low / Medium / High |

### Training Examples

| ID | Scenario | Temp | Sky | Precipitation? | Precip type | Wind | Humidity | **Label** |
|----|----------|------|-----|----------------|-------------|------|----------|-----------|
| W01 | Hot July afternoon | Hot | Clear | No | None | Calm | Low | Sunny |
| W02 | Warm spring morning | Warm | Clear | No | None | Calm | Medium | Sunny |
| W03 | Warm beach day | Warm | Clear | No | None | Breezy | Low | Sunny |
| W04 | Warm sunny day | Warm | Partly cloudy | No | None | Calm | Medium | Sunny |
| W05 | Hot dry afternoon | Hot | Clear | No | None | Windy | Low | Sunny |
| W06 | Cool drizzly morning | Cool | Overcast | Yes | Rain | Calm | High | Rainy |
| W07 | Warm rainstorm | Warm | Overcast | Yes | Rain | Windy | High | Rainy |
| W08 | Cool afternoon rain | Cool | Overcast | Yes | Rain | Breezy | High | Rainy |
| W09 | Warm light rain | Warm | Partly cloudy | Yes | Rain | Calm | High | Rainy |
| W10 | Cool thunderstorm | Cool | Overcast | Yes | Rain | Windy | High | Rainy |
| W11 | Warm overcast day | Warm | Overcast | No | None | Calm | Medium | Cloudy |
| W12 | Cool gray morning | Cool | Overcast | No | None | Calm | Medium | Cloudy |
| W13 | Cool partly cloudy | Cool | Partly cloudy | No | None | Breezy | Medium | Cloudy |
| W14 | Cool dull afternoon | Cool | Overcast | No | None | Breezy | High | Cloudy |
| W15 | Warm foggy morning | Warm | Partly cloudy | No | None | Calm | High | Cloudy |
| W16 | Cold snowfall | Cold | Overcast | Yes | Snow | Calm | Medium | Snowy |
| W17 | Cold blizzard | Cold | Overcast | Yes | Snow | Windy | Low | Snowy |
| W18 | Cold light snow | Cold | Partly cloudy | Yes | Snow | Breezy | Low | Snowy |
| W19 | Cold sleet | Cold | Overcast | Yes | Sleet | Calm | Medium | Snowy |
| W20 | Cold heavy snow | Cold | Overcast | Yes | Snow | Windy | Low | Snowy |

### Suggested Decision Path (Spoiler — for teachers only)

```
Temperature = Cold?
├── Yes
│   └── Precipitation?
│       ├── Yes → Snowy ✓
│       └── No → Cloudy (edge case — could be Cold+Cloudy)
└── No
    └── Precipitation?
        ├── Yes → Rainy ✓
        └── No
            └── Sky = Clear?
                ├── Yes → Sunny ✓
                └── No → Cloudy ✓
```
**Expected accuracy with this tree: 95% (19/20)**

### Discussion Notes
- W15 (Warm foggy morning) is intentionally ambiguous — cloudy despite some warmth
- Students often guess "Sky = Clear?" first — reaches about 25% accuracy alone (good mistake)
- Weather datasets show students that even "obvious" things need multiple features

---

## Dataset 3: 🥗 Lunch Foods

**Classification goal:** Classify each food as: **Fruit**, **Vegetable**, **Protein**, or **Grain**

**Number of examples:** 20
**Number of classes:** 4

### Features

| Feature | Type | Values |
|---------|------|--------|
| Tastes sweet? | Boolean | Yes / No |
| Has seeds inside? | Boolean | Yes / No |
| Comes from a plant? | Boolean | Yes / No |
| Is the main "filling" part of a meal? | Boolean | Yes / No |
| Usually eaten raw? | Boolean | Yes / No |
| Grows above ground? | Boolean | Yes / No |
| Is it crunchy? | Boolean | Yes / No |
| High in protein? | Boolean | Yes / No |

### Training Examples

| ID | Food | Sweet? | Seeds inside? | From plant? | Filling? | Eaten raw? | Above ground? | Crunchy? | High protein? | **Label** |
|----|------|--------|--------------|-------------|----------|-----------|--------------|---------|--------------|-----------|
| L01 | Apple | Yes | Yes | Yes | No | Yes | Yes | Yes | No | Fruit |
| L02 | Strawberry | Yes | Yes | Yes | No | Yes | Yes | No | No | Fruit |
| L03 | Banana | Yes | Yes | Yes | No | Yes | Yes | No | No | Fruit |
| L04 | Watermelon | Yes | Yes | Yes | No | Yes | Yes | No | No | Fruit |
| L05 | Orange | Yes | Yes | Yes | No | Yes | Yes | No | No | Fruit |
| L06 | Broccoli | No | No | Yes | No | No | Yes | Yes | No | Vegetable |
| L07 | Carrot | No | No | Yes | No | Yes | No | Yes | No | Vegetable |
| L08 | Spinach | No | No | Yes | No | Yes | Yes | No | No | Vegetable |
| L09 | Cucumber | No | Yes | Yes | No | Yes | Yes | Yes | No | Vegetable |
| L10 | Celery | No | No | Yes | No | Yes | Yes | Yes | No | Vegetable |
| L11 | Chicken | No | No | No | Yes | No | No | No | Yes | Protein |
| L12 | Egg | No | No | No | Yes | No | No | No | Yes | Protein |
| L13 | Tofu | No | No | Yes | Yes | No | No | No | Yes | Protein |
| L14 | Peanut butter | No | Yes | Yes | Yes | No | No | No | Yes | Protein |
| L15 | Tuna | No | No | No | Yes | No | No | No | Yes | Protein |
| L16 | Bread | No | No | Yes | Yes | No | No | No | No | Grain |
| L17 | Rice | No | No | Yes | Yes | No | No | No | No | Grain |
| L18 | Pasta | No | No | Yes | Yes | No | No | No | No | Grain |
| L19 | Oatmeal | No | No | Yes | Yes | No | No | No | No | Grain |
| L20 | Crackers | No | No | Yes | No | No | No | Yes | No | Grain |

### Suggested Decision Path (Spoiler — for teachers only)

```
Tastes sweet?
├── Yes → Fruit ✓
└── No
    └── High in protein?
        ├── Yes → Protein ✓
        └── No
            └── Is the main "filling" part of a meal?
                ├── Yes → Grain ✓
                └── No → Vegetable ✓
```
**Expected accuracy with this tree: 95% (19/20)**

### Discussion Notes
- Tofu (L13) and peanut butter (L14) come from plants but are still protein — great discussion about how category depends on *nutritional role*
- Cucumber (L09) has seeds but isn't fruit in culinary terms — opens up the biology vs. culinary classification debate
- This dataset encourages students to think about *what makes a good feature* vs. one that just seems logical

---

## Dataset JSON Files

For developer reference, these datasets will also be provided as structured JSON in `datasets/animals.json`, `datasets/weather.json`, and `datasets/lunch.json` using the schema defined in `tool-spec.md §3.2`.

---

*Datasets authored by ClawDawg for openclaw-curriculum Module 3.*
