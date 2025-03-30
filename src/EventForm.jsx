import React from "react";
import { Card, TextField, Button, Typography } from "@mui/material";

const EventForm = () => {
  return (
    <Card sx={{ p: 3, borderRadius: 3 }}>
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        ثبت نام رویداد
      </Typography>
      <Typography variant="body2" color="textSecondary" gutterBottom>
        لطفا درصورتی‌که کارت هدیه را پیدا کردید، اطلاعات مربوط به خود را وارد
        نمایید:
      </Typography>
      <TextField fullWidth margin="normal" label="نام" variant="outlined" />
      <TextField
        fullWidth
        margin="normal"
        label="نام خانوادگی"
        variant="outlined"
      />
      <TextField
        fullWidth
        margin="normal"
        label="شماره تماس"
        variant="outlined"
      />
      <TextField
        fullWidth
        margin="normal"
        label="شماره کارت هدیه"
        variant="outlined"
      />
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
