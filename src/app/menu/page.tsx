import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Menu | Dumpling Girls",
  description:
    "Pan-fried and boiled dumpling combos, sides, and sauces from Dumpling Girls.",
};

interface MenuItem {
  name: string;
  description?: string;
  tags?: string[];
}

interface MenuCategory {
  name: string;
  note?: string;
  items: MenuItem[];
}

const menuCategories: MenuCategory[] = [
  {
    name: "Pan Fried Combos",
    note: "Each combo comes with either 3 spring rolls or 1 cucumber salad",
    items: [
      {
        name: "Chicken Dumpling Combo",
        description:
          "Filled with ground chicken breast, celery and onions. Includes 7 delicious, pan-fried dumplings. Served with your choice of our signature spicy sauce or truck vinegar and soy sauce on the side.",
      },
      {
        name: "Shrimp & Pork Dumpling Combo",
        description:
          "Filled with ground shrimp, pork, onions and cabbage. Includes 7 delicious, pan-fried dumplings. Served with your choice of our signature spicy sauce or truck vinegar and soy sauce on the side.",
      },
    ],
  },
  {
    name: "Boiled Dumpling Combos",
    note: "Each combo comes with 10 boiled dumplings and 2 spring rolls",
    items: [
      {
        name: "Boiled Pork Dumpling Combo",
        description:
          "Filled with pork, cabbage and onions. This 'famous' Sichuan dish comes with 10 delicious, boiled dumplings finished with cilantro and green onions. Served with our signature spicy sauce, poured over the top or on the side, or with our truck vinegar and soy sauce upon request.",
      },
      {
        name: "Boiled Chicken Dumpling Combo",
        description:
          "Filled with chicken breast, celery and onions. Includes 10 delicious, boiled dumplings finished with cilantro and green onions. Served with our signature Sichuan spicy sauce, poured over the top or on the side, or with our truck vinegar and soy sauce upon request.",
      },
      {
        name: "Boiled Veggie Dumpling Combo",
        description:
          "Filled with onions, cabbage, radish, potato and dried tofu. Includes 10 delicious, boiled dumplings finished with cilantro and green onions. Served with our signature Sichuan spicy sauce, poured over the top or on the side, or with our truck vinegar and soy sauce upon request.",
        tags: ["Vegan"],
      },
    ],
  },
  {
    name: "Kid's Menu",
    items: [
      {
        name: "4pc Pan Fried Chicken Dumplings + 2 Spring Rolls",
      },
    ],
  },
  {
    name: "Sides & Beverages",
    items: [
      {
        name: "Sesame Sweet Potato Balls (3pc)",
        tags: ["Vegan", "Gluten-Free"],
      },
      {
        name: "Coconut Lava Balls",
      },
      {
        name: "Cucumber Salad",
        tags: ["Vegan"],
      },
      {
        name: "Spring Roll",
        tags: ["Vegan"],
      },
      {
        name: "Soda / Gatorade",
      },
      {
        name: "Bottled Water",
      },
    ],
  },
  {
    name: "Sauces",
    items: [
      { name: "Spicy Chili Pepper Sauce" },
      { name: "Truck Vinegar and Soy Sauce" },
      { name: "Duck Sauce" },
    ],
  },
];

function MenuItemCard({ item }: { item: MenuItem }) {
  return (
    <article className="border border-brand-gray/10 bg-brand-surface p-5">
      <div className="flex flex-wrap items-baseline gap-2">
        <h3 className="text-lg font-semibold text-brand-gray">{item.name}</h3>
        {item.tags?.map((tag) => (
          <span
            key={tag}
            className="text-xs font-medium uppercase tracking-wide text-brand-red"
          >
            {tag}
          </span>
        ))}
      </div>
      {item.description ? (
        <p className="mt-2 text-sm leading-relaxed text-brand-gray-muted">
          {item.description}
        </p>
      ) : null}
    </article>
  );
}

function CategorySection({ category }: { category: MenuCategory }) {
  const hasDescriptions = category.items.some((item) => item.description);

  return (
    <section>
      <h2 className="text-2xl font-bold text-brand-red sm:text-3xl">
        {category.name}
      </h2>
      {category.note ? (
        <p className="mt-2 text-sm font-medium text-brand-gray-muted">
          {category.note}
        </p>
      ) : null}
      <div className="mt-2 h-0.5 w-12 bg-brand-gold" aria-hidden="true" />

      {hasDescriptions ? (
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {category.items.map((item) => (
            <MenuItemCard key={item.name} item={item} />
          ))}
        </div>
      ) : (
        <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {category.items.map((item) => (
            <li
              key={item.name}
              className="border-l-2 border-brand-gold bg-brand-surface-alt px-4 py-3"
            >
              <span className="font-medium text-brand-gray">{item.name}</span>
              {item.tags?.length ? (
                <span className="ml-2 text-xs font-medium uppercase tracking-wide text-brand-red">
                  ({item.tags.join(", ")})
                </span>
              ) : null}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default function MenuPage() {
  return (
    <div className="px-4 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <header className="mb-12 max-w-2xl">
          <h1 className="text-4xl font-bold text-brand-gray sm:text-5xl">
            Our Menu
          </h1>
          <div className="mt-3 h-1 w-16 bg-brand-gold" aria-hidden="true" />
          <p className="mt-6 text-lg text-brand-gray-muted">
            Authentic dumpling combos, sides, and sauces — crafted with fresh
            ingredients and Sichuan tradition.
          </p>
        </header>

        <div className="flex flex-col gap-16">
          {menuCategories.map((category) => (
            <CategorySection key={category.name} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
}
