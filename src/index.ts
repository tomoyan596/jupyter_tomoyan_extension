import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * Initialization data for the jupyter_tomoyan_extension extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jupyter_tomoyan_extension:plugin',
  description: 'A JupyterLab extension.',
  autoStart: true,
  requires: [IThemeManager],
  activate: (app: JupyterFrontEnd, manager: IThemeManager) => {
    console.log('JupyterLab extension jupyter_tomoyan_extension is activated!');
    const style = 'jupyter_tomoyan_extension/index.css';

    manager.register({
      name: 'jupyter_tomoyan_extension',
      isLight: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  }
};

export default plugin;
