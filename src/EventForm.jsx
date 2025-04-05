import React from "react";
import {
  Card,
  TextField,
  Button,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";

// ✅ Validation Schema using Zod
const schema = z.object({
  firstName: z.string().min(2, "نام باید حداقل ۲ حرف باشد"),
  lastName: z.string().min(2, "نام خانوادگی باید حداقل ۲ حرف باشد"),
  phone: z
    .string()
    .regex(/^09\d{9}$/, "شماره تماس باید با 09 شروع شده و 11 رقم باشد"),
  giftCardNumber: z
    .string()
    .min(16, "شماره کارت هدیه باید حداقل ۱۶ رقم داشته باشد"),
});

const EventForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const payload = {
        full_name: `${data.firstName} ${data.lastName}`,
        phone_number: data.phone,
        card_number: data.giftCardNumber,
      };

      const response = await axios.post("https://api.atripa.ir/api/v2/account/user/event-signup/", payload);

      console.log("✅ API Response:", response.data);
      alert("اطلاعات با موفقیت ارسال شد!");
      reset(); // Optional: reset form after submission
    } catch (error) {
      console.error("❌ API Error:", error);
      alert("ارسال اطلاعات با خطا مواجه شد.");
    }
  };

  const textFieldStyles = {
    "& .MuiOutlinedInput-root": {
      backgroundColor: "#F7F7F7",
    },
    // ❌ REMOVE or comment out these to allow default label behavior
    // "& label": {
    //   right: "1.75rem",
    //   left: "auto",
    // },
    // "& label.MuiInputLabel-shrink": {
    //   right: "0",
    // },
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          ثبت نام رویداد
        </Typography>
        <Typography variant="body2" gutterBottom>
          لطفا درصورتی‌که کارت هدیه را پیدا کردید، اطلاعات مربوط به خود را وارد نمایید:
        </Typography>

        <TextField
          {...register("firstName")}
          fullWidth
          margin="dense"
          label="نام"
          variant="outlined"
          size="small"
          error={!!errors.firstName}
          helperText={errors.firstName?.message}
          sx={textFieldStyles}
        />

        <TextField
          {...register("lastName")}
          fullWidth
          margin="dense"
          label="نام خانوادگی"
          variant="outlined"
          size="small"
          error={!!errors.lastName}
          helperText={errors.lastName?.message}
          sx={textFieldStyles}
        />

        <TextField
          {...register("phone")}
          fullWidth
          margin="dense"
          label="شماره تماس"
          variant="outlined"
          size="small"
          error={!!errors.phone}
          helperText={errors.phone?.message}
          sx={textFieldStyles}
        />

        <TextField
          {...register("giftCardNumber")}
          fullWidth
          margin="dense"
          label="شماره کارت هدیه"
          variant="outlined"
          size="small"
          error={!!errors.giftCardNumber}
          helperText={errors.giftCardNumber?.message}
          sx={textFieldStyles}
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 2, backgroundColor: "#065F5B" }}
        >
          ثبت نام
        </Button>
      </form>
    </Card>
  );
};

export default EventForm;
