import { helper } from '@ember/component/helper';

export function not([param]/*, hash*/) {
  return !param;
}

export default helper(not);
