import {
  TOOGGLE_MENU_STATUS
} from './mutation-types.js'

export default {
  [TOOGGLE_MENU_STATUS] (state) {
    state.menuStatus = !state.menuStatus
  }
}
