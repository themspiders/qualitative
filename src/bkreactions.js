const model = {
  '': {
    color: '',
    'ho-': {
      sol: '',
      ppt: '',
      pro: '',
    },
    'ho-exc': {
      sol: '',
      ppt: '',
      pro: '',
    },
    'h2o2': {
      sol: '',
      ppt: '',
      pro: '',
    },
    'nh3': {
      sol: '',
      ppt: '',
      pro: '',
    },
    'nh3exc': {
      sol: '',
      ppt: '',
      pro: '',
    },
  },
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

const cre = {
  'ho-': {
    ltx: '{{{HO}^{-}}_{(ac)}}',
  },
  'ho-exc': {
    ltx: '{\\uparrow{{{HO}^{-}}_{(ac)}}}',
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
  'cro4-': {
    ltx: '{{{CrO_{4}}^{-}}_{(ac)}}',
  },
  //pb2+
  'calor': {
    ltx: '{calor}',
  },
  'cro4-': {
    ltx: '{{CrO_{4}}^{-}_{(ac)}}',
  },
  //sn2+
  'i3-': {
    ltx: '{{{I_{3}}^{-}}_{(ac)}}',
  },
};

const cpro = {
  //cr3+
  'cr(oh)3': {
    ltx: '{{Cr{(OH)}_{3}}_{(s)}}',
    color: 'gris_verde',
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
    lxt: '{{{Mn}_{2}O_{3}}.{nH_{2}O}}',
    color: 'pardo',
  },
  'mno(oh)2': {
    ltx: '{{MnO{(OH)}_{2}}_{(s)}}',
    color: 'pardo',
  },
  'mns': {
    ltx: '{{MnS}_{(s)}}',
    color: 'salmon',
  },
  'mnso4': {
    ltx: '{{MnSO_{4}}_{(s)}}',
    color: 'rosa_palido',
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
    ltx: '{{{Fe{(CN)}_{6}}^{4-}}_{{ac)}}',
    color: 'amarillo',
  },
  //fe3+
  '[fe(scn)6]3-': {
    ltx: '{{{[Fe{(SCN)}_{6}]}^{3-}}_{(ac)}}',
    color: 'rojo_sangre',
  },
  'fe(cn)3': {
    ltx: '{{Fe{(CN)}_{3}}_{{s)}}',
    color: 'pardo',
  },
  '[fe(cn)6]3-': {
    ltx: '{{{Fe{(CN)}_{6}}^{3-}}_{{ac)}}',
    color: 'amarillo',
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
    color: 'rosa',
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
  '[cu(dmg)2]2+': {
    ltx: '{{{[Cu{(DMG)}_{2}]}^{2+}}_{(ac)}}',
    color: 'verde',
  },
  //cu + zn2+
  'cu': {
    ltx: '{{Cu}_{(s)}}',
    color: 'rojo',
  },
  'zn2+: {
    ltx: '{{{Zn}^{2+}}_{(ac)}}',
    color: 'incoloro',
  },
  'cu2[fe(cn)6]': {
    ltx: '{{Cu_{2}[Fe{(CN)}_{6}]}_{(s)}}',
    color: 'pardo',
  },
  //zn2+
  'zu(oh)2': {
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
    ltx: '{{Ag_{2}S}_{(s)}',
    color: 'negro',
  },
  'agcl': {
    ltx: '{{AgCl}_{(s)}',
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
  'agcro4': {
    ltx: '{{AgCrO_{4}}_{(s)}}',
    color: 'rojo',
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
  'pbi2': {
    ltx: '{{PbI_{2}}_{(s)}}',
    color: 'amarillo',
  },
  //lluvia de oro
  'pbs': {
    ltx: '{{PbS}_{(s)}}',
    color: 'negro',
  },
  //pb + zn2+
  'pbcro4': {
    ltx: '{{PbCrO_{4}}_{(s)}}',
    color: 'amarillo',
  },
  //sn2+
  'sns': {
    ltx: '{{SnS}_{(s)}}',
    color: 'pardo',
  },
  //sn4+ + i-
};

const rr = {
  //cr3+
  'cr3+': {
    'ho-': {
      sol: 'verde',
      ppt: true,
      pro: 'cr(oh)3',
    },
    'ho-exc': {
      sol: 'verde',
      ppt: false,
      pro: 'cro2-',
    },
    'nh3': {
      sol: 'verde',
      ppt: true,
      pro: 'cr(oh)3',
    },
    'nh3exc': {
      sol: 'malva',
      ppt: false,
      pro: '[cr(nh3)6]3+',
    },
  },
  'cro2-': {
    'h2o2': {
      sol: 'amarillo',
      ppt: false,
      pro: 'cro42-',
    },
  },
  //mn2+
  'mn2+': {
    'ho-': {
      pro: 'mn(oh)2',
      ppt: true,
      sol: 'pardo',
    },
    'ho-exc': {
      pro: 'mn(oh)2',
      ppt: true,
      sol: 'pardo',
    },
    'nh3': {
      ppt: true,
      pro: 'mn2o3.nh2o',
      sol: 'pardo',
    },
    'nh3exc': {
      ppt: true,
      pro: 'mn2o3.nh2o',
      sol: 'pardo',
    },
    's2-': {
      pro: 'mns',
      ppt: true,
      sol: null,
    },
    'so42-': {
      pro: 'mnso4',
      ppt: true,
      sol: null,
    },
  },
  'mn(oh)2': {
    'o2': {
      pro: 'mn2o3.nh2o',
      ppt: true,
      sol: 'pardo',
    },
  },
  //fe2+
  'fe2+': {
    'ho-': {
      pro: 'fe(oh)2',
      ppt: true,
      sol: 'verde',
    },
    'ho-exc': {
      pro: 'fe(oh)2',
      ppt: true,
      sol: 'verde',
    },
    'nh3': {
      pro: 'fe(oh)2',
      ppt: true,
      sol: 'verde',
    },
    'nh3exc': {
      pro: 'fe(oh)2',
      ppt: true,
      sol: 'verde',
    },
    's2-': {
      pro: 'mns',
      ppt: true,
      sol: null,
    },
    'so42-': {
      pro: 'mnso4',
      ppt: true,
      sol: null,
    },
    'dmg': {
      pro: '[fe(dmg)2]2+',
      ppt: false,
      sol: 'rojo',
    },
    'cn-': {
      pro: 'fe(cn)2',
      ppt: true,
      sol: null,
    },
  },
  'fe(oh)2': {
    'o2': {
      pro: 'fe(oh)3',
      ppt: true,
      sol: 'pardo',
    },
    'h2o2': {
      pro: 'fe(oh)3',
      ppt: true,
      sol: 'pardo',
    },
  },
  'fe(cn)2': {
    'cn-': {
      pro: '[fe(cn)6]4-',
      ppt: false,
      sol: 'amarillo',
    },
  },
  //fe3+
  'fe3+': {
    'ho-': {
      pro: 'fe(oh)3',
      ppt: true,
      sol: 'pardo',
    },
    'ho-exc': {
      pro: 'fe(oh)3',
      ppt: true,
      sol: 'pardo',
    },
    'nh3': {
      pro: 'fe(oh)3',
      ppt: true,
      sol: 'pardo',
    },
    'nh3-exc': {
      pro: 'fe(oh)3',
      ppt: true,
      sol: 'pardo',
    },
    'scn-': {
      pro: '[fe(scn)6]3-',
      ppt: false,
      sol: 'rojo_sangre',
    },
    'cn-': {
      pro: 'fe(cn)3',
      ppt: true,
      sol: null,
    },
  },
  'fe(cn)3': {
    'cn-': {
      pro: '[fe(cn)6]3-',
      ppt: false,
      sol: 'amarillo',
    },
  },
  //co2+
  'co2+': {
    'ho-': {
      pro: 'co(oh)2',
      ppt: true,
      sol: 'azul',
    },
    'oh-exc': {
      pro: 'co(oh)2',
      ppt: true,
      sol: 'azul',
    },
    'nh3': {
      pro: 'co(oh)2',
      ppt: true,
      sol: 'azul',
    },
    'nh3exc': {
      pro: '[co(nh3)6]2+',
      ppt: false,
      sol: 'pardo',
    },
    'scn-': {
      pro: '[co(scn)3]-',
      ppt: false,
      sol: 'azul',
    },
  },
  'co(oh)2': {
    'o2': {
      pro: 'co(oh)3',
      ppt: true,
      sol: 'pardo',
    },
    'h2o2': {
      pro: 'co(oh)3',
      ppt: true,
      sol: 'pardo',
    },
  },
  '[co(nh3)6]2+': {
      'h2o2': {
        pro: '[co(nh3)6]3+',
        ppt: false,
        sol: 'rojo',
      },
  },
  //ni2+
  'ni2+': {
    'ho-': {
      pro: 'ni(oh)2',
      ppt: true,
      sol: 'verde',
      coef: {'ni2´': 1, 'oh-': 2, 'ni(oh)2': 1},
    },
    'ho-exc': {
      pro: 'ni(oh)2',
      ppt: true,
      sol: 'verde',
      coef: {'ni2´': 1, 'oh-': 2, 'ni(oh)2': 1},
    },
    'nh3': {
      pro: 'ni(oh)2',
      ppt: true,
      sol: 'verde',
      re2: 'h2o',
      pro2: 'nh4+',
      coef: {'ni2+': 1, 'nh3': 2, 'h2o': 2, 'ni(oh)2': 1, 'nh4+': 2},
    },
    'nh3exc': {
      pro: '[ni(nh3)6]2+',
      ppt: false,
      sol: 'azul',
      pro2: 'oh-',
      coef: {'ni2+': 1, 'nh3': 6, 'h2o': 2, '[ni(nh3)6]2+': 1, 'oh-': 2},
    },
    'dmg': {
      pro: '[ni(dmg)2]',
      ppt: true,
      sol: 'rojo_rosa',
      pro2: 'nh4+',
      pro3: 'nh3',
      
    },
    's2-': {
      pro: 'nis',
      ppt: true,
      sol: 'negro',
    },
  },
  'ni(oh)2': {
    'nh3': {
      pro: '[ni(nh3)6]2+',
      ppt: false,
      sol: 'azul',
      pro2: 'oh-',
      coef: {'ni(oh)2': 1, 'nh3': 6, '[ni(nh3)6]2+': 1, 'oh-': 2},
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
      re2: 'h2o',
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
    },
    'dmg': {
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
      coef: {'zn2+': 1, 'oh-': 4, '[zn(oh)4]2-': 1},
    },
    'nh3': {
      pro: 'zn(oh)2',
      ppt: true,
      sol: 'blanco',
      re2: 'h2o',
      pro2: 'nh4+',
      coef: {'zn2+': 1, 'nh3': 2, 'h2o': 2, 'zn(oh)2': 1, 'nh4+': 2},
    },
    'nh3-exc': {
      pro: '[zn(nh3)4]2+',
      ppt: false,
      sol: 'incoloro',
      pro2: 'oh-',
      coef: {'zn2+': 1, 'nh3-exc': 1, '[zn(nh3)4]2+': 1, 'oh-': 1},
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
      coef: {'zn(oh)2': 1, 'oh-': 2, '[zn(oh)4]2-': 1},
    },
  },
  'zn(oh)2': {
    'nh3': {
      pro: '[zn(nh3)4]2+',
      ppt: false,
      sol: 'incoloro',
      pro2: 'oh-',
      coef: {'zn(oh)2': 1, 'nh3': 4, '[zn(nh3)4]2+': 1, 'oh-': 2},
    },
  },
  //ag+
  'ag+': {
    'ho-': {
      pro: 'ag2o',
      ppt: true,
      sol: 'marron',
      pro2: 'h2o',
      coef: {'ag+': 2, 'oh-': 2, 'ag2o': 1, 'h2o': 1},
    },
    'ho-': {
      pro: 'ag2o',
      ppt: true,
      sol: 'marron',
      pro2: 'h2o',
      coef: {'ag+': 2, 'oh-': 2, 'ag2o': 1, 'h2o': 1},
    },
    'nh3': {
      pro: 'ag2o',
      ppt: true,
      sol: 'marron',
      re2: 'h2o',
      pro2: 'nh4+',
      coef: {'ag+': 2, 'nh3': 2, 'h2o': 2, 'ag2o': 1, 'nh4+': 2},
    },
    'nh3exc': {
      pro: '[ag(nh3)2]+',
      ppt: true,
      sol: 'incoloro',
      re2: 'h2o',
      pro2: 'oh-',
      coef: {'ag2o': 1, 'nh3exc': 4, 'h2o': 1, '[ag(nh3)2]+': 2, 'oh-': 2},
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
      re2: 'cl-',
      pro2: 'nh4+',
      coef: {'[ag(nh3)2]+': 1, 'h+': 2, 'cl-': 1, 'agcl': 1, 'nh4+': 2},
    },
  },
  //mg2+
};



















export {cations, cre, cpro, rr};
