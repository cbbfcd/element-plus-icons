import { h } from 'vue'
import Icon from '../icon'

import type { FunctionalComponent } from 'vue'
const d = 'M256 128a64 64 0 00-64 64v640a64 64 0 0064 64h512a64 64 0 0064-64V192a64 64 0 00-64-64H256zm0-64h512a128 128 0 01128 128v640a128 128 0 01-128 128H256a128 128 0 01-128-128V192A128 128 0 01256 64zm128 128h256a32 32 0 110 64H384a32 32 0 010-64zm128 640a64 64 0 110-128 64 64 0 010 128z'

const Cellphone = function (props: any) {
  return h(
    Icon,
    props,
    {
      default: () => h('path', { d }, null),
    },
  );
} as FunctionalComponent;

Cellphone.displayName = 'Cellphone';

export default Cellphone;

