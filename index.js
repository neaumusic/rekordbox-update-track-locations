import fs from "fs";
import { DOMParser, XMLSerializer } from "xmldom";
import formatXML from "xml-formatter";
import xpath from "xpath";

fs.rmSync("rekordbox-renamed.xml", { force: true });
fs.copyFileSync("rekordbox.xml", "rekordbox-renamed.xml");

const domParser = new DOMParser();
const xmlSerializer = new XMLSerializer();
const rbtxml = fs.readFileSync("./rekordbox-renamed.xml", "utf8");
const doc = domParser.parseFromString(rbtxml);

updateTrackLocations();

const xmlString = xmlSerializer.serializeToString(doc);

if (false) {
  console.log("- Formatting XML...");
  fs.writeFileSync("rekordbox-renamed.xml", formatXML(xmlString));
} else {
  fs.writeFileSync("rekordbox-renamed.xml", xmlString);
}

function updateTrackLocations() {
  const tracks = Array.from(
    xpath.select(`/DJ_PLAYLISTS/COLLECTION/TRACK`, doc)
  );
  tracks.forEach((track) => {
    const artist = track.getAttribute("Artist");
    const name = track.getAttribute("Name");
    const oldLocation = track.getAttribute("Location");
    const fileExtension = oldLocation.slice(oldLocation.lastIndexOf('.'));
    const newLocation = oldLocation.replace(
      /\/[^\/]*$/,
      `/${encodeURIComponent(artist + " - " + name)}${fileExtension}`
    );
    track.setAttribute("Location", newLocation);
  });
}
