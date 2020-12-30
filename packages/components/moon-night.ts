import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'

const MoonNight = function (props: any) {
  return h(Icon, props, {
    default: () => [
      h(
        'path',
        {
          d:
            'M384 512a448 448 0 01215.872-383.296A384 384 0 00213.76 640h188.8A448.256 448.256 0 01384 512zM171.136 704a448 448 0 01636.992-575.296A384 384 0 00499.328 704h-328.32z',
        },
        null,
      ),

      h(
        'path',
        {
          d:
            'M32 640h960q32 0 32 32t-32 32H32q-32 0-32-32t32-32zM160 768h384a32 32 0 110 64H160a32 32 0 110-64zm160 127.68l224 .256a32 32 0 0132 32V928a32 32 0 01-32 32l-224-.384a32 32 0 01-32-32v-.064a32 32 0 0132-32z',
        },
        null,
      ),
    ],
  })
} as FunctionalComponent

MoonNight.displayName = 'ElIconMoonNight'

export default MoonNight
