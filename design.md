# WATCH E-COMMERCE A–Z Colour System

Premium marketplace palette for an all-watch platform — luxury, smart, sports, fashion, classic and everyday watches.

- **DEEP PETROL**: `#123B3A`
- **CHAMPAGNE**: `#C7A66A`
- **PORCELAIN**: `#F7F6F2`

---

## Design Principle

The interface should feel premium without becoming a black-and-gold luxury clone. Product photography remains the visual hero; the UI provides trust, structure and a distinctive brand signature.

---

## 1. Core Colour System

| Token Name | HEX | Primary Use |
| :--- | :--- | :--- |
| `--brand-900` | `#123B3A` | Deep Petrol — Brand, header, primary CTA, active navigation |
| `--accent-500` | `#C7A66A` | Muted Champagne — Premium details, badges, selected states |
| `--surface-50` | `#F7F6F2` | Porcelain — Main page background |
| `--text-900` | `#171B1B` | Carbon — Headings, product names, prices |
| `--text-500` | `#707776` | Mineral Grey — Secondary text, metadata, placeholders |
| `--surface-0` | `#FFFFFF` | Pure White — Product cards, modals, clean surfaces |
| `--brand-100` | `#DDE9E4` | Pale Sage — Soft brand surfaces, filters, category highlights |
| `--accent-100` | `#F2E9D8` | Champagne Mist — Premium backgrounds, subtle offer areas |

### Supporting Status Colours

| Token Name | HEX | Use |
| :--- | :--- | :--- |
| `--success-600` | `#34745F` | Deep Jade — Payment success, delivered, verified, in-stock |
| `--danger-600` | `#C95F50` | Muted Terracotta — Errors, low-stock warnings, sale emphasis |
| `--info-100` | `#DCE8EE` | Soft Blue — Informational notices, shipping updates |
| `--premium-100` | `#E8E2EE` | Soft Lavender — Limited collections or editorial highlights |

---

## 2. CTA & Interaction System

| Component | Background | Text/Icon | Hover / Active | Rule |
| :--- | :--- | :--- | :--- | :--- |
| **Primary CTA** | `#123B3A` | `#FFFFFF` | `#0D2D2C` | Main conversion action |
| **Secondary CTA** | `#FFFFFF` | `#123B3A` | `#DDE9E4` | Secondary shopping action |
| **Premium CTA** | `#C7A66A` | `#171B1B` | `#B28E52` | Use sparingly for premium collections |
| **Add to Cart** | `#34745F` | `#FFFFFF` | `#2C604F` | Use when success/action context is important |
| **Buy Now** | `#123B3A` | `#FFFFFF` | `#0D2D2C` | Strongest purchase action |
| **Wishlist** | `#FFFFFF` | `#123B3A` | `#DDE9E4` | Outline/default; filled state can use Champagne |
| **Sale Badge** | `#C95F50` | `#FFFFFF` | `#C95F50` | Small badge only |
| **Success Badge** | `#DDE9E4` | `#34745F` | `#C8DED4` | Order/payment/delivery confirmation |

### CTA Hierarchy
- **Buy Now** should be the strongest conversion button.
- **Add to Cart** should feel equally accessible but slightly less dominant.
- **Champagne** should never compete with the main purchase CTA.

---

## 3. Product, Pricing & Offer Colours

| Element | Recommended Colour | Reason |
| :--- | :--- | :--- |
| **Product name** | `#171B1B` | High readability |
| **Current price** | `#123B3A` | Brand-linked value emphasis |
| **MRP / old price** | `#707776` | Secondary hierarchy |
| **Discount amount** | `#C95F50` | Attention without generic bright red |
| **Premium label** | `#C7A66A` | Signals elevated collection |
| **Verified / authentic** | `#34745F` | Trust and reassurance |
| **Low stock** | `#C95F50` | Urgency |
| **In stock** | `#34745F` | Positive availability |
| **Out of stock** | `#707776` | Neutral, not alarming |

---

## 4. A–Z UI Colour Map

| Letter | Area | Colour Direction | Primary Token |
| :--- | :--- | :--- | :--- |
| **A** | Alerts | Terracotta | `#C95F50` |
| **B** | Badges | Champagne / Sage | `#C7A66A` |
| **C** | Cards | Pure White | `#FFFFFF` |
| **D** | Dropdowns | Pure White + Petrol active | `#FFFFFF` |
| **E** | Empty states | Mineral + Porcelain | `#F7F6F2` |
| **F** | Filters | White + Pale Sage selected | `#DDE9E4` |
| **G** | Global header | Deep Petrol | `#123B3A` |
| **H** | Headings | Carbon / Petrol | `#171B1B` |
| **I** | Inputs | White, Carbon text, Petrol focus | `#FFFFFF` |
| **J** | Journey / checkout | Petrol + Jade success | `#123B3A` |
| **K** | Key CTA | Deep Petrol | `#123B3A` |
| **L** | Links | Deep Petrol | `#123B3A` |
| **M** | Modals | White + Petrol header | `#FFFFFF` |
| **N** | Notifications | Status colours | `#DCE8EE` |
| **O** | Offers | Terracotta + Champagne | `#C95F50` |
| **P** | Product grid | Porcelain + White cards | `#F7F6F2` |
| **Q** | Quick view | White + Petrol CTA | `#FFFFFF` |
| **R** | Ratings | Champagne | `#C7A66A` |
| **S** | Search | White + Petrol focus | `#FFFFFF` |
| **T** | Tabs | Petrol active + Mineral inactive | `#123B3A` |
| **U** | User/account | Petrol + White | `#123B3A` |
| **V** | Verified | Deep Jade | `#34745F` |
| **W** | Wishlist | Petrol outline / Champagne active | `#123B3A` |
| **X** | eXception/error | Terracotta | `#C95F50` |
| **Y** | Year/collection labels | Champagne / Mineral | `#C7A66A` |
| **Z** | Zero-result states | Porcelain + Mineral | `#F7F6F2` |

---

## 5. Design Rules

1. **Product first.** Do not let the interface colour compete with watch photography.
2. **Champagne is a detail colour.** Keep it around 3–5% of the interface.
3. **Petrol owns the brand.** Use it consistently for navigation, primary actions and key states.
4. **Porcelain creates the premium environment.** Avoid pure-white everywhere; use warm white for major page surfaces.
5. **No rainbow UI.** Category colours may vary subtly, but the core brand palette remains constant.
6. **Avoid generic marketplace cues.** Do not build the interface around bright blue, orange or aggressive red sale blocks.
7. **Use status colours only for meaning.** Green means success/verified; terracotta means warning/error/attention.
8. **Keep CTAs predictable.** Customers should learn the colour language after a few interactions.

---

## 6. Developer Design Tokens

```css
:root {
  --brand-900: #123B3A;
  --accent-500: #C7A66A;
  --surface-50: #F7F6F2;
  --surface-0: #FFFFFF;
  --text-900: #171B1B;
  --text-500: #707776;
  --brand-100: #DDE9E4;
  --accent-100: #F2E9D8;
  --success-600: #34745F;
  --danger-600: #C95F50;
  --info-100: #DCE8EE;
  --premium-100: #E8E2EE;
}
```

> **Suggested primary conversion pair:**  
> `Buy Now` = Deep Petrol and `Add to Cart` = Deep Petrol or Jade depending on the product-page hierarchy. Champagne remains a premium accent rather than the main CTA.

---

## 7. Final Visual Direction

**Deep Petrol + Champagne + Porcelain** gives the marketplace a refined identity that can accommodate every watch category without copying the visual language of mass-market marketplaces.

The system is intentionally restrained: the UI creates trust and premium perception, while the watches remain the stars.
