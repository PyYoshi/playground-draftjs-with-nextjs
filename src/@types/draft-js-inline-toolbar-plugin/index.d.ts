declare module "draft-js-inline-toolbar-plugin" {
  import { ComponentType } from "react";
  import { DraftDecorator } from "draft-js";
  import { EditorPlugin } from "draft-js-plugins-editor";

  type InlineToolbarEditorPlugin = EditorPlugin & {
    decorator: DraftDecorator;
    InlineToolbar: ComponentType<unknown>;
  };

  declare const createInlineToolbarPlugin: () => InlineToolbarEditorPlugin;

  export default createInlineToolbarPlugin;
}
