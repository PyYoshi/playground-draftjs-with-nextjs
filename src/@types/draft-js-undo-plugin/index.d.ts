declare module "draft-js-undo-plugin" {
  import { ComponentType } from "react";
  import { DraftDecorator } from "draft-js";
  import { EditorPlugin } from "draft-js-plugins-editor";

  type UndoEditorPlugin = EditorPlugin & {
    decorator: DraftDecorator;
    UndoButton: ComponentType<unknown>;
    RedoButton: ComponentType<unknown>;
  };

  declare const createUndoPlugin: () => UndoEditorPlugin;

  export default createUndoPlugin;
}
