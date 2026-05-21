import styled from "styled-components";

export const FilterWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 32px;
`;

export const FilterLabel = styled.label`
  white-space: nowrap;
`;

export const FilterInput = styled.input`
  width: 300px;
  padding: 8px 12px;
  border: 2px solid #333;
  border-radius: 4px;
  font-size: 1rem;
  background: #f9f9f9;
  color: #000;
`;
