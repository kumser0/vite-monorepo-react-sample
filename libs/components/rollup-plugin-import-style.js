/**
 * Vite library mode builds all the styles (e.g. LESS) into style.css.
 * This CSS file remains separate from main components. When components are imported,
 * they miss style, as it remains unloaded.
 * This plugin just adds import of style.css into the main bundle file.
 * So, any time anything is imported from this module, CSS gets imported as well.
 */
export default function RollupPluginImportStyle() {
  return {
    name: 'rollup-plugin-import-style', // this name will show up in logs and errors
    async generateBundle(options, bundle) {
      console.log('\n[rollup-plugin-import-style] generateBundle - start');

      const outputJsFiles = Object.keys(bundle).filter((key) => key.endsWith('.js'));
      if (outputJsFiles.length !== 1) {
        throw Error(
          `[rollup-plugin-import-style] Expected to find one JS bundle file, but found ${outputJsFiles.length}`,
        );
      }

      const bundleFilename = outputJsFiles[0];
      console.log(`[rollup-plugin-import-style] Adding style import to ${bundleFilename}`);

      bundle[bundleFilename].imports.push('./style.css');
      bundle[bundleFilename].code = `import './style.css';\n${bundle[bundleFilename].code}`;

      console.log('[rollup-plugin-import-style] generateBundle - finish');
    },
  };
}
