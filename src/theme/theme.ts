import {
  ThemeOverrides,
  defaultDarkTheme,
  secondaryDark,
  successDarkBtn,
} from "@daohaus/ui";
import {
  babyDiarhhea,
  banalityBeige,
  deathBlack,
  jaundiceYellow,
  nipplePink,
} from "./colors";
import { hotDogFont } from "./font";
import { hotDogPrimaryBtn } from "./buttons";

export const halfHotDogTheme: ThemeOverrides = {
  themeName: "halfHotDog",
  rootBgColor: babyDiarhhea.step1,
  rootFontColor: deathBlack.step1,
  secondary: {
    ...secondaryDark,
    step2: nipplePink.step1,
  },
  font: hotDogFont,
  button: {
    ...defaultDarkTheme.button,
    primary: hotDogPrimaryBtn,
    secondary: hotDogPrimaryBtn,
  },
  card: {
    ...defaultDarkTheme.card,
    bg: banalityBeige.step1,
    radius: "200px",
  },
  navigationMenu: {
    root: {
      bg: nipplePink.step1,
    },
    content: {
      bg: secondaryDark.step4,
      border: secondaryDark.step3,
    },
    baseItem: {
      color: jaundiceYellow.step1,
      hover: {
        bg: jaundiceYellow.step2,
      },
      focus: {
        bg: secondaryDark.step11,
      },
    },
    link: {
      active: {
        border: jaundiceYellow.step3,
        color: jaundiceYellow.step3,
      },
    },
  },
  field: {
    fontWeight: hotDogFont.weight.reg,
    fontSize: hotDogFont.size.md,
    inputFont: hotDogFont.family.body,
    labelFont: hotDogFont.family.header,
    size: {
      md: "28rem",
      lg: "52rem",
      full: "100%",
    },
    radius: "50px",
    transition: "0.2s all ease-in-out",
  },
  input: {
    ...defaultDarkTheme.input,
    bg: banalityBeige.step1,
    border: deathBlack.step1,
    color: deathBlack.step1,
    placeholder: deathBlack.step2,
    hover: {
      bg: banalityBeige.step2,
      border: deathBlack.step1,
    },
  },
  textarea: {
    ...defaultDarkTheme.textarea,
    bg: banalityBeige.step1,
    border: deathBlack.step1,
    color: deathBlack.step1,
    placeholder: deathBlack.step2,
    hover: {
      bg: banalityBeige.step2,
      border: deathBlack.step1,
    },
  },
  dialog: {
    radius: "4px",
    overlay: {
      bg: banalityBeige.step1,
    },
    content: {
      bg: banalityBeige.step1,
      color: deathBlack.step1,
    },
  },
};
