export const TYPE_KEY = {
  NORMAL      : 'normal',
  FLAME       : 'flame', 
  WATER       : 'water',
  ELECTRICITY : 'electricity',
  GRASS       : 'grass',
  ICE         : 'ice',
  FIGHTING    : 'fighting',
  POISON      : 'poison',
  GROUND      : 'ground',
  FLYING      : 'flying',
  ESPER       : 'esper',
  INSECT      : 'insect',
  ROCK        : 'rock',
  GHOST       : 'ghost',
  DRAGON      : 'dragon',
  EVIL        : 'evil',
  STEEL       : 'steel',
  FAIRY       : 'fairy'
}
export const TYPE_NAME = {
  NORMAL      : 'ノーマル',
  FLAME       : 'ほのお', 
  WATER       : 'みず',
  ELECTRICITY : 'でんき',
  GRASS       : 'くさ',
  ICE         : 'こおり',
  FIGHTING    : 'かくとう',
  POISON      : 'どく',
  GROUND      : 'じめん',
  FLYING      : 'ひこう',
  ESPER       : 'エスパー',
  INSECT      : 'むし',
  ROCK        : 'いわ',
  GHOST       : 'ゴースト',
  DRAGON      : 'ドラゴン',
  EVIL        : 'あく',
  STEEL       : 'はがね',
  FAIRY       : 'フェアリー'
}
export const TYPE_NAME_OMIT = {
  NORMAL      : 'ノ',
  FLAME       : '炎', 
  WATER       : '水',
  ELECTRICITY : '電',
  GRASS       : '草',
  ICE         : '氷',
  FIGHTING    : '格',
  POISON      : '毒',
  GROUND      : '地',
  FLYING      : '飛',
  ESPER       : '超',
  INSECT      : '虫',
  ROCK        : '岩',
  GHOST       : '霊',
  DRAGON      : '竜',
  EVIL        : '悪',
  STEEL       : '鋼',
  FAIRY       : '妖'
}

export const replaceTypeName = (name: string) => {
  const result = Object.keys(TYPE_NAME).filter((key) => {
    return TYPE_NAME[key] === name
  })
  return result[0]
}