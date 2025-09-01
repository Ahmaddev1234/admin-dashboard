import { useForm } from "react-hook-form"
import { Box, TextField, Button, useTheme } from "@mui/material"
import Header from "../../components/Header"
import { tokens } from "../../theme"
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const formSchema = z.object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    email: z.string().min(1, "Email is required"),
    contact: z.string().regex(/^[0-9]{10,15}$/, "ContactNo must be 10 to 15 digits"),
    address1: z.string().min(5, "Address must be at least 5 characters long")
        .max(100, "Address must be at most 100 characters long")
        .regex(/^[a-zA-Z0-9\s,.-]+$/, "Address can only contain letters, numbers, spaces, commas, dots, and hyphens"),
    address2: z.string().min(5, "Address must be at least 5 characters long")
        .max(100, "Address must be at most 100 characters long")
        .regex(/^[a-zA-Z0-9\s,.-]+$/, "Address can only contain letters, numbers, spaces, commas, dots, and hyphens"),
})

const index = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const { register, reset, formState: { errors, isSubmitting }, handleSubmit } = useForm({
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            contact: "",
            address1: "",
            address2: ""
        },
        resolver: zodResolver(formSchema)
    })

    const onSubmit = (data) => {
        console.log("form data:", data);
        reset();

    }
    return (
        <Box m="20px">
            <Header title="Create User" subtitle="Create a new user profile" />
            <Box display="flex" flexDirection="column" gap="16px" component="form" onSubmit={handleSubmit(onSubmit)} >
                <Box display="flex" gap="16px" sx={{flexDirection:{xs:"column", md:"row"}}}> 
                    <TextField
                        sx={{

                            "& .MuiFilledInput-underline:after": {
                                borderBottomColor: colors.greenAccent[400], 
                            },
                        }}
                        {...register("firstName")}
                        component="form"
                        label="First Name"
                        variant="filled"
                        fullWidth
                        error={!!errors.firstName}
                        helperText={errors.firstName?.message}
                    />

                    <TextField
                        sx={{

                            "& .MuiFilledInput-underline:after": {
                                borderBottomColor: colors.greenAccent[400],
                            },
                        }}
                        {...register("lastName")}
                        component="form"
                        label="Last Name"
                        variant="filled"
                        fullWidth
                        error={!!errors.lastName}
                        helperText={errors.lastName?.message}
                    />
                </Box>

                <TextField
                        sx={{

                            "& .MuiFilledInput-underline:after": {
                                borderBottomColor: colors.greenAccent[400],
                            },
                        }}
                        {...register("email")}
                        component="form"
                        label="Email"
                        variant="filled"
                        fullWidth
                        error={!!errors.email}
                        helperText={errors.email?.message}
                    />

<TextField
                        sx={{

                            "& .MuiFilledInput-underline:after": {
                                borderBottomColor: colors.greenAccent[400],
                            },
                        }}
                        {...register("contact")}
                        component="form"
                        label="Last Name"
                        variant="filled"
                        fullWidth
                        error={!!errors.contact}
                        helperText={errors.contact?.message}
                    />

<TextField
                        sx={{

                            "& .MuiFilledInput-underline:after": {
                                borderBottomColor: colors.greenAccent[400],
                            },
                        }}
                        {...register("address1")}
                        component="form"
                        label="Address 1"
                        variant="filled"
                        fullWidth
                        error={!!errors.address1}
                        helperText={errors.address1?.message}
                    />

<TextField
                        sx={{

                            "& .MuiFilledInput-underline:after": {
                                borderBottomColor: colors.greenAccent[400],
                            },
                        }}
                        {...register("address2")}
                        component="form"
                        label="Address 2"
                        variant="filled"
                        fullWidth
                        error={!!errors.address2}
                        helperText={errors.address2?.message}
                    />

                        <Box display="flex" justifyContent="center">

                            <Button type="submit" variant="contained" color="secondary">
                                Create new user
                            </Button>
                        </Box>
            </Box>

        </Box>
    )
}

export default index
