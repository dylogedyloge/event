import React from "react";
import { Card, TextField, Button, Typography } from "@mui/material";

const EventForm = () => {
  const textFieldStyles = {
    "& .MuiOutlinedInput-root": {
      // Target the root of the outlined input
      backgroundColor: "#F7F7F7",
      // Optional: Adjust hover/focus styles if needed
      // '&:hover .MuiOutlinedInput-notchedOutline': {
      //   borderColor: 'primary.main', // Example
      // },
      // '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      //   borderColor: 'primary.dark', // Example
      // },
    },
    // Ensure label is RTL (usually handled by theme, but can force)
    "& label": {
      right: "1.75rem", // Adjust if needed based on padding/margin
      left: "auto",
    },
    "& label.MuiInputLabel-shrink": {
      // Style for shrunk label
      right: "0", // Adjust as needed
      // You might need more specific selectors depending on exact positioning desired
    },
  };
  return (
    <Card
      sx={{
        p: 3,
        borderRadius: 3,
        ml: 0,
        boxShadow: 1,
        display: "flex",
        flexDirection: "column",
        mt: 8,
      }}
    >
      <div>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          ثبت نام رویداد
        </Typography>
        <Typography variant="body2" gutterBottom>
          لطفا درصورتی‌که کارت هدیه را پیدا کردید، اطلاعات مربوط به خود را وارد
          نمایید:
        </Typography>
        <TextField
          fullWidth
          margin="dense"
          label="نام"
          variant="outlined"
          size="small"
          sx={textFieldStyles}
        />
        <TextField
          fullWidth
          margin="dense"
          label="نام خانوادگی"
          variant="outlined"
          size="small"
          sx={textFieldStyles}
        />
        <TextField
          fullWidth
          margin="dense"
          label="شماره تماس"
          variant="outlined"
          size="small"
          sx={textFieldStyles}
        />
        <TextField
          fullWidth
          margin="dense"
          label="شماره کارت هدیه"
          variant="outlined"
          size="small"
          sx={textFieldStyles}
        />
      </div>
      <Button
        fullWidth
        variant="contained"
        sx={{ mt: 2, backgroundColor: "#065F5B" }}
      >
        ثبت نام
      </Button>
    </Card>
  );
};

export default EventForm;
