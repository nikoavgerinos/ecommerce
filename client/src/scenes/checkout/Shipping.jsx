import {
  Box,
  Checkbox,
  Checkout,
  FormControlLabel,
  Typography,
} from "@mui/material";
import AddressForm from "./AdressForm";

const Shipping =
  () =>
  ({ values, errors, touched, handleBlur, handleChange, setFieldValue }) => {
    return (
      <Box m="30px auto">
        {/* BILLING FORM */}
        <Box>
          <Typography sx={{ mb: "15px" }} fontSize="18px">
            Billing Information
          </Typography>
          <AddressForm
            type="billingAdress"
            value={values.billingAddress}
            errors={errors}
            touched={touched}
            handleBlur={handleBlur}
            handleChange={handleChange}
          />
        </Box>

        <Box mb="20px">
          <FormControlLabel
            label="Same for Shipping Address"
            control={
              <Checkbox
                defaultChecked
                value={values.shippingAdress.isSameAddress}
                onChange={() =>
                  setFieldValue(
                    "shippingAddress.isSameAddress",
                    !values.shippingAdress.isSameAddress
                  )
                }
              />
            }
          />
        </Box>

        {/* SHIPPING FORM */}
        {!values.shippingAdress.isSameAddress && (
          <Box>
            <Typography sx={{ mb: "15px" }} fontSize="18px">
              Shipping Information
            </Typography>
            <AddressForm
              type="shippingAdress"
              value={values.shippingAddress}
              errors={errors}
              touched={touched}
              handleBlur={handleBlur}
              handleChange={handleChange}
            />
          </Box>
        )}
      </Box>
    );
  };

export default Shipping;
