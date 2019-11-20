declare module "draft-js-video-plugin" {
  import { ComponentType, VideoHTMLAttributes } from "react";
  import { DraftDecorator } from "draft-js";
  import { EditorPlugin } from "draft-js-plugins-editor";

  type VideoEditorPlugin = EditorPlugin & { decorator: DraftDecorator };

  export interface VideoPluginTheme {
    iframeContainer: string;
    iframe: string;
    invalidVideoSrc: string;
  }

  export interface VideoPluginConfig {
    decorator?: DraftDecorator;
    theme?: VideoPluginTheme;
    videoComponent?: ComponentType<VideoHTMLAttributes<HTMLVideoElement>>;
  }

  declare const createVideoPlugin: (
    config?: VideoPluginConfig
  ) => VideoEditorPlugin;

  export default createVideoPlugin;
}

declare module "draft-js-video-plugin/lib/video/modifiers/addVideo" {
  import { EditorState } from "draft-js";

  declare type AddVideoRef = {
    src: Object;
  };

  declare function addVideo(
    editorState: EditorState,
    ref: AddVideoRef
  ): EditorState;

  export default addVideo;
}
