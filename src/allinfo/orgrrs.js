import { Kekule } from 'kekule';
// if Kekule widgets is used, the theme CSS should be imported as well
import 'kekule/theme/default';
console.log(Kekule.VERSION);

// create molecule first
var mol = new Kekule.Molecule();
// add three atoms to molecule, property setter can be called cascadely
var a1 = (new Kekule.Atom()).setSymbol('C').setCoord2D({'x': -0.4, 'y': 0.23});
var a2 = (new Kekule.Atom()).setSymbol('C').setCoord2D({'x': 0.4, 'y': 0.23});
var a3 = (new Kekule.Atom()).setSymbol('O').setCoord2D({'x': 0, 'y': -0.46});
mol.appendNode(a1);
mol.appendNode(a2);
mol.appendNode(a3);
// add three bonds to molecule
var b1 = (new Kekule.Bond()).setBondOrder(1).setConnectedObjs([a1, a2]);
var b2 = (new Kekule.Bond()).setBondOrder(1).setConnectedObjs([a2, a3]);
var b3 = (new Kekule.Bond()).setBondOrder(1).setConnectedObjs([a3, a1]);
mol.appendConnector(b1);
mol.appendConnector(b2);
mol.appendConnector(b3);

const orgsrc = 
mol;

const orgrrs = [];


export { orgsrc, orgrrs };
