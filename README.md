## Rekordbox Update Track Locations

This is demo code I had to use after messing up my library with Dougscript File Renamer in Apple Music.. yes I'm going back to Apple Music for most playback (shuffle / apple watch), see my other repo for syncing m3u8 playlists from RB to Music

## Usage

1. Check out the code, its currently set to use "Artist - Name.extension"

2. If you need to make changes and don't even know how to code, I recommend Cursor IDE which integrates Chat GPT (it's worth 15 minutes)

3. Run `yarn` to install dependencies (install yarn if you don't have it)

4. Export `"rekordbox.xml"` into this directory and run `node index.js`

5. Set rekordbox-renamed.xml in RB preferences -> advanced -> 'database location'

6. Refresh rekordbox.xml in sidebar

7. Drag all tracks in, they retain Date Added

8. Use ATGR "Rekordbox Collection Tool" to Merge Metadata (for tags)

9. Delete all the old missing files. If not all succeeded (as in my case), you may actually need to re-run the Dougscript File Renamer (some seem to have not been renamed)
