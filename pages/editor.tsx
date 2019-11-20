import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { EditorState } from "draft-js";

import ProTip from "../src/ProTip";
import Link from "../src/Link";
import UnicornEditor from "../src/components/unicorn-editor/UnicornEditor";

export default function About() {
  const [editorState, setEditorState] = React.useState(
    EditorState.createEmpty()
  );

  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js with TypeScript example
        </Typography>
        <Link href="/">Go to the main page</Link>
        <ProTip />
        <UnicornEditor editorState={editorState} onChange={setEditorState} />
      </Box>
    </Container>
  );
}
