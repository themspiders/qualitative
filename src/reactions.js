const rrModel = {
  'ion': {
    'rea': {//main reagent
      'pro': "main product",
      'ppt': "if precipitates",
      'sol': "solution color",
      'rea2': "second reagent",
      'rea3': "third reagent",
      'pro2': "second product",
      'pro3': "third product",
      'coef': "reaction coefficients",
    },
  }, //ion + rea + rea2 + rea3 <-> pro + pro2 + pro3
};


const cations = {
  'cr3+': {
    color: 'verde',
    ltx: '{{{Cr}^{3+}}_{(ac)}}',
  },
  'mn2+': {
    color: 'rosado',
    ltx: '{{{Mn}^{2+}}_{(ac)}}',
  },
  'fe2+': {
    color: 'verde',
    ltx: '{{{Fe}^{2+}}_{(ac)}}',
  },
  'fe3+': {
    color: 'incoloro',
    ltx: '{{{Fe}^{3+}}_{(ac)}}',
  },
  'co2+': {
    color: 'rosado',
    ltx: '{{{Co}^{2+}}_{(ac)}}',
  },
  'ni2+': {
    color: 'verde',
    ltx: '{{{Ni}^{2+}}_{(ac)}}',
  },
  'cu2+': {
    color: 'celeste',
    ltx: '{{{Cu}^{2+}}_{(ac)}}',
  },
  'zn2+': {
    color: 'incoloro',
    ltx: '{{{Zn}^{2+}}_{(ac)}}',
  },
  'ag+': {
    color: 'incoloro',
    ltx: '{{{Ag}^{+}}_{(ac)}}',
  },
  'mg2+': {
    color: 'incoloro',
    ltx: '{{{Mg}^{2+}}_{(ac)}}',
  },
  'pb2+': {
    color: 'incoloro',
    ltx: '{{{Pb}^{2+}}_{(ac)}}',
  },
  'sn2+': {
    color: 'incoloro',
    ltx: '{{{Sn}^{2+}}_{(ac)}}',
  },
  'al3+': {
    color: 'incoloro',
    ltx: '{{{Al}^{3+}}_{(ac)}}',
  },
};

const crea = {
  'h2o': {
    ltx: '{{H_{2}O}_{(l)}}',
  },
  'ho-': {
    ltx: '{{{HO}^{-}}_{(ac)}}',
  },
  'ho-exc': {
    ltx: '{\\uparrow{{{HO}^{-}}_{(ac)}}}',
  },
  'ho-excexc': {
    ltx: '{\\uparrow\\uparrow{{{HO}^{-}}_{(ac)}}}',
  },
  'o2': {
    ltx: '{{O_{2}}_{(g)}}',
  },
  'h2o2': {
    ltx: '{{H_{2}O_{2}}_{(ac)}}',
  },
  'nh3': {
    ltx: '{{NH_{3}}_{(ac)}}',
  },
  'nh3exc': {
    ltx: '{\\uparrow{{NH_{3}}_{(ac)}}}',
  },
  's2-': {
    ltx: '{{S^{2-}}_{(ac)}}',
  },
  'so42-': {
    ltx: '{{{SO_{4}}^{2-}}_{(ac)}}',
  },
  'dmg': {
    ltx: '{DMG}',
  },
  'dmg(alc)': {
    ltx: '{{DMG}_{(alc)}}',
  },
  'cn-': {
    ltx: '{{CN}^{-}_{(ac)}}',
  },
  //fe2+
  '[fe(cn)6]3-': {
    ltx: '{{{Fe{(CN)}_{6}}^{3-}}_{(ac)}}',
  },
  //co2+
  'scn-': {
    ltx: '{{{SCN}^{-}}_{(ac)}}',
  },
  //cu2+
  'i-': {
    ltx: '{{I^{-}}_{(ac}}',
  },
  'zn': {
    ltx: '{{Zn}_{(s)}}',
  },
  '[fe(cn)6]4-': {
    ltx: '{{{[Fe{(CN)}_{6}]}^{4-}}_{(ac)}}',
  },
  //zn2+
  '[fe(scn)6]4-': {
    ltx: '{{{[Fe{(SCN)}_{6}]}^{4-}}_{(ac)}}',
  },
  //ag+
  'aldehido': {
    ltx: '{aldehído}',
  },
  'cl-': {
    ltx: '{{{Cl}^{-}}_{(ac)}}',
  },
  'br-': {
    ltx: '{{{Br}^{-}}_{(ac)}}',
  },
  'aso43-': {
    ltx: '{{{AsO_{4}}^{3-}}_{(ac)}}',
  },
  'cro42-': {
    ltx: '{{{CrO_{4}}^{-}}_{(ac)}}',
  },
  //mg2+
  'hpo42-': {
    ltx: '{{{HPO_{4}}^{2-}}_{(ac)}}',
  },
  //pb2+
  'calor': {
    ltx: '{calor}',
  },
  'cro4-': {
    ltx: '{{CrO_{4}}^{-}_{(ac)}}',
  },
  //sn2+
  'h+': {
    ltx: '{{H^{+}}_{(ac)}}',
  },
  'h+exc': {
    ltx: '{\\uparrow{{H^{+}}_{(ac)}}}',
  },
  'i3-': {
    ltx: '{{{I_{3}}^{-}}_{(ac)}}',
  },
  'no3-': {
    ltx: '{{{NO_{3}}^{-}}_{(ac)}}',
  },
};

const cpro = {
  'h2o': {
    ltx: '{{H_{2}O}_{(l)}}',
    color: 'incoloro',
  },
  'nh4+': {
    ltx: '{{{NH_{4}}^{+}}_{(ac)}}',
    color: 'incoloro',
  },
  'no3-': {
    ltx: '{{{NO_{3}}^{-}}_{(ac)}}',
    color: 'incoloro',
  },
  //cr3+
  'cr(oh)3': {
    ltx: '{{Cr{(OH)}_{3}}_{(s)}}',
    color: 'gris_verde',
  },
  'cr(oh)4-': {
    ltx: '{{{Cr{(OH)}_{4}}^{-}}_{(ac)}}',
    color: 'verde',
  },
  'cro2-': {
    ltx: '{{{CrO_{2}}^{-}}_{(ac)}}',
    color: 'verde',
  },
  'cro42-': {
    ltx: '{{{CrO_{4}}^{2-}}_{(ac)}}',
    color: 'amarillo',
  },
  '[cr(nh3)6]3+': {
    ltx: '{{[Cr{(NH_{3})}_{6}]}_{(ac)}}',
    color: 'malva',
  },
  //mn2+
  'mn(oh)2': {
    ltx: '{{Mn{(OH)}_{2}}_{(s)}}',
    color: 'blanco',
  },
  'mn2o3.nh2o': {
    ltx: '{{{{Mn}_{2}O_{3}}.{nH_{2}O}}_{(s)}}',
    color: 'pardo',
  },
  'mn2o3': {
    ltx: '{{{Mn}_{2}O_{3}}_{(s)}}',
    color: 'pardo',
  },
  'mno(oh)2': {
    ltx: '{{MnO{(OH)}_{2}}_{(s)}}',
    color: 'pardo',
  },
  'mno2': {
    ltx: '{{MnO_{2}}_{(s)}}',
    color: 'marron',
  },
  'mns': {
    ltx: '{{MnS}_{(s)}}',
    color: 'salmon',
  },
  'mnso4': {
    ltx: '{{MnSO_{4}}_{(s)}}',
    color: 'rosado',
  },
  //fe2+
  'fe(oh)2': {
    ltx: '{{Fe{(OH)}_{2}}_{(s)}}',
    color: 'blanco',
  },
  'fe(oh)3': {
    ltx: '{{Fe{(OH)}_{3}}_{(s)}}',
    color: 'pardo',
  },
  '[fe(dmg)2]2+': {
    ltx: '{{{[Fe{(DMG)}_{2}]}^{2+}}_{(ac)}}',
    color: 'rojo',
  },
  'fe(cn)2': {
    ltx: '{{Fe{(CN)}_{2}}_{(s)}}',
    color: 'pardo',
  },
  '[fe(cn)6]4-': {
    ltx: '{{{Fe{(CN)}_{6}}^{4-}}_{(ac)}}',
    color: 'amarillo',
  },
  //fe3+
  '[fe(scn)6]3-': {
    ltx: '{{{[Fe{(SCN)}_{6}]}^{3-}}_{(ac)}}',
    color: 'rojo_sangre',
  },
  'fe(cn)3': {
    ltx: '{{Fe{(CN)}_{3}}_{(s)}}',
    color: 'pardo',
  },
  '[fe(cn)6]3-': {
    ltx: '{{{Fe{(CN)}_{6}}^{3-}}_{(ac)}}',
    color: 'amarillo',
  },
  'fe[fe(cn)6]-': {
    ltx: '{{{Fe[Fe(CN)6]}^{-}}_{(s)}}',
    color: 'azul',
  },
  'fe2[fe(cn)6]': {
    ltx: '{{{Fe}_{2}[Fe(CN)6]}_{(s)}}',
    color: 'negro',
  },
  //co2+
  'co(oh)2': {
    ltx: '{{Co{(OH)}_{2}}_{(s)}}',
    color: 'rojo_rosa',
  },
  'co(oh)3': {
    ltx: '{{Co{(OH)}_{3}}_{(s)}}',
    color: 'negro',
  },
  'co(oh)cl': {
    ltx: '{{Co(OH)Cl}_{(s)}}',
    color: 'turquesa',
  },
  '[co(nh3)6]2+': {
    ltx: '{{{[Co{(NH_{3})}_{6}]}^{2+}}_{(ac)}}',
    color: 'pardo',
  },
  '[co(nh3)6]3+': {
    ltx: '{{{[Co{(NH_{3})}_{6}]}^{3+}}_{(ac)}}',
    color: 'rojo',
  },
  '[co(scn)3]-': {
    ltx: '{{{[Co{(SCN)}_{3}]}^{-}}_{(ac)}}',
    color: 'azul',
  },
  '[co(scn)4]2-': {
    ltx: '{{{[Co{(SCN)}_{4}]}^{2-}}_{(ac)}}',
    color: 'azul',
  },
  //ni2+
  'ni(oh)2': {
    ltx: '{{Ni{(OH)}_{2}}_{(s)}}',
    color: 'verde',
  },
  '[ni(nh3)4]2+': {
    ltx: '{{{[Ni{(NH_{3})}_{4}]}^{2+}}_{(ac)}}',
    color: 'azul',
  },
  '[ni(nh3)6]2+': {
    ltx: '{{{[Ni{(NH_{3})}_{6}]}^{2+}}_{(ac)}}',
    color: 'azul',
  },
  '[ni(dmg)2]': {
    ltx: '{{[Ni{(DMG)}_{2}]}_{(s)}}',
    color: 'rojo_rosa',
  },
  'nis': {
    ltx: '{{NiS}_{(s)}}',
    color: 'negro',
  },
  //cu2+
  'cu(oh)2': {
    ltx: '{{Cu{(OH)}_{2}}_{(s)}}',
    color: 'azul',
  },
  'cuo22-': {
    ltx: '{{{CuO_{2}}^{2-}}_{(s)}}',
    color: 'azul',
  },
  'cuo': {
    ltx: '{{CuO}_{(s)}}',
    color: 'negro',
  },
  '[cu(nh3)4]2+': {
    ltx: '{{{[Cu{(NH_{3})}_{4}]}^{2+}}_{(ac)}}',
    color: 'azul',
  },
  'cui': {
    ltx: '{{CuI}_{(s)}}',
    color: 'blanco',
  },
  'i2': {
    ltx: '{{I_{2}}_{(l)}}',
    color: null,
  },
  '[cu(dmg)2]2+': {
    ltx: '{{{[Cu{(DMG)}_{2}]}^{2+}}_{(ac)}}',
    color: 'verde',
  },
  //cu + zn2+
  'cu': {
    ltx: '{{Cu}_{(s)}}',
    color: 'rojo',
  },
  'zn2+': {
    ltx: '{{{Zn}^{2+}}_{(ac)}}',
    color: 'incoloro',
  },
  'cu2[fe(cn)6]': {
    ltx: '{{Cu_{2}[Fe{(CN)}_{6}]}_{(s)}}',
    color: 'pardo',
  },
  //zn2+
  'zn(oh)2': {
    ltx: '{{Zn{(OH)}_{2}}_{(s)}}',
    color: 'blanco',
  },
  'zno22-': {
    ltx: '{{{ZnO_{2}}^{2-}}_{(s)}}',
    color: 'incoloro',
  },
  '[zn(oh)4]2-': {
    ltx: '{{{[Zn{(OH)}_{4}]}^{2-}}_{(ac)}}',
    color: 'incoloro',
  },
  '[zn(nh3)4]2+': {
    ltx: '{{{[Zn{(NH_{3})}]}^{2+}}_{(ac)}}',
    color: 'incoloro',
  },
  'zn2[fe(scn)6]': {
    ltx: '{{Zn_{2}[Fe{(SCN)}_{6}]}_{(s)}}',
    color: 'amarillo',
  },
  'zn2[fe(cn)6]': {
    ltx: '{{Zn_{2}[Fe{(CN)}_{6}]}_{(s)}}',
    color: 'blanco',
  },
  //ag+
  'ag2o': {
    ltx: '{{{Ag}_{2}O}_{(s)}}',
    color: 'marron',
  },
  'ag(oh)': {
    ltx: '{{Ag(OH)}_{(s)}}',
    color: 'blanco',
  },
  '[ag(nh3)]+': {
    ltx: '{{[Ag{(NH_{3})}]}^{-}_{(ac)}}',
    color: 'incoloro',
  },
  '[ag(nh3)2]+': {
    ltx: '{{{[Ag{(NH_{3})}_{2}]}^{+}}_{(ac)}}',
    color: 'incoloro',
  },
  //espejo
  'ag2s': {
    ltx: '{{Ag_{2}S}_{(s)}}',
    color: 'negro',
  },
  'agcl': {
    ltx: '{{AgCl}_{(s)}}',
    color: 'blanco',
  },
  'agbr': {
    ltx: '{{AgBr}_{(s)}}',
    color: 'blanco',
  },
  'agi': {
    ltx: '{{AgI}_{(s)}}',
    color: 'amarillo',
  },
  'ag3aso4': {
    ltx: '{{{Ag}_{3}AsO_{4}}_{(s)}}',
    color: 'pardo',
  },
  'ag2cro4': {
    ltx: '{{{Ag}_{2}CrO_{4}}_{(s)}}',
    color: 'rojo',
  },
  //mg2+
  'mg(oh)2': {
    ltx: '{{Mg{(OH)}_{2}}_{(s)}}',
    color: 'blanco',
  },
  'mgnh4po4': {
    ltx: '{{MgNH_{4}PO_{4}}_{(s)}}',
    color: 'blanco',
  },
  //pb2+
  'pb(oh)2': {
    ltx: '{{Pb{(OH)}_{2}}_{(s)}}',
    color: 'blanco',
  },
  '[pb(oh)4]2+': {
    ltx: '{{{[Pb{(OH)}_{4}]}^{2-}}_{(ac)}}',
    color: 'incoloro',
  },
  'pb2o(no3)2': {
    ltx: '{{{Pb}_{2}O{(NO_{3})}_{2}}_{(s)}}',
    color: 'blanco',
  },
  'pbi2': {
    ltx: '{{PbI_{2}}_{(s)}}',
    color: 'amarillo',
  },
  '[pb(oh)4]2-': {
    ltx: '{{{[Pb{(OH)}_{4}]}^{2-}}_{(ac)}}',
    color: 'incoloro',
  },
  //lluvia de oro
  'pbs': {
    ltx: '{{PbS}_{(s)}}',
    color: 'negro',
  },
  //pb + zn2+
  'pb': {
    ltx: '{{Pb}_{(s)}}',
    color: 'blanco',
  },
  'pbcro4': {
    ltx: '{{PbCrO_{4}}_{(s)}}',
    color: 'amarillo',
  },
  //sn2+
  'sn(oh)2': {
    ltx: '{{Sn{(OH)}_{2}}_{(s)}}',
    color: 'blanco',
  },
  '[sn(oh)4]2-': {
    ltx: '{{{[Sn{(OH)}_{4}]}^{2-}}_{(s)}}',
    color: 'blanco',
  },
  'sns': {
    ltx: '{{SnS}_{(s)}}',
    color: 'pardo',
  },
  '[sncl4]2-': {
    ltx: '{{{[Sn{Cl}_{4}]}^{2-}}_{(ac)}}',
    color: 'incoloro',
  },
  'h2s': {
    ltx: '{{H_{2}S}_{(ac)}}',
    color: 'incoloro',
  },
  //sn4+ + i-
  'sn4+': {
    ltx: '{{{Sn}^{4+}}_{(ac)}}',
    color: 'incoloro',
  },
  'i-': {
    ltx: '{{I^{-}}_{(ac)}}',
    color: 'incoloro',
  },
  'X': {
    ltx: '{X}',
  },
  'al3+': {
    ltx: '{{{Al}^{3+}}_{(ac)}}',
    color: 'incoloro',
  },
  'al(oh)3': {
    ltx: '{{{Al{(OH)}_{3}}}_{(s)}}',
    color: 'blanco',
  },
  'al(oh)4-': {
    ltx: '{{{{Al{(OH)}_{4}}}^{-}}_{(s)}}',
    color: 'incoloro',
  },
  'cl-': {
    ltx: '{{{Cl}^{-}}_{(ac)}}',
    color: 'incoloro',
  },
  'ho-': {
    ltx: '{{{HO}^{-}}_{(ac)}}',
    color: 'incoloro',
  },
};

const rrs = {
  //cr3+
  'cr3+': {
    'ho-': {
      pro: 'cr(oh)3',
      ppt: true,
      sol: 'verde',
      coef: {'cr3+': 1, 'ho-': 3, 'cr(oh)3': 1},
    },
    'ho-exc': {
      pro: 'cr(oh)4-',
      ppt: false,
      sol: 'verde',
      coef: {'cr3+': 1, 'ho-exc': 4, 'cr(oh)4-': 1},
    },
    'nh3': {
      pro: 'cr(oh)3',
      ppt: true,
      sol: 'verde',
      rea2: 'h2o',
      pro2: 'nh4+',
      coef: {'cr3+': 1, 'nh3': 3, 'h2o': 3, 'cr(oh)3': 1, 'nh4+': 3},
    },
    'nh3exc': {
      pro: '[cr(nh3)6]3+',
      ppt: false,
      sol: 'malva',
      coef: {'cr3+': 1, 'nh3exc': 6, '[cr(nh3)6]3+': 1},
    },
  },
  'cro2-': {
    'o2': {
      pro: 'X',
    },
    'h2o2': {
      sol: 'amarillo',
      ppt: false,
      pro: 'cro42-',
      rea2: 'ho-',
      pro2: 'h2o',
      coef: {'cro2-': 2, 'h2o2': 3, 'ho-': 2, 'cro42-': 2, 'h2o': 4}
    },
  },
  'cr(oh)3': {
    'ho-exc': {
      pro: 'cr(oh)4-',
      ppt: false,
      sol: 'verde',
      coef: {'cr(oh)3': 1, 'ho-exc': 1, 'cr(oh)4-': 1},
    },
    'nh3exc': {
      pro: '[cr(nh3)6]3+',
      ppt: false,
      sol: 'malva',
      pro2: 'ho-',
      coef: {'cr(oh)3': 1, 'nh3exc': 6, '[cr(nh3)6]3+': 1, 'ho-': 3},
    },
    'o2': {
      pro: 'X',
    },
    'h2o2': {
      pro: 'cro42-',
      ppt: false,
      sol: 'amarillo',
      rea2: 'ho-',
      pro2: 'h2o',
      coef: {'cr(oh)3': 2, 'h2o2': 3, 'ho-': 4, 'cro42-': 2, 'h2o': 8},
    },
  },
  'cr(oh)4-': {
    'o2': {
      pro: 'X',
    },
    'h2o2': {
      pro: 'cro42-',
      ppt: false,
      sol: 'amarillo',
      rea2: 'ho-',
      pro2: 'h2o',
      coef: {'cr(oh)4-': 2, 'h2o2': 3, 'ho-': 2, 'cro42-': 2, 'h2o': 8},
    },
  },
  //mn2+
  'mn2+': {
    'ho-': {
      pro: 'mn(oh)2',
      ppt: true,
      sol: 'marron',
      coef: {'mn2+': 1, 'ho-': 2, 'mn(oh)2': 1},
    },
    'ho-exc': {
      pro: 'mn(oh)2',
      ppt: true,
      sol: 'marron',
      coef: {'mn2+': 1, 'ho-exc': 2, 'mn(oh)2': 1},
    },
    'nh3': {
      ppt: true,
      pro: 'mn(oh)2',
      sol: 'marron',
      rea2: 'h2o',
      pro2: 'nh4+',
      coef: {'mn2+': 1, 'nh3': 2, 'h2o': 2, 'mn(oh)2': 1, 'nh4+': 2},
    },
    'nh3exc': {
      ppt: true,
      pro: 'mn(oh)2',
      sol: 'marron',
      rea2: 'h2o',
      pro2: 'nh4+',
      coef: {'mn2+': 1, 'nh3exc': 2, 'h2o': 2, 'mn(oh)2': 1, 'nh4+': 2},
    },
    's2-': {
      pro: 'mns',
      ppt: true,
      sol: null,
      coef: {'mn2+': 1, 's2-': 1, 'mns': 1},
    },
    'so42-': {
      pro: 'mnso4',
      ppt: true,
      sol: null,
      coef: {'mn2+': 1, 'so42-': 1, 'mnso4': 1},
    },
  },
  'mn(oh)2': {
    'o2': {
      pro: 'mn2o3',
      ppt: true,
      sol: 'pardo',
      pro2: 'h2o',
      coef: {'mn(oh)2': 4, 'o2': 1, 'mn2o3': 2, 'h2o': 4},
    },
    'h2o2': {
      pro: 'mno2',
      ppt: true,
      sol: 'pardo',
      pro2: 'h2o',
      coef: {'mn(oh)2': 1, 'h2o2': 1, 'mno2': 1, 'h2o': 2},
    },
  },
  'mns': {
    'o2': {
      pro: 'mno2',
      ppt: true,
      sol: null,
      coef: {'mns': 1, 'o2': 2, 'mno2': 1, 'so2': 1},
    },
  },
  //fe2+
  'fe2+': {
    'ho-': {
      pro: 'fe(oh)2',
      ppt: true,
      sol: 'verde',
      coef: {'fe2+': 1, 'ho-': 2, 'fe(oh)2': 1},
    },
    'ho-exc': {
      pro: 'fe(oh)2',
      ppt: true,
      sol: 'verde',
      coef: {'fe2+': 1, 'ho-exc': 2, 'fe(oh)2': 1},
    },
    'nh3': {
      pro: 'fe(oh)2',
      ppt: true,
      sol: 'verde',
      rea2: 'h2o',
      pro2: 'nh4+',
      coef: {'fe2+': 1, 'nh3': 2, 'h2o': 3, 'fe(oh)2': 1, 'nh4+': 2},
    },
    'nh3exc': {
      pro: 'fe(oh)2',
      ppt: true,
      sol: 'verde',
      rea2: 'h2o',
      pro2: 'nh4+',
      coef: {'fe2+': 1, 'nh3exc': 2, 'h2o': 3, 'fe(oh)2': 1, 'nh4+': 2},
    },
    'dmg(alc)': {
      pro: '[fe(dmg)2]2+',
      ppt: false,
      sol: 'rojo',
      coef: {'fe2+': 1, 'dmg(alc)': 1, '[fe(dmg)2]2+': 1},
    },
    'cn-': {
      pro: 'fe(cn)2',
      ppt: true,
      sol: null,
      coef: {'fe2+': 1, 'cn-': 2, 'fe(cn)2': 1},
    },
    '[fe(cn)6]4-': {
      pro: 'fe2[fe(cn)6]',
      ppt: true,
      sol: 'negro',
      coef: {'fe2+': 2, '[fe(cn)6]4-': 1, 'fe2[fe(cn)6]': 1},
    },
    //Turnbull's blue
    '[fe(cn)6]3-': {
      pro: 'fe[fe(cn)6]-',
      ppt: true,
      sol: 'azul',
      coef: {'fe2+': 1, '[fe(cn)6]3-': 1, 'fe[fe(cn)6]-': 1},
    },
  },
  'fe(oh)2': {
    'o2': {
      pro: 'fe(oh)3',
      ppt: true,
      sol: 'pardo',
      rea2: 'h2o',
      coef: {'fe(oh)2': 4, 'h2o': 2, 'o2': 1, 'fe(oh)3': 4},
    },
    'h2o2': {
      pro: 'fe(oh)3',
      ppt: true,
      sol: 'pardo',
      coef: {'fe(oh)2': 2, 'h2o2': 1, 'fe(oh)3': 2},
    },
  },
  'fe(cn)2': {
    'cn-': {
      pro: '[fe(cn)6]4-',
      ppt: false,
      sol: 'amarillo',
      coef: {'fe(cn)2': 1, 'cn-': 4, '[fe(cn)6]4-': 1},
    },
  },
  //fe3+
  'fe3+': {
    'ho-': {
      pro: 'fe(oh)3',
      ppt: true,
      sol: 'pardo',
      coef: {'fe3+': 1, 'ho-': 3, 'fe(oh)3': 1},
    },
    'ho-exc': {
      pro: 'fe(oh)3',
      ppt: true,
      sol: 'pardo',
      coef: {'fe3+': 1, 'ho-exc': 3, 'fe(oh)3': 1},
    },
    'nh3': {
      pro: 'fe(oh)3',
      ppt: true,
      sol: 'pardo',
      rea2: 'h2o',
      pro2: 'nh4+',
      coef: {'fe3+': 1, 'nh3': 3, 'h2o': 3, 'fe(oh)3': 1, 'nh4+': 3},
    },
    'nh3exc': {
      pro: 'fe(oh)3',
      ppt: true,
      sol: 'pardo',
      rea2: 'h2o',
      pro2: 'nh4+',
      coef: {'fe3+': 1, 'nh3exc': 3, 'h2o': 3, 'fe(oh)3': 1, 'nh4+': 3},
    },
    'scn-': {
      pro: '[fe(scn)6]3-',
      ppt: false,
      sol: 'rojo_sangre',
      coef: {'fe3+': 1, 'scn-': 6, '[fe(scn)6]3-': 1},
    },
    'cn-': {
      pro: 'fe(cn)3',
      ppt: true,
      sol: null,
      coef: {'fe3+': 1, 'cn-': 3, 'fe(cn)3': 1},
    },
    //Prussian blue
    '[fe(cn)6]4-': {
      pro: 'fe[fe(cn)6]-',
      ppt: true,
      sol: 'azul',
      coef: {'fe3+': 1, '[fe(cn)6]4-': 1, 'fe[fe(cn)6]-': 1},
    },
  },
  'fe(cn)3': {
    'cn-': {
      pro: '[fe(cn)6]3-',
      ppt: false,
      sol: 'amarillo',
      coef: {'fe(cn)3': 1, 'cn-': 3, '[fe(cn)6]3-': 1},
    },
  },
  //co2+
  'co2+': {
    'ho-': {
      pro: 'co(oh)2',
      ppt: true,
      sol: 'azul',
      coef: {'co2+': 1, 'ho-': 2, 'co(oh)2': 1},
    },
    'ho-exc': {
      pro: 'co(oh)2',
      ppt: true,
      sol: 'azul',
      coef: {'co2+': 1, 'ho-exc': 2, 'co(oh)2': 1},
    },
    'nh3': {
      pro: 'co(oh)2',
      ppt: true,
      sol: 'azul',
      rea2: 'h2o',
      pro2: 'nh4+',
      coef: {'co2+': 1, 'nh3': 2, 'h2o': 2, 'co(oh)2': 1, 'nh4+': 2},
    },
    'nh3exc': {
      pro: '[co(nh3)6]2+',
      ppt: false,
      sol: 'pardo',
      coef: {'co2+': 1, 'nh3exc': 6, '[co(nh3)6]2+': 1},
    },
    'scn-': {
      pro: '[co(scn)4]2-',
      ppt: false,
      sol: 'azul',
      coef: {'co2+': 1, 'scn-': 4, '[co(scn)4]2-': 1},
    },
  },
  'co(oh)2': {
    'o2': {
      pro: 'co(oh)3',
      ppt: true,
      sol: 'negro',
      rea2: 'h2o',
      coef: {'co(oh)2': 4, 'o2': 1, 'h2o': 2, 'co(oh)3': 4},
    },
    'h2o2': {
      pro: 'co(oh)3',
      ppt: true,
      sol: 'negro',
      coef: {'co(oh)2': 2, 'h2o2': 1, 'co(oh)3': 2},
    },
  },
  '[co(nh3)6]2+': {
    'h2o2': {
      pro: '[co(nh3)6]3+',
      ppt: false,
      sol: 'rojo',
      pro2: 'ho-',
      coef: {'[co(nh3)6]2+': 2, 'h2o2': 1, '[co(nh3)6]3+': 2, 'ho-': 2},
    },
    'o2': {
      pro: '[co(nh3)6]3+',
      ppt: false,
      sol: 'rojo',
      rea2: 'h2o',
      pro2: 'ho-',
      coef: {'[co(nh3)6]2+': 4, 'o2': 1, 'h2o': 2, '[co(nh3)6]3+': 4, 'ho-': 4},
    },
  },
  //ni2+
  'ni2+': {
    'ho-': {
      pro: 'ni(oh)2',
      ppt: true,
      sol: 'verde',
      coef: {'ni2´': 1, 'ho-': 2, 'ni(oh)2': 1},
    },
    'ho-exc': {
      pro: 'ni(oh)2',
      ppt: true,
      sol: 'verde',
      coef: {'ni2´': 1, 'ho-exc': 2, 'ni(oh)2': 1},
    },
    'nh3': {
      pro: 'ni(oh)2',
      ppt: true,
      sol: 'verde',
      rea2: 'h2o',
      pro2: 'nh4+',
      coef: {'ni2+': 1, 'nh3': 2, 'h2o': 2, 'ni(oh)2': 1, 'nh4+': 2},
    },
    'nh3exc': {
      pro: '[ni(nh3)6]2+',
      ppt: false,
      sol: 'azul',
      pro2: 'ho-',
      coef: {'ni2+': 1, 'nh3exc': 6, 'h2o': 2, '[ni(nh3)6]2+': 1, 'ho-': 2},
    },
    'dmg(alc)': {
      pro: '[ni(dmg)2]',
      ppt: true,
      sol: 'rojo_rosa',
      coef: {'ni2+': 1, 'dmg(alc)': 2, '[ni(dmg)2]': 1}, 
    },
    's2-': {
      pro: 'nis',
      ppt: true,
      sol: 'negro',
      coef: {'ni2+': 1, 's2-': 1, 'nis': 1},
    },
  },
  'ni(oh)2': {
    'nh3': {
      pro: '[ni(nh3)6]2+',
      ppt: false,
      sol: 'azul',
      pro2: 'ho-',
      coef: {'ni(oh)2': 1, 'nh3': 6, '[ni(nh3)6]2+': 1, 'ho-': 2},
    },
  },
  //cu2+
  'cu2+': {
    'ho-': {
      pro: 'cu(oh)2',
      ppt: true,
      sol: 'celeste',
      coef: {'cu2+': 1, 'ho-': 2, 'cu(oh)2': 1},
    },
    'nh3': {
      pro: 'cu(oh)2',
      ppt: true,
      sol: 'celeste',
      rea2: 'h2o',
      pro2: 'nh4+',
      coef: {'cu2+': 1, 'nh3': 2, 'h2o': 3, 'cu(oh)2': 1, 'nh4+': 2},
    },
    'nh3exc': {
      pro: '[cu(nh3)4]2+',
      ppt: false,
      sol: 'azul',
      coef: {'cu2+': 1, 'nh3exc': 4, '[cu(nh3)4]2+': 1},
    },
    'i-': {
      pro: 'cui',
      ppt: true,
      sol: null,
      pro2: 'i2',
      coef: {'cu2+': 1, 'i-': 4, 'cui': 2, 'i2': 1},
    },
    'dmg(alc)': {
      pro: '[cu(dmg)2]2+',
      ppt: false,
      sol: 'verde',
    },
    'zn': {
      pro: 'cu',
      ppt: true,
      sol: null,
      pro2: 'zn2+',
      coef: {'cu2+': 1, 'zn': 1, 'cu': 1, 'zn2+': 1},
    },
    '[fe(cn)6]4-': {
      pro: 'cu2[fe(cn)6]',
      ppt: true,
      sol: 'pardo',
    },
  },
  'cu(oh)2': {
    'ho-excexc': {
      pro: 'cuo22-',
      ppt: false,
      sol: 'azul',
      pro2: 'h2o',
      coef: {'cu(oh)2': 1, 'ho-excexc': 2, 'cuo22-': 1, 'h2o': 2},
    },
    'nh3exc': {
      pro: '[cu(nh3)4]2+',
      ppt: false,
      sol: 'azul',
      pro2: 'ho-',
      coef: {'cu(oh)2': 1, 'nh3exc': 4, '[cu(nh3)4]2+': 1, 'ho-': 2},
    },
  },
  //zn2+
  'zn2+': {
    'ho-': {
      pro: 'zn(oh)2',
      ppt: true,
      sol: 'blanco',
      coef: {'zn2+': 1, 'oh': 2, 'zn(oh)2': 1},
    },
    'ho-exc': {
      pro: '[zn(oh)4]2-',
      ppt: false,
      sol: 'incoloro',
      coef: {'zn2+': 1, 'ho-exc': 4, '[zn(oh)4]2-': 1},
    },
    'nh3': {
      pro: 'zn(oh)2',
      ppt: true,
      sol: 'blanco',
      rea2: 'h2o',
      pro2: 'nh4+',
      coef: {'zn2+': 1, 'nh3': 2, 'h2o': 2, 'zn(oh)2': 1, 'nh4+': 2},
    },
    'nh3exc': {
      pro: '[zn(nh3)4]2+',
      ppt: false,
      sol: 'incoloro',
      pro2: 'ho-',
      coef: {'zn2+': 1, 'nh3exc': 1, '[zn(nh3)4]2+': 1, 'ho-': 1},
    },
    '[fe(scn)6]4-': {
      pro: 'zn2[fe(scn)6]',
      ppt: true,
      sol: 'amarillo',
      coef: {'zn2+': 2, '[fe(scn)6]4-': 1, 'zn2[fe(scn)6]': 1},
    },
    '[fe(cn)6]4-': {
      pro: 'zn2[fe(cn)6]',
      ppt: true,
      sol: 'blanco',
      coef: {'zn2+': 2, '[fe(cn)6]4-': 1, 'zn2[fe(cn)6]': 1},
    },
  },
  'zn(oh)2': {
    'ho-': {
      pro: '[zn(oh)4]2-',
      ppt: false,
      sol: 'incoloro',
      coef: {'zn(oh)2': 1, 'ho-': 2, '[zn(oh)4]2-': 1},
    },
    'nh3': {
      pro: '[zn(nh3)4]2+',
      ppt: false,
      sol: 'incoloro',
      pro2: 'ho-',
      coef: {'zn(oh)2': 1, 'nh3': 4, '[zn(nh3)4]2+': 1, 'ho-': 2},
    },
  },
  //ag+
  'ag+': {
    'ho-': {
      pro: 'ag2o',
      ppt: true,
      sol: 'marron',
      pro2: 'h2o',
      coef: {'ag+': 2, 'ho-': 2, 'ag2o': 1, 'h2o': 1},
    },
    'ho-exc': {
      pro: 'ag2o',
      ppt: true,
      sol: 'marron',
      pro2: 'h2o',
      coef: {'ag+': 2, 'ho-exc': 2, 'ag2o': 1, 'h2o': 1},
    },
    'nh3': {
      pro: 'ag2o',
      ppt: true,
      sol: 'marron',
      rea2: 'h2o',
      pro2: 'nh4+',
      coef: {'ag+': 2, 'nh3': 2, 'h2o': 2, 'ag2o': 1, 'nh4+': 2},
    },
    'nh3exc': {
      pro: '[ag(nh3)2]+',
      ppt: true,
      sol: 'incoloro',
      rea2: 'h2o',
      pro2: 'ho-',
      coef: {'ag2o': 1, 'nh3exc': 4, 'h2o': 1, '[ag(nh3)2]+': 2, 'ho-': 2},
    },
    's2-': {
      pro: 'ag2s',
      ppt: true,
      sol: null,
      coef: {'ag+': 2, 's2-': 1, 'ag2s': 1},
    },
    'cl-': {
      pro: 'agcl',
      ppt: true,
      sol: null,
      coef: {'ag+': 1, 'cl-': 1, 'agcl': 1},
    },
    'br-': {
      pro: 'agbr',
      ppt: true,
      sol: null,
      coef: {'ag+': 1, 'br-': 1, 'agbr': 1},
    },
    'i-': {
      pro: 'agi',
      ppt: true,
      sol: null,
      coef: {'ag+': 1, 'i-': 1, 'agi': 1},
    },
    'aso43-': {
      pro: 'ag3aso4',
      ppt: true,
      sol: null,
      coef: {'ag+': 3, 'aso43-': 1, 'ag3aso4': 1},
    },
    'cro42-': {
      pro: 'ag2cro4',
      ppt: true,
      sol: null,
      coef: {'ag+': 2, 'cro42-': 1, 'ag2cro4': 1},
    },
  },
  'agcl': {
    'nh3': {
      pro: '[ag(nh3)2]+',
      ppt: false,
      sol: 'incoloro',
      pro2: 'cl-',
      coef: {'agcl': 1, 'nh3': 2, '[ag(nh3)2]+': 1, 'cl-': 1},
    },
  },
  '[ag(nh3)2]+': {
    'h+': {
      pro: 'agcl',
      ppt: true,
      sol: 'blanco',
      rea2: 'cl-',
      pro2: 'nh4+',
      coef: {'[ag(nh3)2]+': 1, 'h+': 2, 'cl-': 1, 'agcl': 1, 'nh4+': 2},
    },
  },
  //mg2+
  'mg2+': {
    'ho-': {
      pro: 'mg(oh)2',
      ppt: true,
      sol: 'blanco',
      coef: {'mg2+': 1, 'ho-': 2, 'mg(oh)2': 1},
    },
    'ho-exc': {
      pro: 'mg(oh)2',
      ppt: true,
      sol: 'blanco',
      coef: {'mg2+': 1, 'ho-exc': 2, 'mg(oh)2': 1},
    },
    'nh3': {
      pro: 'mg(oh)2',
      ppt: true,
      sol: 'blanco',
      rea2: 'h2o',
      pro2: 'nh4+',
      coef: {'mg2+': 1, 'nh3': 2, 'h2o': 2, 'mg(oh)2': 1, 'nh4+': 2},
    },
    'nh3exc': {
      pro: 'mg(oh)2',
      ppt: true,
      sol: 'blanco',
      rea2: 'h2o',
      pro2: 'nh4+',
      coef: {'mg2+': 1, 'nh3exc': 2, 'h2o': 2, 'mg(oh)2': 1, 'nh4+': 2},
    },
    'hpo42-': {
      pro: 'mgnh4po4',
      ppt: true,
      sol: 'blanco',
      rea2: 'nh3',
      coef: {'mg2+': 1, 'hpo42-': 1, 'nh3': 1, 'mgnh4po4': 1},
    },
  },
  //pb2+
  'pb2+': {
    'ho-': {
      pro: 'pb(oh)2',
      ppt: true,
      sol: 'blanco',
      coef: {'pb2+': 1, 'ho-': 2, 'pb(oh)2': 1},
    },
    'ho-exc': {
      pro: '[pb(oh)4]2-',
      ppt: false,
      sol: 'incoloro',
      coef: {'pb2+': 1, 'ho-exc': 4, '[pb(oh)4]2-': 1},
    },
    'nh3': {
      pro: 'pb2o(no3)2',
      ppt: true,
      sol: 'blanco',
      rea2: 'h2o',
      rea3: 'no3-',
      pro2: 'nh4+',
      coef: {'pb2+': 1, 'nh3': 2, 'no3-': 2, 'pb2o(no3)2': 1, 'nh4+': 2},
    },
    'nh3exc': {
      pro: 'pb2o(no3)2',
      ppt: true,
      sol: 'blanco',
      rea2: 'h2o',
      rea3: 'no3-',
      pro2: 'nh4+',
      coef: {'pb2+': 1, 'nh3exc': 2, 'no3-': 2, 'pb2o(no3)2': 1, 'nh4+': 2},
    },
    'i-': {
      pro: 'pbi2',
      ppt: true,
      sol: null,
      coef: {'pb2+': 1, 'i-': 2, 'pbi2': 1},
    },
    's2-': {
      pro: 'pbs',
      ppt: true,
      sol: null,
      coef: {'pb2+': 1, 's2-': 1, 'pbs': 1},
    },
    'zn': {
      pro: 'pb',
      ppt: true,
      sol: null,
      pro2: 'zn2+',
      coef: {'pb2+': 1, 'zn': 1, 'pb': 1, 'zn2+': 1},
    },
    'cro42-': {
      pro: 'pbcro4',
      ppt: true,
      sol: null,
      coef: {'pb2+': 1, 'cro42-': 1, 'pbcro4': 1},
    },
  },
  'pb(oh)2': {
    'ho-': {
      pro: '[pb(oh)4]2-',
      ppt: false,
      sol: 'incoloro',
      coef: {'pb(oh)2': 1, 'ho-': 2, '[pb(oh)4]2-': 1},
    },
  },
  //sn2+
  'sn2+': {
    'ho-': {
      pro: 'sn(oh)2',
      ppt: true,
      sol: 'blanco',
      coef: {'sn2+': 1, 'ho-': 2, 'sn(oh)2': 1},
    },
    'ho-exc': {
      pro: '[sn(oh)4]2-',
      ppt: false,
      sol: 'incoloro',
      coef: {'sn2+': 1, 'ho-exc': 4, '[sn(oh)4]2-': 1},
    },
    'nh3': {
      pro: 'sn(oh)2',
      ppt: true,
      sol: 'blanco',
      rea2: 'h2o',
      pro2: 'nh4+',
      coef: {'sn2+': 1, 'nh3': 2, 'h2o': 2, 'sn(oh)2': 1, 'nh4+': 2},
    },
    'nh3exc': {
      pro: '[sn(oh)4]2-',
      ppt: false,
      sol: 'incoloro',
      coef: {'sn2+': 1, 'nh3exc': 4, 'h2o': 4, '[sn(oh)4]2-': 1, 'nh4+': 4},
    },
    's2-': {
      pro: 'sns',
      ppt: true,
      sol: null,
      coef: {'sn2+': 1, 's2-': 1, 'sns': 1},
    },
    'i3-': {
      pro: 'sn4+',
      ppt: false,
      sol: 'incoloro',
      pro2: 'i-',
      coef: {'sn2+': 1, 'i3-': 1, 'sn4+': 1, 'i-': 3},
    },
  },
  'sns': {
    'h+exc': {
      pro: '[sncl4]2-',
      ppt: false,
      sol: 'incoloro',
      rea2: 'cl-',
      pro2: 'h2s',
      coef: {'sns': 1, 'h+exc': 2, 'cl-': 4, '[sncl4]2-': 1, 'h2s': 1},
    },
  },
  //al3+
  'al3+': {
    'ho-': {
      pro: 'al(oh)3',
      ppt: true,
      sol: 'blanco',
      coef: {'al3+': 1, 'ho-': 3, 'al(oh)3': 1}
    },
    'ho-exc': {
      pro: 'al(oh)4-',
      ppt: false,
      sol: 'incoloro',
      coef: {'al3+': 1, 'ho-exc': 4, 'al(oh)4-': 1},
    },
    'nh3': {
      pro: 'al(oh)3',
      ppt: true,
      sol: 'blanco',
      rea2: 'h2o',
      pro2: 'nh4+',
      coef: {'al3+': 1, 'nh3': 3, 'h2o': 3, 'al(oh)3': 1, 'nh4+': 3},
    },
    'nh3exc': {
      pro: 'al(oh)3',
      ppt: true,
      sol: 'blanco',
      rea2: 'h2o',
      pro2: 'nh4+',
      coef: {'al3+': 1, 'nh3exc': 3, 'h2o': 3, 'al(oh)3': 1, 'nh4+': 3},
    },
  },
  'al(oh)3': {
    'ho-exc': {
      pro: 'al(oh)4-',
      ppt: false,
      sol: 'incoloro',
      coef: {'al(oh)3': 1, 'ho-exc': 1, 'al(oh)4-': 1},
    },
    'h+exc': {
      pro: 'al3+',
      ppt: false,
      sol: 'incoloro',
      pro2: 'h2o',
      coef: {'al(oh)3': 1, 'h+exc': 3, 'al3+': 1, 'h2o': 3},
    },
  },
};



















export {cations, crea, cpro, rrs};
