import Error from "./error";

const PaymentModes = ({ input, handleOnChange }) => {
  const { errors, paymentMethod } = input || {};

  return (
    <div className="mt-3">
      <Error errors={errors} fieldName={"paymentMethod"} />
      {/*Direct bank transfers*/}
      <div className="form-check woo-next-payment-input-container mt-2">
        <label className="form-check-label">
          <input
            onChange={handleOnChange}
            value="bacs"
            className="form-check-input mr-3"
            name="paymentMethod"
            type="radio"
            checked={"bacs" === paymentMethod}
          />
          <span className="woo-next-payment-content font-poppins">
            Direct Bank Transfer
          </span>
        </label>
      </div>
      {/*	Payment Instructions*/}
    </div>
  );
};

export default PaymentModes;
