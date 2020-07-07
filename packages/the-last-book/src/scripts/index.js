import SwordsmithSheetWorkers from './util/swordsmith-helper'

const sheet = new SwordsmithSheetWorkers()

/**
 * Import Parts
 */
import batch from './parts/index'
batch.forEach((script) => script(sheet))
