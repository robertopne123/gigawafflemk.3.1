import Error from "./error";
import { isEmpty, map } from "lodash";
import Abbr from "./fields/abbr";

const CountrySelection = ({ input, handleOnChange, countries, isShipping }) => {
  const { country, errors } = input || {};

  const inputId = `country-${isShipping ? "shipping" : "billing"}`;

  return (
    <div className="">
      <label
        className="leading-7 text-sm text-gray-700 font-poppins"
        htmlFor={inputId}
      >
        Country
        <Abbr required />
      </label>
      <div className="relative w-full border-none">
        <select
          onChange={handleOnChange}
          value={country}
          name="country"
          className="bg-gray-100 bg-opacity-50 font-poppins border border-gray-500 text-gray-500 appearance-none inline-block py-3 pl-3 pr-8 rounded leading-tight w-full"
          id={inputId}
        >
          <option value="">Select a country...</option>
          {!isEmpty(countries) &&
            map(countries, (country) => (
              <option
                key={country?.countryCode}
                data-countrycode={country?.countryCode}
                value={country?.countryCode}
              >
                {country?.countryName}
              </option>
            ))}
        </select>
        <span
          className="absolute right-0 mr-1 text-gray-500"
          style={{ top: "25%" }}
        >
          <svg
            height="1em"
            viewBox="0 0 24 24"
            width="1em"
            className="arrow-down_svg__fill-current arrow-down_svg__text-3xl w-[24px] h-[24px] "
          >
            <path d="M24 24H0V0h24v24z" fill="none" opacity={0.87} />
            <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z" />
          </svg>
        </span>
      </div>
      <Error errors={errors} fieldName={"country"} />
    </div>
  );
};

export default CountrySelection;
