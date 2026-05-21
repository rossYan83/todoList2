import { FilterWrap, FilterLabel, FilterInput } from "./Filter.styles";

const Filter = ({ value, onChange }) => (
  <FilterWrap>
    <FilterLabel>Фільтр по імені</FilterLabel>
    <FilterInput
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  </FilterWrap>
);

export default Filter;
