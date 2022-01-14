export const operatingSystem = () => {
  var OSName = "Unknown OS";
  if (navigator.userAgent.indexOf("Win") !== -1) OSName = "Windows";
  if (navigator.userAgent.indexOf("Mac") !== -1) OSName = "MacOS";
  if (navigator.userAgent.indexOf("X11") !== -1) OSName = "UNIX";
  if (navigator.userAgent.indexOf("Linux") !== -1) OSName = "Linux";

  return OSName;
};

// export const browserSystem = () => {
//   var nAgt = navigator.userAgent;
//   var browserName = navigator.appName;
//   var nameOffset, verOffset

//   if ((verOffset = nAgt.indexOf("OPR/")) !== -1) {
//     browserName = "Opera";
//   }

//   else if ((verOffset = nAgt.indexOf("Opera")) !== -1) {
//     browserName = "Opera";
//   }
//   // In MSIE, the true version is after "MSIE" in userAgent
//   else if ((verOffset = nAgt.indexOf("MSIE")) !== -1) {
//     browserName = "Microsoft Internet Explorer";
//   }
//   // In Chrome, the true version is after "Chrome"
//   else if ((verOffset = nAgt.indexOf("Chrome")) !== -1) {
//     browserName = "Chrome";
//   }
//   // In Safari, the true version is after "Safari" or after "Version"
//   else if ((verOffset = nAgt.indexOf("Safari")) !== -1) {
//     browserName = "Safari";
//   }
//   // In Firefox, the true version is after "Firefox"
//   else if ((verOffset = nAgt.indexOf("Firefox")) !== -1) {
//     browserName = "Firefox";
//   }
//   // In most other browsers, "name/version" is at the end of userAgent
//   else if (
//     (nameOffset = nAgt.lastIndexOf(" ") + 1) <
//     (verOffset = nAgt.lastIndexOf("/"))
//   ) {
//     browserName = nAgt.substring(nameOffset, verOffset);
//     if (browserName.toLowerCase() === browserName.toUpperCase()) {
//       browserName = navigator.appName;
//     }
//   }

//   console.log("" + "Browser name  = " + browserName);
// };
