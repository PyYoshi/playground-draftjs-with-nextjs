declare module "draft-js-image-plugin" {
  import { DraftDecorator, EditorState } from "draft-js";
  import { EditorPlugin } from "draft-js-plugins-editor";
  import { ComponentType, ImgHTMLAttributes } from "react";

  export interface ImagePluginTheme {
    image: string;
  }

  export interface ImagePluginConfig {
    decorator?: DraftDecorator;
    theme?: ImagePluginTheme;
    imageComponent?: ComponentType<ImgHTMLAttributes<HTMLImageElement>>;
  }

  export type ImageEditorPlugin = EditorPlugin & {
    addImage: (
      editorState: EditorState,
      url: string,
      extraData?: object
    ) => EditorState;
  };

  declare const createImagePlugin: (
    config?: ImagePluginConfig
  ) => ImageEditorPlugin;

  export default createImagePlugin;
}
declare module "draft-js-image-plugin/lib/modifiers/addImage" {
  import { EditorState } from "draft-js";

  declare function addImage(
    editorState: EditorState,
    url: string,
    extraData?: unknown
  ): EditorState;

  export default addImage;
}
