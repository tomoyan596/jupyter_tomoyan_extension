import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IEditorThemeRegistry } from '@jupyterlab/codemirror';
import { ITranslator, nullTranslator } from '@jupyterlab/translation';

import * as CMThemes from '@fsegurai/codemirror-theme-bundle';

/**
 * Added CodeMirror theme for jupyter_tomoyan_extension extension.
 *
  * reference:
 *   https://jupyterlab.readthedocs.io/en/stable/api/classes/codemirror.EditorThemeRegistry-1.html
 *   https://github.com/jupyterlab/jupyterlab/blob/4.3.x/packages/codemirror-extension/src/services.tsx#L91
 *   https://github.com/jupyterlab/jupyterlab/blob/4.3.x/packages/codemirror/src/language.ts#L536
*/
export const pluginJupyterTheme: JupyterFrontEndPlugin<void> = {
  id: 'jupyter_tomoyan_extension:theme',
  description: 'A JupyterLab extension.',
  autoStart: true,
  requires: [IEditorThemeRegistry, ITranslator],
  activate: (app: JupyterFrontEnd, theme: IEditorThemeRegistry, translator: ITranslator) => {
    console.log('JupyterLab extension jupyter_tomoyan_extension:theme is activated!');

    const trans = (translator ?? nullTranslator).load('jupyterlab');

    for (const [name, cm_theme] of Object.entries(CMThemes)) {
      theme.addTheme({
        name: name,
        displayName: trans.__(name),
        theme: cm_theme
      });
    }
  }
};