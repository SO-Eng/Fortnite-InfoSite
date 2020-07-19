const getItemRarity = (rarity) => {
    let rareColor = "";
    switch(rarity) {
        case "uncommon":
            return "cardCommon";
        case "rare":
            return "cardRare";
        case "epic":
            return "cardEpic";
        case "dc":
            return "cardDc";
        case "shadow series":
            return "cardShadow";
    };
};

export default getItemRarity;