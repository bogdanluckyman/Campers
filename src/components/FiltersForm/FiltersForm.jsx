import { useState, useRef } from "react";
import Select from "react-dropdown-select";
import { LOCATION_OPTIONS, FILTERS_TYPE, FILTERS_EQUIPMENT } from "constants";
import { gerAllSearchParams, smoothScrollToTarget } from "helpers";
import { LocationIcon } from "components/icons";
import {
  FiltersWrap,
  FormFilters,
  LabelFilters,
  LabelLocation,
  RadioBtn,
  CheckBox,
  FieldSet,
  InputWrap,
  ButtonsWrap,
} from "./FiltersForm.styled";

const FiltersForm = ({ setPage, searchParams, setSearchParams }) => {
  const [filterParams, setFilterParams] = useState({});
  const checkbox = useRef(null);
  const dropdownRef = useRef(null);

  const params = {};
  gerAllSearchParams(searchParams, params);

  const handleFilterAdverts = (e) => {
    e.preventDefault();
    setSearchParams({});
    setPage(1);
    setSearchParams({ ...filterParams });
    smoothScrollToTarget("advertBlock");
  };

  const resetFilters = () => {
    [...checkbox.current?.elements].forEach((input) => {
      if (input.type === "checkbox" || input.type === "radio") {
        input.checked = false;
      }
    });

    dropdownRef.current?.clearAll();
    setSearchParams({});
    setFilterParams({});
  };

  return (
    <FormFilters onSubmit={handleFilterAdverts} ref={checkbox}>
      <LabelLocation>
        Location
        <Select
          ref={dropdownRef}
          placeholder="Location"
          options={LOCATION_OPTIONS}
          onChange={(arr) => {
            if (arr.length > 0) {
              setFilterParams((prev) => ({ ...prev, location: arr[0].value }));
            }
          }}
          closeOnScroll={true}
          color="var(--accent-red)"
        />
        <LocationIcon width={20} height={20} />
      </LabelLocation>

      <FiltersWrap>
        Filters
        <LabelFilters>
          Vehicle equipment
          <hr />
          <FieldSet>
            {FILTERS_EQUIPMENT.map(({ name, value, icon: Icon, text }, i) => (
              <InputWrap key={`${text}/${i}`}>
                <input
                  type="checkbox"
                  name={name}
                  value={value}
                  onChange={({ target }) => {
                    if (target.checked) {
                      setFilterParams((prev) => ({
                        ...prev,
                        [target.name]: target.value,
                      }));
                    } else {
                      setFilterParams((prev) => {
                        const { [target.name]: removedParam, ...rest } = prev;
                        return { ...rest };
                      });
                    }
                  }}
                />
                <CheckBox>
                  <Icon width={20} height={20} size={20} /> {text}
                </CheckBox>
              </InputWrap>
            ))}
          </FieldSet>
        </LabelFilters>
        <LabelFilters>
          Vehicle type
          <hr />
          <FieldSet>
            {FILTERS_TYPE.map(({ value, icon: Icon, text }, i) => (
              <InputWrap key={`${text}/${i}`}>
                <input
                  type="radio"
                  name="type"
                  value={value}
                  onChange={({ target }) =>
                    setFilterParams((prev) => ({
                      ...prev,
                      form: target.value,
                    }))
                  }
                />
                <RadioBtn>
                  <Icon width={20} height={20} /> {text}
                </RadioBtn>
              </InputWrap>
            ))}
          </FieldSet>
        </LabelFilters>
      </FiltersWrap>

      <ButtonsWrap>
        <button type="submit">Search</button>
        <button
          id="reset-button"
          type="button"
          aria-label="Reset filter fields"
          onClick={resetFilters}
        >
          Reset
        </button>
      </ButtonsWrap>
    </FormFilters>
  );
};

export default FiltersForm;
