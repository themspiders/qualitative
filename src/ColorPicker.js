import "./Main.css";
import { useState } from "react";
import { BlockPicker, CirclePicker } from "react-color";
import Button from "react-bootstrap/Button";
import { colors, whitecolor, colorlessColor, nopptName, nopptColor, getNamesFromColor, doColorName, doColorNames } from "./colors.js";
import Select from "react-dropdown-select";

function ColorPicker(props) {
  const containsSet = (x, y) => {
    return y.every((e) => {
        return x.includes(e)
    })
  };
  const circleColors = Object.keys(colors).map((x) => colors[x].shades).reduce((x, y) => {
    y.forEach((c) => {return x.includes(c) ? x : x.push(c)})
    return x;
  }, []);

  const header = (content) => {
    return (
      <h6 style={{"user-select": "none"}}>{content}</h6>
    );
  };

  const placeHolder = (props.name === "PPT" ? "Precipitado..." : "Solucion...");

  const makeLabel = (color) => {
    return (
      <div style={{color: colors[color].default}}>
        {doColorName(color, props.name === "PPT" ? false : true)}
      </div>
    );
  }

  const makeOption = (x) => {
    return ({value: x, label: makeLabel(x)});
  }

  const opts = Object.keys(colors);
  const toRemove = (props.name === "PPT" ? 'incoloro' : (props.name === "SOL" ? 'noppt' : null));
  if (toRemove) {
    const index = opts.indexOf(toRemove);
    if (index > -1) {
      opts.splice(index, 1);
    }
  };
  const options = opts.map((x) => (makeOption(x)));
  console.log({toRemove}, {opts}, {options});

  
  const defColor = whitecolor;
  const [color, setColor] = useState(defColor);
  const [show, setShow] = useState(false);

  const nativeTitle = (color) => {
    return (
      color === colorlessColor
      ? "INCOLORO"
      : (color === nopptColor
        ? "SIN PPT"
        : (color === whitecolor
          ? (props.name === "PPT"
            ? "PPT BLANCO"
            : "SOL BLANCA"
            )
          : props.name
          )
        )
    );
  }

  const title = (color) => {
    let ret = "";
    if (props.disabled && props.pptsolname) {
      ret = doColorName(props.pptsolname);
      return ret;
    }
    ret = doColorNames(getNamesFromColor(color));
    return (ret ? ret : "Seleccionar..."); 
  }

  const onChange = (color) => {
    if (!props.disabled) {
      setColor(color);
      props.callback(color);
      title(color);
    }
    setShow(false);
  };
  
  const handleShow = () => {
    setShow(show => !show);
  };

  const defBlock = {
      "backgroundColor": "#ffffff",
      "border": "1px solid #999",
      "color": '#000000',
      "white-space": "nowrap", 
      "min-width": "auto",
  };

  const blackhex = {
    "PPT": nopptColor,
    "SOL": colorlessColor,
  };

  const blockStyle = (color) => {
    const blocks = {
      [whitecolor]: defBlock,
      [colorlessColor]: defBlock,
      [nopptColor]: defBlock,
      "default": defBlock,
      "color": {
        "backgroundColor": color,
        "border": "1px solid " + color,
        "white-space": "nowrap", 
        "min-width": "auto",
      },
    };
//    console.log('blockStyle: ', color);
//    console.log(props.name, color ? (blocks[color] ? blocks[color] : blocks["color"]) : blocks["default"]);
    return (
      color
      ? (blocks[color]
        ? blocks[color]
        : blocks["color"]
        )
      : blocks["default"]
    );
  };
  
  const btnClassName = (color) => {
    if (!props.disable && !props.color) {
      return "default select";
    }
    return "default";
  }
  
  const onChangeProp = (color) => {
    return (color.hex === "#000000" ? blackhex[props.name] : color.hex);
  };

  const cpClassName = (color) => {
    return (
      color === whitecolor
      ? "white-selected"
      : (color === colorlessColor
        ? "colorless-selected"
        : (color === nopptColor
          ? "noppt-selected" 
          : ""
          )
        )
    );
  };
  
    return (
      <Select 
        options={options}
        onChange={(select) => onChange(select[0] ? select[0].value : null)}
        placeholder={placeHolder}
        searchable={false}
      />
  );
//        values={props.pptsolname ? [makeOption(props.pptsolname)] : []}

}

export default ColorPicker;
