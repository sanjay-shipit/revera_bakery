/**
 * Semantic image map for Revéra Bakehouse.
 * Sources are the brand's own Instagram photography, committed under
 * ./instagram/. Vite fingerprints these imports at build time.
 */
import brandPlate from './instagram/767069178_18119725985481367_3906283919702793675_n.jpg'
import madeToShare from './instagram/783948030_18121719701481367_2903236101763861968_n.jpg'
import pizookieHero from './instagram/783948042_18121719710481367_1982099582499646162_n.jpg'
import pizookieIndulgence from './instagram/784927679_18121719698481367_5458727676020729082_n.jpg'
import giftBoxes from './instagram/788684745_18122664353481367_5196394154801386003_n.jpg'
import pizookieMoldsCraft from './instagram/788728714_18122664329481367_6909973369542293743_n.jpg'
import pizookieBoxesTop from './instagram/788948719_18122664383481367_7650799360108030145_n.jpg'
import kraftBags from './instagram/789250677_18122664392481367_8086171857384077699_n.jpg'
import pizookieMoldsTray from './instagram/789444223_18122664371481367_753929757846449320_n.jpg'
import cookieInHand from './instagram/790002316_18122664416481367_5140535171895966907_n.jpg'
import doughMacro from './instagram/790268004_18122664344481367_8639155036386232006_n.jpg'
import biscoffNoir from './instagram/793257784_18123487547481367_308543485002821200_n.jpg'
import darkChocSeaSalt from './instagram/794957893_18123487535481367_8727723163257956164_n.jpg'
import butterCakeFluffy from './instagram/801581150_18124147397481367_6778132794342398055_n.jpg'
import butterCakeBoxes from './instagram/801917111_18124147388481367_3414156413382174452_n.jpg'

// Client-provided studio photography (converted from HEIC → optimised JPEG).
import butterCakeBox from './photos/butter-cake-box.jpg'
import butterCakeServer from './photos/butter-cake-server.jpg'
import biscoffBox from './photos/biscoff-box.jpg'
import biscoffPlate from './photos/biscoff-plate.jpg'
import seaSaltLogobox from './photos/sea-salt-logobox.jpg'
import seaSaltPlate from './photos/sea-salt-plate.jpg'

export const images = {
  brandPlate,
  madeToShare,
  pizookieHero,
  pizookieIndulgence,
  giftBoxes,
  pizookieMoldsCraft,
  pizookieBoxesTop,
  kraftBags,
  pizookieMoldsTray,
  cookieInHand,
  doughMacro,
  biscoffNoir,
  darkChocSeaSalt,
  butterCakeFluffy,
  butterCakeBoxes,
  // Studio photography
  butterCakeBox,
  butterCakeServer,
  biscoffBox,
  biscoffPlate,
  seaSaltLogobox,
  seaSaltPlate,
}

export type ImageKey = keyof typeof images
