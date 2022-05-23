import * as _214 from "./abci/types";
import * as _215 from "./crypto/keys";
import * as _216 from "./crypto/proof";
import * as _217 from "./libs/bits/types";
import * as _218 from "./p2p/types";
import * as _219 from "./types/block";
import * as _220 from "./types/evidence";
import * as _221 from "./types/params";
import * as _222 from "./types/types";
import * as _223 from "./types/validator";
import * as _224 from "./version/types";
export namespace tendermint {
  export const abci = { ..._214
  };
  export const crypto = { ..._215,
    ..._216
  };
  export namespace libs {
    export const bits = { ..._217
    };
  }
  export const p2p = { ..._218
  };
  export const types = { ..._219,
    ..._220,
    ..._221,
    ..._222,
    ..._223
  };
  export const version = { ..._224
  };
}