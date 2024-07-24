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
    /*
    'o2': {
      pro: 'X',
    },
    */
    'h2o2': {
      pro: 'cro42-',
      ppt: false,
      sol: 'amarillo',
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
    /*
    'o2': {
      pro: 'X',
    },
    */
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
    /*
    'o2': {
      pro: 'X',
    },
    */
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
      sol: 'marron',
      pro2: 'h2o',
      coef: {'mn(oh)2': 4, 'o2': 1, 'mn2o3': 2, 'h2o': 4},
    },
    'h2o2': {
      pro: 'mno2',
      ppt: true,
      sol: 'marron',
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
      pro: 'kfe[fe(cn)6]',
      ppt: true,
      sol: 'azul',
      rea2: 'k+',
      coef: {'fe2+': 1, 'k+': 1, '[fe(cn)6]3-': 1, 'kfe[fe(cn)6]': 1},
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
      pro: 'kfe[fe(cn)6]',
      ppt: true,
      sol: 'azul',
      rea2: 'k+',
      coef: {'fe3+': 1, 'k+': 1, '[fe(cn)6]4-': 1, 'kfe[fe(cn)6]': 1},
    },
  },
  'fe(cn)3': {
    'cn-': {
      pro: '[fe(cn)6]3-',
      ppt: false,
      sol: 'pardo',
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
      coef: {'ni2+': 1, 'ho-exc': 2, 'ni(oh)2': 1},
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
    'nh3exc': {
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
      sol: null,
      pro2: 'h2o',
      coef: {'ag+': 2, 'ho-': 2, 'ag2o': 1, 'h2o': 1},
    },
    'ho-exc': {
      pro: 'ag2o',
      ppt: true,
      sol: null,
      pro2: 'h2o',
      coef: {'ag+': 2, 'ho-exc': 2, 'ag2o': 1, 'h2o': 1},
    },
    'nh3': {
      pro: 'ag2o',
      ppt: true,
      sol: null,
      rea2: 'h2o',
      pro2: 'nh4+',
      coef: {'ag+': 2, 'nh3': 2, 'h2o': 2, 'ag2o': 1, 'nh4+': 2},
    },
    'nh3exc': {
      pro: '[ag(nh3)2]+',
      ppt: false,
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
    'cl-': {
      pro: 'agcl',
      ppt: true,
      sol: 'blanco',
      rea2: 'h+',
      pro2: 'nh4+',
      coef: {'[ag(nh3)2]+': 1, 'h+': 2, 'cl-': 1, 'agcl': 1, 'nh4+': 2},
    },
    'cro42-': {
      pro: 'ag2cro4',
      ppt: true,
      rea2: 'h+',
      pro2: 'nh4+',
      coef: {'[ag(nh3)2]+': 2, 'cro42-': 1, 'h+': 4, 'ag2cro4': 1, 'nh4+': 4},
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
      rea2: 'h2o',
      pro2: 'nh4+',
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
    /*
    'al3+': {
      pro: 'X',
    },
    */
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
    'h2o2': {
      pro: 'mn2+',
      ppt: false,
      sol: 'rosado',
      rea2: 'h+',
      pro2: 'o2',
      pro3: 'h2o',
      coef: {'mno4-': 2, 'h+': 6, 'h2o2': 5, 'mn2+': 2, 'o2': 5, 'h2o': 8},
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
      pro: 'bacr2o7',
      ppt: false,
      sol: 'naranja',
      coef: {'cr2o72-': 1, 'ba2+': 1, 'bacr2o7': 1},
    },
    'h2o2': {
      pro: 'cr3+',
      ppt: false,
      sol: 'verde',
      rea2: 'h+',
      pro2: 'o2',
      pro3: 'h2o',
      coef: {'cr2o72-': 1, 'h+': 8, 'h2o2': 3, 'cr3+': 2, 'o2': 3, 'h2o': 7},
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
  'bacro4': {
    'h+': {
      pro: 'cr2o72-',
      ppt: false,
      sol: 'naranja',
      pro2: 'ba2+',
      pro3: 'h2o',
      coef: {'bacro4': 2, 'h+': 2, 'ba2+': 2, 'cr2o72-': 1, 'h2o': 1},
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
      pro: 'hso3-',
      ppt: false,
      sol: 'incoloro',
      coef: {'so32-': 1, 'h+': 1, 'hso3-': 1},
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

export { cationrrs, anionrrs, rrs };
