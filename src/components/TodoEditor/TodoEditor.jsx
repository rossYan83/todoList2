import { Component } from "react";
import {
  EditorWrapper,
  EditorTextarea,
  SubmitButton,
} from "./TodoEditor.styles";

class TodoEditor extends Component {
  state = { textValue: "" };

  handleSubmit = () => {
    const { textValue } = this.state;
    if (!textValue.trim()) return;
    this.props.onAdd(textValue.trim());
    this.setState({ textValue: "" });
  };

  render() {
    const { textValue } = this.state;
    return (
      <EditorWrapper>
        <EditorTextarea
          placeholder=""
          value={textValue}
          onChange={(e) => this.setState({ textValue: e.target.value })}
        />
        <SubmitButton
          onClick={this.handleSubmit}
          disabled={!textValue.trim()}
        >
          Create
        </SubmitButton>
      </EditorWrapper>
    );
  }
}

export default TodoEditor;
