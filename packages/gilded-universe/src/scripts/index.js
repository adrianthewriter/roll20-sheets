import pkg from '../../package.json' // Pull name and version from package.json!
import { RunesmithSheetWorkers } from 'runesmith'

const sheet = new RunesmithSheetWorkers(pkg.name, pkg.version)

// Run all sheetworker scripts inside 'manifest'
import * as manifest from './parts/manifest'
Object.values(manifest).forEach((sheetworker) => sheetworker(sheet))
