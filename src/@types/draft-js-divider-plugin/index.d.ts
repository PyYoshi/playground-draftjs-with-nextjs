declare module "draft-js-divider-plugin" {
  import { ComponentType } from "react";
  import { DraftDecorator } from "draft-js";
  import { EditorPlugin } from "draft-js-plugins-editor";
  import { DraftJsButtonTheme } from "draft-js-buttons";

  export interface DividerPluginConfig {
    decorator?: DraftDecorator;
  }

  type DividerButtonProps = {
    theme?: DraftJsButtonTheme;
    getEditorState: () => EditorState;
    setEditorState: (editorState: EditorState) => void;
  };

  type DividerEditorPlugin = EditorPlugin & {
    decorator: DraftDecorator;
    DividerButton: ComponentType<DividerButtonProps>;
  };

  declare const createDividerPlugin: (
    config?: DividerPluginConfig
  ) => DividerEditorPlugin;

  export default createDividerPlugin;
}
