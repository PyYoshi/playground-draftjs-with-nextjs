declare module "draft-js-hashtag-plugin" {
  import { ComponentType } from "react";
  import { DraftDecorator } from "draft-js";
  import { EditorPlugin } from "draft-js-plugins-editor";

  type HashtagEditorPlugin = EditorPlugin & { decorator: DraftDecorator };

  declare const createHashtagPlugin: () => HashtagEditorPlugin;

  export default createHashtagPlugin;
}
