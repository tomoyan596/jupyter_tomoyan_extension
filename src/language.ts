import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IEditorLanguageRegistry } from '@jupyterlab/codemirror';
import { ITranslator, nullTranslator } from '@jupyterlab/translation';

/*
 * Added CodeMirror language definition to the jupyter_tomoyan_extension extension.
 *
 * reference:
 *   https://jupyterlab.readthedocs.io/en/stable/api/classes/codemirror.EditorLanguageRegistry-1.html
 *   https://github.com/jupyterlab/jupyterlab/blob/4.3.x/packages/codemirror-extension/src/services.tsx#L45
 *   https://github.com/jupyterlab/jupyterlab/blob/4.3.x/packages/codemirror/src/language.ts#L536
*/
export const pluginJupyterLanguage: JupyterFrontEndPlugin<void> = {
  id: 'jupyter_tomoyan_extension:languages',
  description: 'A JupyterLab extension.',
  autoStart: true,
  requires: [IEditorLanguageRegistry, ITranslator],
  activate: (app: JupyterFrontEnd, language: IEditorLanguageRegistry, translator: ITranslator) => {
    console.log('JupyterLab extension jupyter_tomoyan_extension:languages is activated!');

    const trans = (translator ?? nullTranslator).load('jupyterlab');

    language.addLanguage({
      name: 'Astro',
      displayName: trans.__('Astro'),
      alias: ['astro'],
      mime: 'text/astro-jsx',
      extensions: ['astro'],
      async load() {
        const m = await import('@codemirror/lang-javascript');
        return m.javascript({ jsx: true, typescript: true });
      }
    });
  }
};
