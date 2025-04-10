import {
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { pluginJupyterTheme } from './theme';
import { pluginJupyterLanguage } from './language';

/**
 * Initialization data for the jupyter_tomoyan_extension extension.
 *
  * reference:
 *   https://jupyterlab.readthedocs.io/en/stable/api/classes/codemirror.EditorThemeRegistry-1.html
 *   https://github.com/jupyterlab/jupyterlab/blob/4.3.x/packages/codemirror-extension/src/services.tsx#L91
 *   https://github.com/jupyterlab/jupyterlab/blob/4.3.x/packages/codemirror/src/language.ts#L536
*/
const plugin: JupyterFrontEndPlugin<void>[] = [
  pluginJupyterTheme,
  pluginJupyterLanguage
];

export default plugin;
