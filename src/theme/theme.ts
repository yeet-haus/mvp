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

// return theme.danger.step9;
// return theme.secondary.step9;

export const halfHotDogTheme: ThemeOverrides = {
  themeName: "halfHotDog",
  rootBgColor: babyDiarhhea.step1,
  rootFontColor: deathBlack.step1,
  font: hotDogFont,
  secondary: {
    ...secondaryDark,
    step2: nipplePink.step1,
    step9: nipplePink.step3,
  },
  danger: {
    ...defaultDarkTheme.danger,
    step9: nipplePink.step1,
  },
  warning: {
    ...defaultDarkTheme.warning,
    step9: nipplePink.step1,
  },
  success: {
    ...defaultDarkTheme.success,
    step9: nipplePink.step3,
  },
  button: {
    ...defaultDarkTheme.button,
    primary: hotDogPrimaryBtn,
    secondary: hotDogPrimaryBtn,
    radius: "200px",
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
      bg: nipplePink.step1,
      border: nipplePink.step1,
    },
    baseItem: {
      color: banalityBeige.step1,
      hover: {
        bg: jaundiceYellow.step2,
      },
      focus: {
        bg: banalityBeige.step1,
      },
    },
    link: {
      active: {
        border: jaundiceYellow.step1,
        color: jaundiceYellow.step1,
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
  tag: {
    radius: "9px",
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
  select: {
    ...defaultDarkTheme.select,
    bg: jaundiceYellow.step1,
    color: deathBlack.step1,
    radius: "200px",
    hover: {
      bg: jaundiceYellow.step1,
      border: jaundiceYellow.step1,
    },
    option: {
      bg: jaundiceYellow.step1,
      color: deathBlack.step1,
    },
    icon: {
      color: nipplePink.step1,
    },
  },
  dropdown: {
    ...defaultDarkTheme.dropdown,
    content: {
      primary: {
        bg: jaundiceYellow.step1,
      },
      secondary: {
        bg: jaundiceYellow.step1,
      },
    },
    item: {
      primary: {
        bg: "transparent",
      },
      secondary: {
        bg: jaundiceYellow.step1,
      },
      focus: {
        primary: {
          bg: "transparent",
        },
        secondary: {
          bg: "transparent",
        },
      },
      highlight: {
        primary: {
          bg: jaundiceYellow.step1,
        },
        secondary: {
          bg: jaundiceYellow.step1,
        },
      },
      disabled: {
        color: jaundiceYellow.step1,
      },
    },
  },
  toast: {
    bg: banalityBeige.step1,
    border: banalityBeige.step1,
    radius: "0px",
    success: {
      bg: banalityBeige.step1,
      border: banalityBeige.step1,
    },
    warning: {
      bg: jaundiceYellow.step1,
      border: jaundiceYellow.step1,
    },
    error: {
      bg: jaundiceYellow.step1,
      border: jaundiceYellow.step1,
    },
    icon: {
      default: babyDiarhhea.step4,
      success: nipplePink.step3,
      warning: jaundiceYellow.step1,
      error: jaundiceYellow.step1,
    },
  },
  tooltip: {
    ...defaultDarkTheme.tooltip,
    icon: {
      color: nipplePink.step1,
    },
    content: {
      bg: nipplePink.step1,
      color: deathBlack.step1,
    },
  },
};
