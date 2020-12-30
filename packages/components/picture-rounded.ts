import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'

const PictureRounded = function (props: any) {
  return h(Icon, props, {
    default: () => [
      h(
        'path',
        {
          d:
            'M512 128a384 384 0 100 768 384 384 0 000-768zm0-64a448 448 0 110 896 448 448 0 010-896z',
        },
        null,
      ),

      h(
        'path',
        {
          d:
            'M640 288q64 0 64 64t-64 64q-64 0-64-64t64-64zM214.656 790.656l-45.312-45.312 185.664-185.6a96 96 0 01123.712-10.24l138.24 98.688a32 32 0 0039.872-2.176L906.688 422.4l42.624 47.744L699.52 693.696a96 96 0 01-119.808 6.592l-138.24-98.752a32 32 0 00-41.152 3.456l-185.664 185.6z',
        },
        null,
      ),
    ],
  })
} as FunctionalComponent

PictureRounded.displayName = 'ElIconPictureRounded'

export default PictureRounded
