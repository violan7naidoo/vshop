import { createClient } from "@sanity/client"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token:
    "skYIngjkRgW6F4kaGHke2Jh4NZMC3lkkXniPgqVEP8WShjOMh3Mb3c1QUrLNFGs1AWZvKT9SEpSVfDBe20XBZigx4nVFzastgVZxnBPLjFYQTRG40fFPX2LGCVD20wuW6zYMnlnyfoFwaQ3sJLaz9q7l78mrC7OBG1F7Zxpja5j1LZyVOmGo",
})
