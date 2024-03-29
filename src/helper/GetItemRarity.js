const getItemRarity = (rarity) => {
    switch(rarity) {
        case "handmade":
            return "cardHandmade";
        case "common":
            return "cardCommon";
        case "uncommon":
            return "cardUncommon";
        case "rare":
            return "cardRare";
        case "epic":
            return "cardEpic";
        case "legendary":
            return "cardLegendary";
        case "mythic":
            return "cardMythic";
        case "transcendent":
            return "cardThranscendent";
        case "marvel":
            return "cardMarvel";
        case "dark":
            return "cardDark";
        case "dc":
            return "cardDc";
        case "frozen series":
            return "cardFrozen";
        case "lava series":
            return "cardLava";
        case "icon series":
            return "cardIcon";
        case "shadow series":
            return "cardShadow";
        case "star wars series":
            return "cardStarwars";
        case "slurp series":
            return "cardSlurp";
        default:
            return "cardHandmade";
    };
};

export default getItemRarity;