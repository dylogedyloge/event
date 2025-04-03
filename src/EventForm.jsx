import React from "react";
import { Card, TextField, Button, Typography } from "@mui/material";

const EventForm = () => {
  return (
    <Card sx={{ 
      p: 3, 
      borderRadius: 3,
      ml: 0,
      boxShadow: 1,
      height: "340px", // Set a fixed height
      display: "flex",
      flexDirection: "column",
      mt:8
      
    }}>
      <div>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          ثبت نام رویداد
        </Typography>
        <Typography variant="body2" color="textSecondary" gutterBottom>
          لطفا درصورتی‌که کارت هدیه را پیدا کردید، اطلاعات مربوط به خود را وارد
          نمایید:
        </Typography>
        <TextField 
          fullWidth 
          margin="dense" 
          label="نام" 
          variant="outlined" 
          size="small"
        />
        <TextField
          fullWidth
          margin="dense"
          label="نام خانوادگی"
          variant="outlined"
          size="small"
        />
        <TextField
          fullWidth
          margin="dense"
          label="شماره تماس"
          variant="outlined"
          size="small"
        />
        <TextField
          fullWidth
          margin="dense"
          label="شماره کارت هدیه"
          variant="outlined"
          size="small"
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