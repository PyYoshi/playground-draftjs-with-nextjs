declare module "draft-js-alignment-plugin" {
  import { ComponentType } from "react";
  import { DraftDecorator } from "draft-js";
  import { EditorPlugin } from "draft-js-plugins-editor";

  export type AlignmentEditorPlugin = EditorPlugin & {
    decorator: DraftDecorator;
    AlignmentTool: ComponentType<unknown>;
  };

  declare const createAlignmentPlugin: () => AlignmentEditorPlugin;

  export default createAlignmentPlugin;
}
