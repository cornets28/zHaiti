const redirectLink = (category: string) => {
  switch (category) {
    case "Espò":
      return "/espo";
    case "Kilti":
      return "/kilti";
    case "Politik":
      return "/politik";
    case "Edikasyon":
      return "/edikasyon";
    case "Lasyans":
      return "/lasyans";
    case "Relijyon":
      return "/relijyon";
    case "Sante":
      return "/sante";
    case "Espirityalite":
      return "/espirityalite";
    case "Teknoloji":
      return "/teknoloji";
    default:
      return "/politik";
  }
};

export default redirectLink;
