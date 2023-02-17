
import {
    cCount,
    capFirst,
    rev,
    repFirst,
    repAll,
    revAll,
    encode

} from "./messageMixer.js";

function displayMessage() {
    console.log(cCount("What is the color of the sky?", "t"));
    console.log(capFirst("What is the color of the sky?"));
    console.log(rev("What is the color of the sky?"));
    console.log(revAll("What is the color of the sky?"));
    console.log(repFirst("What is the color of the sky?", "sky", "water"));
    console.log(encode("What is the color of the sky?"));

  }
  
  displayMessage();