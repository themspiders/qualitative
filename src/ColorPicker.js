import { useState } from "react";
import { BlockPicker, CirclePicker } from "react-color";
import Button from "react-bootstrap/Button";
import "./Main.css";
import { colors, whitecolor, colorless, noppt } from "./colors.js";

function ColorPicker(props) {
//  const circleColors = [].concat.apply([], Object.keys(colors).map((x) => colors[x]));
  const [title, setTitle] = useState(props.name);
  const containsSet = (x, y) => {
    return y.every((e) => {
        return x.includes(e)
    })
  };
  const circleColors = Object.keys(colors).map((x) => colors[x]).reduce((x, y) => {
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
//  console.log('circleColors: ', circleColors); 
  const defColor = whitecolor;
  const [color, setColor] = useState(defColor);
  const [show, setShow] = useState(false);
  
  const onChange = (color) => {
//    console.log('onChange: color: ', color);
//    console.log('onChange: prop: ', props.prop);
    setColor(color);
    props.callback(color);
    setTitle(
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
    setShow(show => !show);
  };
  
  const handleShow = () => {
    setShow(show => !show);
  };

  const defBlock = {
      backgroundColor: "#ffffff",
      border: "2px solid #999",
      color: '#000000',
  };

  const blocks = {
    [whitecolor]: defBlock,
    [colorless]: defBlock,
    [noppt]: defBlock,
    "default": defBlock,
    "color": {
      backgroundColor: `${color}`,
      border: "2px solid " + `${color}`,
    },
  };

  const blackhex = {
    "PPT": noppt,
    "SOL": colorless,
  };

  const blockStyle = (color) => {
//    console.log('blocks: ', blocks);
//    console.log('blockStyle: ', `blocks[${color}]: ${blocks[color]}`);
    //color === whitecolor ? blocks['white'] : (color === colorless ? blocks['colorless'] : blocks['color'])}
    return (color ? (blocks[color] ? blocks[color] : blocks["color"]) : blocks["default"]);
  };
  
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

  return (
      <div className="circlepicker">
      <Button variant="primary"
        style={blockStyle(props.color)}
        onClick={handleShow}
      >
        {title}
      </Button>
      {show ?
        <CirclePicker
          className={cpClassName(props.color)}
          width={100}
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
  );
}

export default ColorPicker;
