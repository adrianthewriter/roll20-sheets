import pkg from '../../package.json' // Pull name and version from package.json!
import { Runesmith } from 'runesmith'

const sheet = new Runesmith.SheetWorkers(pkg.name, pkg.version)

// Run all sheetworker scripts inside 'manifest'
import * as manifest from './parts/manifest'
Object.values(manifest).forEach((sheetworker) => sheetworker(sheet))
