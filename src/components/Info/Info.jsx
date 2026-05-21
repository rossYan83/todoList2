import { InfoBlock } from "./Info.styles";

const Info = ({ total, completed }) => (
  <InfoBlock>
    <p>Всього завдань: {total}</p>
    <p>Виконано: {completed}</p>
  </InfoBlock>
);

export default Info;
