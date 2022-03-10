import { useState } from "react";
import { motion } from "framer-motion";
import { addPropertyControls, ControlType } from "framer";

// Welcome to Code in Framer
// Get Started: https://www.framer.com/docs/guides/

/**
 * These annotations control how your component sizes
 * Learn more: https://www.framer.com/docs/guides/auto-sizing
 *
 * @framerSupportedLayoutWidth any
 * @framerSupportedLayoutHeight any
 */
export default function MenuOverlay(props) {
  const { tint, style } = props;

  const [active, setActive] = useState(false);

  return (
    <motion.div style={{ ...style, ...containerStyle }}>
      <motion.div
        onTap={() => setActive(!active)}
        style={{
          margin: 50,
          padding: 75,
          borderRadius: 30,
          backgroundColor: tint,
        }}
        whileHover={{ rotate: 90 }}
        animate={{ scale: active ? 1.25 : 1 }}
      ></motion.div>
    </motion.div>
  );
}

MenuOverlay.defaultProps = {
  tint: "#09F",
};

addPropertyControls(MenuOverlay, {
  tint: {
    title: "Tint",
    type: ControlType.Color,
  },
});

const containerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
};
