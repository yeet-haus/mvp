import { primaryDarkBtn, secondaryDarkBtn } from "@daohaus/ui";
import { deathBlack, jaundiceYellow } from "./colors";

export const hotDogPrimaryBtn = {
  ...primaryDarkBtn,
  solid: {
    text: deathBlack.step1,
    bg: jaundiceYellow.step1,
    border: deathBlack.step1,
    bgHover: jaundiceYellow.step2,
    borderHover: deathBlack.step1,
    bgFocus: jaundiceYellow.step3,
    borderFocus: deathBlack.step1,
    bgDisabled: deathBlack.step2,
    borderDisabled: deathBlack.step1,
  },
  //   ghost: {
  //     text: invokeMono.step1,
  //     bgHover: invokeMono.step4,
  //     borderFocus: invokeMono.step4,
  //     disabled: invokeMono.step4,
  //   },
};

// export const invokeSecondaryBtn = {
//   ...secondaryDarkBtn,
//   solid: {
//     text: invokeMono.step1,
//     bg: invokeMono.step3,
//     border: invokeMono.step3,
//     bgHover: invokeMono.step2,
//     borderHover: invokeMono.step2,
//     bgFocus: invokeMono.step3,
//     borderFocus: invokeMono.step1,
//     bgDisabled: invokeMono.step3,
//     borderDisabled: invokeMono.step3,
//   },
//   outline: {
//     ...invokePrimaryBtn.solid,
//   },
// };
