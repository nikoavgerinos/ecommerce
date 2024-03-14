import { Box, Button } from "@mui/material";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook for navigation

const Confirmation = () => {
  const navigate = useNavigate(); // Get the navigate function

  const handleGoBack = () => {
    navigate("/"); // Navigate to the main page ("/")
  };

  return (
    <Box m="90px auto" width="80%" height="50vh">
      <Alert severity="success">
        <AlertTitle>Success</AlertTitle>
        Thank you for your order! We've received your request and are processing
        it with care. Confirmation details will be sent to you shortly.
      </Alert>
      <Button
        variant="contained"
        color="primary"
        onClick={handleGoBack}
        style={{ marginTop: "30px" }}
      >
        Go back to main page
      </Button>
    </Box>
  );
};

export default Confirmation;
