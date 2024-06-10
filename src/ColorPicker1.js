import "./Main.css";
import { useState } from "react";
import { BlockPicker, CirclePicker } from "react-color";
import Button from "react-bootstrap/Button";
import { colors, whitecolor, colorless, noppt, getNamesFromColor, doColorName, doColorNames } from "./colors.js";
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
  
  const toRemove = (props.name === "PPT" ? colorless : (props.name === "SOL" ? noppt : null));
  if (toRemove) {
    const index = circleColors.indexOf(toRemove);
      if (index > -1) {
        circleColors.splice(index, 1);
    }
  };
  
  const defColor = whitecolor;
  const [color, setColor] = useState(defColor);
  const [show, setShow] = useState(false);

  const nativeTitle = (color) => {
    return (
      color === colorless
      ? "INCOLORO"
      : (color === noppt
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
    if (props.disabled && props.pptsol) {
      ret = doColorName(props.pptsol);
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
    "PPT": noppt,
    "SOL": colorless,
  };

  const blockStyle = (color) => {
    const blocks = {
      [whitecolor]: defBlock,
      [colorless]: defBlock,
      [noppt]: defBlock,
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
      : (color === colorless
        ? "colorless-selected"
        : (color === noppt
          ? "noppt-selected" 
          : ""
          )
        )
    );
  };
  
  const header = (content) => {
    return (
      <h6 style={{"user-select": "none"}}>{content}</h6>
    );
  };

  const makeLabel = (color) => {
    return (
      <div style={{color: colors[color].default}}>
        {doColorName(color)}
      </div>
    );
  }

  const options = Object.keys(colors).map((x) => ({value: x, label: makeLabel(x)}));

    return (
      <Select 
        options={options}
        onChange={(select) => onChange(color)}
//        values={(this.props.values ? this.tovl(this.props.values) : [])}
//        values={[{value: this.props.value, label: this.props.value}]} 
      />
  );

  return (
    <div className="colorpicker">
    {header(props.name)}
    <div className="circlepicker">
      <Button variant="primary"
        style={blockStyle(props.color)}
        className={btnClassName(props.color)}
        onClick={handleShow}
        disabled={props.disabled}
      >
        {title(props.color)}
      </Button>
      {show ?
        <CirclePicker
          className={cpClassName(props.color)}
          circleSize={24}
          circleSpacing={10}
          color={color}
          onChange={(color) => {
            onChange(onChangeProp(color));
          }}
          colors={circleColors}
        />
      : null}
    </div>
    </div>
  );
}

export default ColorPicker;
