declare module "draft-js-linkify-plugin" {
  import { ComponentType, CSSProperties, ReactNode } from "react";
  import { DraftDecorator } from "draft-js";
  import { EditorPlugin } from "draft-js-plugins-editor";

  type LinkifyEditorPlugin = EditorPlugin & { decorator: DraftDecorator };

  declare const createLinkifyPlugin: () => LinkifyEditorPlugin;

  export default createLinkifyPlugin;
}
