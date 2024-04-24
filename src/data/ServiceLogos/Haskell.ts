import { Author, getCredit } from "../credits";

export const Haskell: IBrand = {
  name: "Haskell",
  logos: [
    {
      url: "https://raw.githubusercontent.com/SAWARATSUKI/ServiceLogos/main/Haskell/Haskell.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },

    {
      url: "https://raw.githubusercontent.com/SAWARATSUKI/ServiceLogos/main/Haskell/Haskell $.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: " $",
    },
  ],
};
