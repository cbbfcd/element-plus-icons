import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'

const IceTea = function (props: any) {
  return h(Icon, props, {
    default: () => [
      h(
        'path',
        {
          d:
            'M197.696 259.648a320.128 320.128 0 01628.608 0A96 96 0 01896 352v64a96 96 0 01-71.616 92.864l-49.408 395.072A64 64 0 01711.488 960H312.512a64 64 0 01-63.488-56.064l-49.408-395.072A96 96 0 01128 416v-64a96 96 0 0169.696-92.352zM264.064 256h495.872a256.128 256.128 0 00-495.872 0zm495.424 256H264.512l48 384h398.976l48-384zM224 448h576a32 32 0 0032-32v-64a32 32 0 00-32-32H224a32 32 0 00-32 32v64a32 32 0 0032 32zm160 192h64v64h-64v-64zm192 64h64v64h-64v-64zm-128 64h64v64h-64v-64zm64-192h64v64h-64v-64z',
        },
        null,
      ),
    ],
  })
} as FunctionalComponent

IceTea.displayName = 'ElIconIceTea'

export default IceTea
