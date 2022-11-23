export const formatTextFirstChar = (str: any, uppercase = true) => {
  if (!str) {
    return "";
  }
  const char = str.charAt(0);
  return uppercase ? char.toUpperCase() : char;
};

export const formatTextCapitalized = (str: any) => {
  if (!str) {
    return "";
  }
  const textWithCapitalLetter = formatTextFirstChar(str) + str.slice(1);

  return textWithCapitalLetter.replace(/_|-/g, " ").trim();
};

/* format from seconds to hh:mm */
export const formatTime = (s) => {
  if (s === 0) return "00:00";

  const hours = Math.floor(s / 60 / 60);

  const minutes = Math.floor(s / 60) - hours * 60;

  const formattedTime =
    hours.toString().padStart(2, "0") +
    ":" +
    minutes.toString().padStart(2, "0");

  return formattedTime;
};

export const getInitials = (fullName: any) => {
  const allNames = (fullName || "").trim().split(" ");
  const initials = allNames.reduce(
    (acc: any, curr: any, index: any) => {
      if (index === 0 || index === allNames.length - 1) {
        acc = `${acc}${curr.charAt(0).toUpperCase()}`;
      }
      return acc;
    },
    [""]
  );
  return initials;
};
