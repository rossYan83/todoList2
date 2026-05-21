import styled from "styled-components";

export const List = styled.ul`
  list-style: none;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const TaskItem = styled.li`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
  border-bottom: ${({ isLast }) => (isLast ? "none" : "1px solid #ccc")};
`;

export const TaskCheckbox = styled.input`
  width: 18px;
  height: 18px;
  cursor: pointer;
`;

export const TaskText = styled.span`
  flex: 1;
  text-align: center;
  text-decoration: ${({ completed }) => (completed ? "line-through" : "none")};
  color: ${({ completed }) => (completed ? "#aaa" : "#222")};
  font-size: 1rem;
`;

export const DeleteButton = styled.button`
  padding: 12px 32px;
  background: #2db52d;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
`;

export const EmptyMessage = styled.p`
  color: #aaa;
`;
