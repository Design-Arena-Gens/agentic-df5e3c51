export type MenuItem = {
  name: string;
  description: string;
  price: string;
  isSignature?: boolean;
};

export type MenuSection = {
  title: string;
  items: MenuItem[];
};

export const menuSections: MenuSection[] = [
  {
    title: "Entrées",
    items: [
      {
        name: "Tartare de Saumon aux Agrumes",
        description:
          "Saumon de l'Atlantique, yuzu, avocat, concombre, tuile de sésame noir.",
        price: "18€",
        isSignature: true,
      },
      {
        name: "Velouté de Potimarron",
        description: "Crème de potimarron rôti, éclats de châtaignes, huile de truffe.",
        price: "14€",
      },
      {
        name: "Burrata et Tomates Anciennes",
        description: "Burrata crémeuse de Bari, tomates anciennes, pesto de basilic.",
        price: "16€",
      },
    ],
  },
  {
    title: "Plats",
    items: [
      {
        name: "Filet de Bœuf Rossini",
        description: "Bœuf Charolais, foie gras poêlé, jus corsé, mousseline de céleri.",
        price: "32€",
        isSignature: true,
      },
      {
        name: "Risotto de Champignons Sauvages",
        description: "Risotto crémeux, pleurotes, girolles, parmesan affiné 24 mois.",
        price: "26€",
      },
      {
        name: "Cabillaud Rôti",
        description: "Cabillaud de ligne, beurre citronné, légumes verts glacés.",
        price: "28€",
      },
    ],
  },
  {
    title: "Desserts",
    items: [
      {
        name: "Soufflé au Chocolat Grand Cru",
        description: "Chocolat noir 70%, cœur fondant, glace à la vanille Bourbon.",
        price: "12€",
        isSignature: true,
      },
      {
        name: "Tarte Fine aux Pommes",
        description: "Pommes caramélisées, pâte feuilletée, caramel au beurre salé.",
        price: "10€",
      },
      {
        name: "Pavlova Exotique",
        description: "Meringue croustillante, chantilly passion, fruits exotiques frais.",
        price: "11€",
      },
    ],
  },
];
