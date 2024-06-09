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

const rrssrc = {
  'cr3+': {
    ltx: '{{{Cr}^{3+}}_{(ac)}}',
    color: 'verde',
  },
  'mn2+': {
    ltx: '{{{Mn}^{2+}}_{(ac)}}',
    color: 'rosado',
  },
  'fe2+': {
    ltx: '{{{Fe}^{2+}}_{(ac)}}',
    color: 'verde',
  },
  'fe3+': {
    ltx: '{{{Fe}^{3+}}_{(ac)}}',
    color: 'amarillo',
  },
  'co2+': {
    ltx: '{{{Co}^{2+}}_{(ac)}}',
    color: 'rosado',
  },
  'ni2+': {
    ltx: '{{{Ni}^{2+}}_{(ac)}}',
    color: 'verde',
  },
  'cu2+': {
    ltx: '{{{Cu}^{2+}}_{(ac)}}',
    color: 'celeste',
  },
  'zn2+': {
    ltx: '{{{Zn}^{2+}}_{(ac)}}',
    color: 'incoloro',
  },
  'ag+': {
    ltx: '{{{Ag}^{+}}_{(ac)}}',
    color: 'incoloro',
  },
  'mg2+': {
    ltx: '{{{Mg}^{2+}}_{(ac)}}',
    color: 'incoloro',
  },
  'pb2+': {
    ltx: '{{{Pb}^{2+}}_{(ac)}}',
    color: 'incoloro',
  },
  'sn2+': {
    ltx: '{{{Sn}^{2+}}_{(ac)}}',
    color: 'incoloro',
  },
  'al3+': {
    ltx: '{{{Al}^{3+}}_{(ac)}}',
    color: 'incoloro',
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
    color: 'h2o2',
  },
  'nh3': {
    ltx: '{{NH_{3}}_{(ac)}}',
  },
  'nh3exc': {
    ltx: '{\\uparrow{{NH_{3}}_{(ac)}}}',
  },
  's2-': {
    ltx: '{{S^{2-}}_{(ac)}}',
    color: 'incoloro',
  },
  'so42-': {
    ltx: '{{{SO_{4}}^{2-}}_{(ac)}}',
    color: 'incoloro',
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
  //co2+
  'scn-': {
    ltx: '{{{SCN}^{-}}_{(ac)}}',
  },
  //cu2+
  'i-': {
    ltx: '{{I^{-}}_{(ac}}',
    color: 'incoloro',
  },
  'zn': {
    ltx: '{{Zn}_{(s)}}',
  },
  //zn2+
  '[fe(scn)6]4-': {
    ltx: '{{{[Fe{(SCN)}_{6}]}^{4-}}_{(ac)}}',
  },
  //ag+
  'aldehido': {
    ltx: '{aldehído}',
  },
  'br-': {
    ltx: '{{{Br}^{-}}_{(ac)}}',
    color: 'incoloro',
  },
  'aso43-': {
    ltx: '{{{AsO_{4}}^{3-}}_{(ac)}}',
    color: 'incoloro',
  },
  'cro42-': {
    ltx: '{{{CrO_{4}}^{-}}_{(ac)}}',
    color: 'amarillo',
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
    color: 'pardo',
  },
  'amilosa': {
    ltx: '{amilosa_{(almidón)}}',
  },
  '[i2-amilosa]': {
    ltx: '{{[{I_{2}}-amilosa]}_{(ac)}}',
    color: 'azul',
  },
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
  'cui2': {
    ltx: '{{CuI_{2}}_{(s)}}',
    color: 'amarillo',
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
  'X': {
    ltx: '{X}',
  },
  'al(oh)3': {
    ltx: '{{{Al{(OH)}_{3}}}_{(s)}}',
    color: 'blanco',
  },
  '[al(oh)4-]': {
    ltx: '{{{{Al{(OH)}_{4}}}^{-}}_{(s)}}',
    color: 'incoloro',
  },
  'cl-': {
    ltx: '{{{Cl}^{-}}_{(ac)}}',
    color: 'incoloro',
  },
  'co32-': {
    ltx: '{{{CO_{3}}^{2-}}_{(ac)}}',
    color: 'incoloro',
  },
  'po43-': {
    ltx: '{{{PO_{4}}^{3-}}_{(ac)}}',
    color: 'incoloro',
  },
  'alpo4-': {
    ltx: '{{AlPO_{4}}_{(s)}}',
    color: 'blanco',
  },
  'ba2+': {
    ltx: '{{{Ba}^{2+}}_{(ac)}}',
  },
  'ca2+': {
    ltx: '{{{Ca}^{2+}}_{(ac)}}',
  },
  'co2': {
    ltx: '{{CO_{2}}_{(g)}}',
  },
  'ag2co3': {
    ltx: '{{{Ag}_{2}CO_{3}}_{(s)}}',
    color: 'blanco',
  },
  'baco3': {
    ltx: '{{BaCO_{3}}_{(s)}}',
    color: 'blanco',
  },
  'caco3': {
    ltx: '{{CaCO_{3}}_{(s)}}',
    color: 'blanco',
  },
  'ag3po4': {
    ltx: '{{{Ag}_{3}PO_{4}}_{(s)}}',
    color: 'amarillo',
  },
  'alpo4': {
    ltx: '{{AlPO_{4}}_{(s)}}',
    color: 'blanco',
  },
  'h2po4-': {
    ltx: '{{{H_{2}PO_{4}}^{-}}_{(ac)}}',
    color: 'incoloro',
  },
  'no2': {
    ltx: '{{NO_{2}}_{(g)}}',
    color: 'pardo',
  },
  'agno2': {
    ltx: '{{AgNO_{2}}_{(s)}}',
    color: 'blanco',
  },
  'agno3': {
    ltx: '{{AgNO_{3}}_{(s)}}',
    color: 'blanco',
  },
  'no2-': {
    ltx: '{{{NO_{2}}^{-}}_{(ac)}}',
    color: 'incoloro',
  },
  'hno2': {
    ltx: '{{HNO_{2}}_{(ac)}}',
    color: 'azul',
  },
  'no': {
    ltx: '{{NO}_{(g)}}',
    color: 'incoloro',
  },
  'ba3(po4)2': {
    ltx: '{{{Ba}_{3}{(PO_{4})}_{2}}_{(s)}}',
    color: 'blanco',
  },
  'ba3(aso4)2': {
    ltx: '{{{Ba}_{3}{(AsO_{4})}_{2}}_{(s)}}',
    color: 'blanco',
  },
  'ca3(po4)2': {
    ltx: '{{{Ca}_{3}{(PO_{4})}_{2}}_{(s)}}',
    color: 'blanco',
  },
  'ca3(aso4)2': {
    ltx: '{{{Ca}_{3}{(AsO_{4})}_{2}}_{(s)}}',
    color: 'blanco',
  },
  'ag3aso4': {
    ltx: '{{{Ag}_{3}AsO_{4}}_{(s)}}',
    color: 'pardo',
  },
  'mno4-': {
    ltx: '{{{MnO_{4}}^{-}}_{(ac)}}',
    color: 'violeta',
  },
  'cr2o72-': {
    ltx: '{{{{Cr}_{2}O_{7}}^{2-}}_{(ac)}}',
    color: 'naranja',
  },
  'bacro4': {
    ltx: '{{BaCrO_{4}}_{(s)}}',
    color: 'amarillo',
  },
  'ag2cro4': {
    ltx: '{{{Ag}_{2}CrO_{4}}_{(s)}}',
    color: 'rojo',
  },
  'pbcro4': {
    ltx: '{{PbCrO_{4}}_{(s)}}',
    color: 'amarillo',
  },
  's2o32-': {
    ltx: '{{{S_{2}O_{3}}^{2-}}_{(ac)}}',
    color: 'incoloro',
  },
  's': {
    ltx: '{S_{(s)}}',
    color: 'amarillo',
  },
  'so2': {
    ltx: '{{SO_{2}}_{(g)}}',
    color: 'incoloro',
  },
  'ag2s2o3': {
    ltx: '{{{Ag}_{2}S_{2}O_{3}}_{(s)}}',
    color: 'blanco',
  },
  'bas2o3': {
    ltx: '{{BaS_{2}O_{3}}_{(s)}}',
    color: 'blanco',
  },
  's4o62-': {
    ltx: '{{{S_{4}O_{6}}^{2-}}_{(ac)}}',
    color: 'incoloro',
  },
  'so32-': {
    ltx: '{{{SO_{3}}^{2-}}_{(ac)}}',
    color: 'incoloro',
  },
  'hso3-': {
    ltx: '{{{HSO_{4}}^{-}}_{(ac)}}',
    color: 'incoloro',
  },
  'ag2so3': {
    ltx: '{{{Ag}_{2}SO_{3}}_{(s)}}',
    color: 'blanco',
  },
  'baso3': {
    ltx: '{{{BaSO_{3}}_{(s)}}',
    color: 'blanco',
  },
  'ag2so4': {
    ltx: '{{{Ag}_{2}SO_{4}}_{(s)}}',
    color: 'blanco',
  },
  'baso4': {
    ltx: '{{BaSO_{4}}_{(s)}}',
    color: 'blanco',
  },
  'pbso4': {
    ltx: '{{PbSO_{4}}_{(s)}}',
    color: 'blanco',
  },
  'cuso4': {
    ltx: '{{CuSO_{4}}_{(ac)}}',
    color: 'azul',
  },
  '[ag(s2o3)2]3-': {
    ltx: '{{{[Ag{(S_{2}O_{3})}_{2}]}^{3-}}_{(ac)}}',
    color: 'incoloro',
  },
  'bacr2o72-': {
    ltx: '{{{Ba{Cr}_{2}O_{7}}^{2-}}_{(ac)}}',
    color: 'naranja',
  },
  'hso4-': {
    ltx: '{{{HSO_{4}}^{-}}_{(ac)}}',
    color: 'incoloro'
  },
};

const cationrrs = {
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
    'ho-exc': {
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
    'po43-': {
      pro: 'mgnh4po4',
      ppt: true,
      sol: 'blanco',
      rea2: 'nh4+',
      coef: {'mg2+': 1, 'po43-': 1, 'nh4+': 1, 'mgnh4po4': 1},
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
      pro: '[al(oh)4-]',
      ppt: false,
      sol: 'incoloro',
      coef: {'al3+': 1, 'ho-exc': 4, '[al(oh)4-]': 1},
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
      pro: '[al(oh)4-]',
      ppt: false,
      sol: 'incoloro',
      coef: {'al(oh)3': 1, 'ho-exc': 1, '[al(oh)4-]': 1},
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

const anionrrs = {
  //co32-
  'co32-': {
    'h+': {
      pro: 'co2',
      ppt: false,
      sol: 'incoloro',
//      gas: 'co2',
      pro2: 'h2o',
      coef: {'cro32-': 1, 'h+': 2, 'co2': 1, 'h2o': 1},
     },
    'ho-': {// ??
      pro: 'co2',
      ppt: false,
      sol: 'incoloro',
//      gas: 'co2',
      coef: {'cro32-': 1, 'ho-': 1, 'co2': 1},
     },
    'ag+': {
      pro: 'ag2co3',
      ppt: true,
      sol: null,
      coef: {'co32-': 1, 'ag+': 2, 'ag2co3': 1},
    },
    'ba2+': {
      pro: 'baco3',
      ppt: true,
      sol: null,
      coef: {'co32-': 1, 'ba2+': 1, 'baco3': 1},
    },
    'ca2+': {
      pro: 'caco3',
      ppt: true,
      sol: null,
      coef: {'co32-': 1, 'ba2+': 1, 'caco3': 1},
    },
  },
  //po43-
  'po43-': {
    'ag+': {
      pro: 'ag3po4',
      ppt: true,
      sol: null,
      coef: {'po43-': 1, 'ag+': 3, 'ag3po4': 1},
    },
    'ba2+': {
      pro: 'ba3(po4)2',
      ppt: true,
      sol: null,
      coef: {'po43-': 2, 'ba2+': 3, 'ba3(po4)2': 1},
    },
    'ca2+': {
      pro: 'ca3(po4)2',
      ppt: true,
      sol: null,
      coef: {'po43-': 2, 'ca2+': 3, 'ca3(po4)2': 1},
    },
    'al3+': {
      pro: 'alpo4',
      ppt: true,
      sol: null,
      coef: {'po43-': 1, 'al3+': 1, 'alpo4': 1},
    },
    'nh4+': {
      pro: 'mgnh4po4',
      ppt: true,
      sol: null,
      rea2: 'mg2+',
      coef: {'po43-': 1, 'nh4+': 1, 'mg2+': 1, 'mgnh4po4': 1},
    },
  },
  'alpo4': {
    'ho-': {
      pro: 'al(oh)3',
      ppt: true,
      sol: null,
      pro2: 'po43-',
      coef: {'alpo4': 1, 'ho-': 3, 'al(oh)3': 1, 'po43-': 1},
    },
    'h+': {
      pro: 'al3+',
      ppt: false,
      sol: 'incoloro',
      pro2: 'h2po4-',
      coef: {'alpo4': 1, 'h+': 2, 'al3+': 1, 'h2p4o-': 1},
    },
  },
  'mgnh4po4': {
    'h+': {
      pro: 'mg2+',
      ppt: false,
      sol: 'incoloro',
      pro2: 'nh4+',
      pro3: 'h2po4-',
      coef: {'mgnh4po4': 1, 'h+': 2, 'mg2+': 1, 'nh4+': 1, 'h2po4-': 1},
    },
  },
  //no3-
  'no3-': {
    'cu': {
      pro: 'cu2+',
      ppt: false,
      sol: 'celeste',
      rea2: 'h+',
      pro2: 'no',
      pro3: 'h2o',
//      gas: 'no2',
      coef: {'no3-': 2, 'cu': 3, 'h+': 8, 'cu2+': 3, 'no': 2, 'h2o': 4},
    },
    'ag+': {
      pro: 'agno3',
      ppt: true,
      sol: null,
      coef: {'no3-': 1, 'ag+': 1, 'agno3': 1},
    },
  },
  //no2-
  'no2-': {
    'h+': {
      pro: 'hno2',
      ppt: false,
      sol: 'azul',
      coef: {'no2-': 1, 'h+': 1, 'hno2': 1},
    },
  },
  'hno2': {
    'calor': {
      pro: 'no2',
      ppt: false,
      sol: null,
      pro2: 'no',
      pro3: 'h2o',
//      gas: 'no2',
      coef: {'hno2': 2, 'calor': 1, 'no2': 1, 'no': 1, 'h2o': 1}
    },
  },
  //aso43-
  'aso43-': {
    'ag+': {
      pro: 'ag3aso4',
      ppt: true,
      sol: null,
      coef: {'aso43-': 1, 'ag+': 3, 'ag3aso4': 1},
    },
    'ba2+': {
      pro: 'ba3(aso4)2',
      ppt: true,
      sol: null,
      coef: {'aso43-': 2, 'ba2+': 3, 'ba3(aso4)2': 1},
    },
    'ca2+': {
      pro: 'ca3(aso4)2',
      ppt: true,
      sol: null,
      coef: {'aso43-': 2, 'ca2+': 3, 'ca3(aso4)2': 1},
    },
    'al3+': {
      pro: 'X',
    },
    'nh4+': {
      pro: 'mgnh4po4',
      ppt: true,
      sol: null,
      rea2: 'mg2+',
      coef: {'aso43-': 1, 'nh4+': 1, 'mg2+': 1, 'mgnh4aso4': 1},
    },
  },
  //mno4-
  'mno4-': {
    'h+': {
      pro: 'mn2+',
      ppt: false,
      sol: 'rosado',
      coef: {'mno4-': 1, 'h+': 1, 'mn2+': 1},
    },
    'ho-': {
      pro: 'mno2',
      ppt: true,
      sol: null,
      coef: {'mno4-': 1, 'ho-': 1, 'mno2': 1},
    },
    'i-': {
      pro: 'i3-',
      ppt: false,
      sol: 'pardo',
      rea2: 'h+',
      pro2: 'mn2+',
      pro3: 'h2o',
      coef: {'mno4-': 2, 'h+': 16, 'i-': 15, 'mn2+': 2, 'i3-': 5, 'h2o': 8},
    },
    'fe(oh)2': {
      pro: 'mno2',
      ppt: true,
      sol: 'marron',
      rea2: 'h2o',
      pro2: 'fe(oh)3',
      pro3: 'ho-',
      coef: {'mno4-': 1, 'fe(oh)2': 3, 'h2o': 2, 'mno2': 1, 'fe(oh)3': 3, 'ho-': 1},
    },
  },
  //cr2o72-
  'cr2o72-': {
    'ho-': {
      pro: 'cro42-',
      ppt: false,
      sol: 'amarillo',
      pro2: 'h2o',
      coef: {'cr2o72-': 1, 'ho-': 2, 'cro42-': 2, 'h2o': 1},
    },
    'ba2+': {
      pro: 'bacr2o72-',
      ppt: false,
      sol: 'naranja',
      coef: {'cr2o72-': 1, 'ba2+': 1, 'bacr2o72-': 1},
    },
  },
  //cro42-
  'cro42-': {
    'h+': {
      pro: 'cr2o72-',
      ppt: false,
      sol: 'naranja',
      pro2: 'h2o',
      coef: {'cro42-': 2, 'h+': 2, 'cr2o72-': 1, 'h2o': 1},
    },
    'ba2+': {
      pro: 'bacro4',
      ppt: true,
      sol: null,
      coef: {'cro42-': 1, 'ba2+': 1, 'bacro4': 1},
    },
    'ag+': {
      pro: 'ag2cro4',
      ppt: true,
      sol: null,
      coef: {'cro42-': 1, 'ag+': 2, 'ag2cro4': 1},
    },
    'pb2+': {
      pro: 'pbcro4',
      ppt: true,
      sol: null,
      coef: {'cro42-': 1, 'pb2+': 1, 'pbcro4': 1},
    },
  },
  'ag2cro4': {
    'nh3': {
      pro: '[ag(nh3)2]+',
      ppt: false,
      sol: 'amarillo',
      pro2: 'cro42-',
      coef: {'ag2cro4': 1, 'nh3': 4, '[ag(nh3)2]+': 2, 'cro42-': 1},
    },
  },
  //s2-
  's2-': {
    'h+': {
      pro: 'h2s',
      ppt: false,
      sol: null,
//      gas: 'h2s',
      coef: {'s2-': 1, 'h+': 2, 'h2s': 1},
    },
    'ag+': {
      pro: 'ag2s',
      ppt: true,
      sol: null,
      coef: {'s2-': 1, 'ag+': 2, 'ag2s': 1},
    },
    'mn2+': {
      pro: 'mns',
      ppt: true,
      sol: null,
      coef: {'s2-': 1, 'mn2+': 1, 'mns': 1},
    },
    'sn2+': {
      pro: 'sns',
      ppt: true,
      sol: null,
      coef: {'s2-': 1, 'sn2+': 1, 'sns': 1},
    },
    'pb2+': {
      pro: 'pbs',
      ppt: true,
      sol: null,
      coef: {'s2-': 1, 'pb2+': 1, 'pbs': 1},
    },
  },
  'mns': {
    'h+': {
      pro: 'mn2+',
      ppt: false,
      sol: 'rosado',
      pro2: 'h2s',
//      gas: 'h2s',
      coef: {'mns': 1, 'h+': 2, 'mn2+': 1, 'h2s': 1},
    },
  },
  //s2o32-
  's2o32-': {
    'h+': {
      pro: 's',
      ppt: true,
      sol: null,
      pro2: 'so2',
      pro3: 'h2o',
      coef: {'s2o32-': 1, 'h+': 2, 's': 1, 'so2': 1, 'h2o': 1},
    },
    'ag+': {
      pro: 'ag2s2o3',
      ppt: true,
      sol: null,
      coef: {'s2o32-': 1, 'ag+': 2, 'ag2s2o3': 1},
    },
    'ba2+': {
      pro: 'bas2o3',
      ppt: true,
      sol: null,
      coef: {'s2o32-': 1, 'ba2+': 1, 'bas2o3': 1},
    },
    'i3-': {
      pro: 's4o62-',
      ppt: false,
      sol: 'incoloro',
      pro2: 'i-',
      coef: {'s2o32-': 2, 'i3-': 1, 's4o62-': 1, 'i-': 3},
    },
  },
  //so32-
  'so32-': {
    'h+': {
      pro: 'hso4-',
      ppt: false,
      sol: 'incoloro',
      coef: {'so32-': 1, 'h+': 1, 'hso4-': 1},
    },
    'ag+': {
      pro: 'ag2so3',
      ppt: true,
      sol: null,
      coef: {'so32-': 1, 'ag+': 2, 'ag2so3': 1},
    },
    'ba2+': {
      pro: 'baso3',
      ppt: true,
      sol: null,
      coef: {'so32-': 1, 'ba2+': 1, 'baso3': 1},
    },
    'mno4-': {
      pro: 'so42-',
      ppt: false,
      sol: 'incoloro',
      pro2: 'mn2+',
      coef: {'so32-': 5, 'mno4-': 1, 'h+': 6, 'mn2+': 2, 'so42-': 5, 'h2o': 3},
    },
    'cr2o72-': {
      pro: 'cr3+',
      ppt: false,
      sol: 'verde',
      rea2: 'h+',
      pro2: 'so42-',
      pro3: 'h2o',
      coef: {'so32-': 3, 'cr2o72-': 1, 'h+': 8, 'cr3+': 2, 'so42-': 3, 'h2o': 4},
    },
    'i3-': {
      pro: 'i-',
      ppt: false,
      sol: 'incoloro',
      pro2: 'so42-',
      coef: {'so32-': 1, 'i3-': 1, 'h2o': 1, 'i-': 3, 'so42-': 1, 'h+': 2},
    },
  },
  'baso3': {
    'h+': {
      pro: 'ba2+',
      ppt: false,
      sol: 'incoloro',
      pro2: 'so2',
//      gas: 'so2',
      pro3: 'h2o',
      coef: {'baso3': 1, 'h+': 2, 'ba2+': 1, 'so2': 1, 'h2o': 1},
    },
  },
  //so42-
  'so42-': {
    'h+': {
      pro: 'hso4-',
      ppt: false,
      sol: 'incoloro',
      coef: {'so42-': 1, 'h+': 1, 'hso4-': 1},
    },
    'ag+': {
      pro: 'ag2so4',
      ppt: true,
      sol: null,
      coef: {'so42-': 1, 'ag+': 2, 'ag2so4': 1},
    },
    'ba2+': {
      pro: 'baso4',
      ppt: true,
      sol: null,
      coef: {'so42-': 1, 'ba2+': 1, 'baso4': 1},
    },
    'pb2+': {
      pro: 'pbso4',
      ppt: true,
      sol: null,
      coef: {'so42-': 1, 'pb2+': 1, 'pbso4': 1},
    },
    'cu2+': {
      pro: 'cuso4',
      ppt: false,
      sol: 'azul',
      coef: {'so42-': 1, 'cu2+': 1, 'cuso4': 1},
    },
  },
  //i-
  'i-': {
    'ag+': {
      pro: 'agi',
      ppt: true,
      sol: null,
      coef: {'i-': 1, 'ag+': 1, 'agi': 1},
    },
    'mno4-': {
      pro: 'i3-',
      ppt: false,
      sol: 'pardo',
      rea2: 'h+',
      pro2: 'mn2+',
      pro3: 'h2o',
      coef: {'mno4-': 2, 'h+': 16, 'i-': 15, 'mn2+': 2, 'i3-': 5, 'h2o': 8},
    },
    'cr2o72-': {
      pro: 'i3-',
      ppt: false,
      sol: 'pardo',
      rea2: 'h+',
      pro2: 'cr3+',
      pro3: 'h2o',
      coef: {'i-': 9, 'cr2o72-': 1, 'h+': 14, 'i3-': 3, 'cr3+': 2, 'h2o': 7},
    },
    'h2o2': {
      pro: 'i3-',
      ppt: false,
      sol: 'pardo',
      rea2: 'h+',
      pro2: 'h2o',
      coef: {'i-': 3, 'h2o2': 1, 'h+': 2, 'i3-': 1, 'h2o': 1},
    },
    'pb2+': {
      pro: 'pbi2',
      ppt: true,
      sol: null,
      coef: {'i-': 2, 'pb2+': 1, 'pbi2': 1},
    },
    'cu2+': {
      pro: 'cui2',
      ppt: true,
      sol: null,
      coef: {'i-': 2, 'cu2+': 1, 'cui2': 1},
    },
  },
  //i3-
  'i3-': {
    'amilosa': {
      pro: '[i2-amilosa]',
      ppt: false,
      sol: 'azul',
      pro2: 'i-',
      coef: {'i3-': 1, 'amilosa': 1, '[i2-amilosa]': 1},
    },
    's2o32-': {
      pro2: 'i-',
      ppt: false,
      sol: 'incoloro',
      pro: 's4o62-',
      coef: {'s2o32-': 2, 'i3-': 1, 's4o62-': 1, 'i-': 3},
    },
    'so32-': {
      pro: 'i-',
      ppt: false,
      sol: 'incoloro',
      pro2: 'so42-',
      coef: {'so32-': 1, 'i3-': 1, 'h2o': 1, 'i-': 3, 'so42-': 1, 'h+': 2},
    },
  },
  //cl-
  'cl-': {
    'ag+': {
      pro: 'agcl',
      ppt: true,
      sol: null,
      coef: {'cl-': 1, 'ag+': 1, 'agcl': 1},
    },
  },
  //br-
  'br-': {
    'ag+': {
      pro: 'agbr',
      ppt: true,
      sol: null,
      coef: {'br-': 1, 'ag+': 1, 'agbr': 1},
    },
  },
  'agbr': {
    's2o32-': {
      pro: '[ag(s2o3)2]3-',
      ppt: false,
      sol: 'incoloro',
      coef: {'agbr': 1, 's2o32-': 2, '[ag(s2o3)2]3-': 1, 'br-': 1},
    },
  },
};



const rrs = {
  ...cationrrs,
  ...anionrrs,
}

export { rrssrc, cationrrs, rrs };
