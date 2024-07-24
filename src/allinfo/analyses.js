const analyses = [
/////////////////////////////////////////////////////////////////////////////////////////////
  {
    set: ['cr2o72-', 'cl-', 'so32-', 'i-', 'aso43-', 'po43-', 'mno4-', 'i3-'],
    question: ['Solucion incolora'],
    answer: ['cr2o72-', 'mno4-', 'i3-'],
  },
  {
    set: ['cl-', 'so32-', 'i-', 'aso43-', 'po43-'],
    question: ['Se agrega', 'mgcl2/(nh4)cl', 'sin que se observen cambios'],
    answer: ['aso43-', 'po43-'],
  },
  {
    set: ['cl-', 'so32-', 'i-'],
    question: ['El agregado de', 'agno3', 'produce un precipitado que NO re-disuelve con', 'nh3'],
    answer: ['cl-'],
  },
  {
    set: ['so32-', 'i-'],
    question: ['Agregado de', 'h2o2', '/', 'h2so4conc', 'hay reacción y da positivo con almidón'],
    answer: ['so32-'],
  },
//
  {
    set: ['mg2+', 'ba2+', 'al3+', 'pb2+', 'cr3+', 'fe3+', 'ni2+', 'cu2+', 'ag+'],
    question: ['Solucion coloreada'],
    answer: [],
  },
  {
    set: ['mg2+', 'ba2+', 'al3+', 'pb2+', 'cr3+', 'fe3+', 'ni2+', 'cu2+', 'ag+'],
    question: ['El agregado de', 'naoh', '0.1M produce precipitado que se re-disuelve con', 'naohexc', 'concentrado'],
    answer: ['mg2+', 'fe3+', 'ni2+', 'cu2+', 'ag+'],
  },
  {
    set: ['ba2+', 'al3+', 'pb2+', 'cr3+'],
    question: ['El agregado de', 'nh3', 'produce un precipitado que re-disuelve con', 'nh3', 'concentrado'],
    answer: ['al3+', 'pb2+'],
  },
  {
    set: ['ba2+', 'cr3+'],
    question: ['El agregado de', 'naoh', '0.1M y', 'h2o2', 'produce un ppt coloreado que solo re-disuelve cuando baja el pH'],
    answer: [],
  },
//
  {
    set: ['cr2o72-', 'cl-', 'no3-', 'i-', 'aso43-', 'po43-', 'mno4-', 'i3-'],
    question: ['Solucion incolora'],
    answer: ['cr2o72-', 'mno4-', 'i3-'],
  },
  {
    set: ['cl-', 'no3-', 'i-', 'aso43-', 'po43-'],
    question: ['Se agrega', 'mgcl2/(nh4)cl', 'sin que se observen cambios'],
    answer: ['aso43-', 'po43-'],
  },
  {
    set: ['cl-', 'no3-', 'i-'],
    question: ['El agregado de', 'agno3', 'produce un precipitado que NO re-disuelve con', 'nh3'],
    answer: ['cl-'],
  },
  {
    set: ['no3-', 'i-'],
    question: ['Agregado de', 'i2', 'produce una solucion coloreada'],
    answer: ['no3-'],
  },
  {
    set: ['cro42-', 's2o32-', 'aso43-', 'po43-', 'i3-',],
    question: ['Solucion coloreada'],
    answer: [],
  },
  {
    set: ['cro42-', 's2o32-', 'aso43-', 'po43-', 'i3-',],
    question: ['El agregado de', 'h2so4', 'produce una reacción'],
    answer: ['i3-'],
  },
  {
    set: ['cro42-', 's2o32-', 'aso43-', 'po43-'],
    question: ['Se agrega', 'mgcl2/(nh4)cl', 'sin que se observen cambios'],
    answer: ['aso43-', 'po43-'],
  },
  {
    set: ['cro42-', 's2o32-'],
    question: ['El agregado de', 'i2', 'produce una reacción'],
    answer: ['cro42-'],
  },
//
  {
    set: ['mg2+', 'pb2+', 'cr3+', 'fe3+', 'ni2+', 'co2+', 'ag+', 'zn2+'],
    question: ['Solucion incolora'],
    answer: ['cr3+', 'fe3+', 'ni2+', 'co2+'],
  },
  {
    set: ['mg2+', 'pb2+', 'ag+', 'zn2+'],
    question: ['El agregado de', 'naoh', 'diluido produce un precipitado que re-disuelve parcialmente con', 'naohconc'],
    answer: ['ag+', 'mg2+'],
  },
  {
    set: ['pb2+', 'zn2+'],
    question: ['El agregado de', 'nh3', 'produce un precipitado que re-disuelve con', 'nh3conc'],
    answer: ['pb2+'],
  },
//  {
//    set: ['zn2+'],
//    question: ['El agregado de', 'kcl', '0.01M produce un ppt insoluble con', 'kclconc', 'a temperatura ambiente'],
//    answer: [],
//  },
];

export { analyses };
