export type Ressya<T extends "Kudari" | "Nobori"> = {
  Houkou: string;
  Syubetsu: T;
  Ressyabangou: string;
  Ressyamei: string;
  EkiJikoku: string;
};

export type Dia = {
  DiaName: string;
  Kudari: { Ressya: Ressya<"Kudari">[] };
  Nobori: { Ressya: Ressya<"Nobori">[] };
};

export const SenStyle = {
  Hasen: "SenStyle_Hasen",
  Jissen: "SenStyle_Jissen",
  Ittensasen: "SenStyle_Ittensasen",
} as const;
export type DiagramSenStyle = (typeof SenStyle)[keyof typeof SenStyle];

export type Ressyasyubetsu = {
  Syubetsumei: string;
  JikokuhyouMojiColor: string;
  JikokuhyouFontIndex: string;
  DiagramSenColor: string;
  DiagramSenStyle: DiagramSenStyle;
  DiagramSenIsBold?: "1";
  StopMarkDrawType: string;
};

export const Jikokukeisiki = {
  NoboriChaku: "Jikokukeisiki_NoboriChaku",
  Hatsuchaku: "Jikokukeisiki_Hatsuchaku",
  Hatsu: "Jikokukeisiki_Hatsu",
  KudariChaku: "Jikokukeisiki_KudariChaku",
} as const;
export type Ekijikokukeisiki =
  (typeof Jikokukeisiki)[keyof typeof Jikokukeisiki];

export type Eki = {
  Ekimei: string;
  Ekijikokukeisiki: Ekijikokukeisiki;
  Ekikibo: string;
};

export type Rosen = {
  Rosenmei: string;
  Eki: Eki[];
  Ressyasyubetsu: Ressyasyubetsu[];
  Dia: Dia[];
  KitenJikoku: string;
  DiagramDgrYZahyouKyoriDefault: string;
  Comment: string;
  DispProp: {
    JikokuhyouFont: string[];
    JikokuhyouVFont: string;
    DiaEkimeiFont: string;
    DiaJikokuFont: string;
    DiaRessyaFont: string;
    CommentFont: string;
    DiaMojiColor: string;
    DiaHaikeiColor: string;
    DiaRessyaColor: string;
    DiaJikuColor: string;
    EkimeiLength: string;
    JikokuhyouRessyaWidth: string;
  };
  FileTypeAppComment: string;
};

export type Oud = {
  FileType: string;
  Rosen: Rosen[];
};
