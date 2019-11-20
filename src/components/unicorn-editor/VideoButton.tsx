import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
// import DialogContentText from "@material-ui/core/DialogContentText";
// import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import Videocam from "@material-ui/icons/Videocam";
import { EditorState, convertToRaw } from "draft-js";
import React from "react";

import addVideo from "draft-js-video-plugin/lib/video/modifiers/addVideo";

interface VideoButtonProps {
  theme?: any;
  getEditorState: () => EditorState;
  setEditorState: (editorState: EditorState) => void;
}

interface VideoButtonState {
  isDialogOpen: boolean;
  inputText: string;
}

// TODO: Function Componentへ移行する
export default class VideoButton extends React.Component<
  VideoButtonProps,
  VideoButtonState
> {
  constructor(props: VideoButtonProps) {
    super(props);
    this.state = { isDialogOpen: false, inputText: "" };
  }

  public render() {
    const { theme } = this.props;
    const { isDialogOpen, inputText } = this.state;
    return (
      <div
        className={
          theme != null && theme.buttonWrapper != null
            ? theme.buttonWrapper
            : null
        }
        onMouseDown={this.preventBubblingUp}
      >
        <button
          type="button"
          onClick={this.openDialog}
          title="動画を埋め込む"
          className={
            theme != null && theme.button != null ? theme.button : null
          }
        >
          <Videocam />
        </button>
        <Dialog
          onClick={this.preventBubblingUp}
          open={isDialogOpen}
          onClose={this.closeDialog}
          fullWidth={true}
          maxWidth={"sm"}
        >
          <DialogContent>
            <TextField
              autoFocus={true}
              margin="dense"
              id="name"
              label="動画URLを入力してください"
              type="url"
              fullWidth={true}
              value={inputText}
              onChange={this.handleInputChange}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.closeDialog} color="primary">
              キャンセル
            </Button>
            <Button onClick={this.addVideo} color="primary">
              埋め込む
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }

  private preventBubblingUp = (event: any) => {
    event.preventDefault();
  };

  private addVideo = () => {
    const { getEditorState, setEditorState } = this.props;
    const { inputText } = this.state;

    console.log(inputText);
    const newState = addVideo(getEditorState(), { src: inputText });
    console.log(
      JSON.stringify(convertToRaw(newState.getCurrentContent()), null, 2)
    );
    setEditorState(newState);
    this.setState({ inputText: "" });
    this.closeDialog();
  };

  private openDialog = () => {
    this.setState({ isDialogOpen: true });
  };

  private closeDialog = () => {
    this.setState({ isDialogOpen: false });
  };

  private handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ inputText: e.currentTarget.value });
  };
}
