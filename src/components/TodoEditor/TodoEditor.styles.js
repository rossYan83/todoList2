import styled from "styled-components";

export const EditorWrapper = styled.div`
  border: 1px solid #ccc;
  padding: 16px;
  margin-bottom: 32px;
`;

export const EditorTextarea = styled.textarea`
  width: 100%;
  height: 80px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  margin-bottom: 12px;
  resize: vertical;
  background: #f9f9f9;
  color: #000;
`;

export const SubmitButton = styled.button`
  padding: 12px 32px;
  background: #2db52d;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
