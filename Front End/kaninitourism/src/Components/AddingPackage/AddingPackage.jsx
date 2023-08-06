import React, { useEffect, useState } from 'react';
import {
    Button,
    Container,
    CssBaseline,
    TextField,
    Typography,
    Card,
    CardContent,
    Grid,
    Box,
    ThemeProvider,
    createTheme,
} from '@mui/material';
import * as yup from 'yup';
import { toast } from 'react-toastify';

const theme = createTheme();

const ValidationSchema = yup.object().shape({
    packageType: yup.string().required('Package Type is required.'),
    description: yup.string().required('Description is required.'),
    pricePerPerson: yup.string().required('Price per person is required.'),
    source: yup.string().required('Source is required.'),
    destination: yup.string().required('Destination is required.'),
    vehicleType: yup.string().required('Vehicle type is required.'),
    days: yup.number().required('Number of days is required.').positive().integer(),
    nights: yup.number().required('Number of nights is required.').positive().integer(),
    totaldays: yup.number().required('Total number of days is required.').positive().integer(),
    itineraryDetails: yup.string().required('Itinerary details are required.'),
    placeId: yup.number().required('Place ID is required.').positive().integer(),
    hotelId: yup.number().required('Hotel ID is required.').positive().integer(),
});

const AddingPackage = () => {
    const [formData, setFormData] = useState({
        id: 2,
        packageType: '',
        description: '',
        pricePerPerson: '',
        source: '',
        destination: '',
        vehicleType: '',
        days: '',
        nights: '',
        totaldays: '',
        itineraryDetails: '',
        placeId: '',
        hotelId: '',
    });

    const [packages, setPackages] = useState([]);
    const [getpackages, setgetpackages] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const getpackagelist = async () => {
        try {
            const response = await fetch('https://localhost:7050/api/Package', {
                method: 'GET',
                headers: {
                },
            });

            if (response.status === 200) {
                const data = await response.json();
                console.log('Package list:', data);
                setgetpackages(data);
            } else {
                console.error('GET request failed with status:', response.status);
            }
        } catch (error) {
            console.error('Error fetching package list:', error);
        }
    };

    useEffect(() => {
        getpackagelist();
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await ValidationSchema.validate(formData);

            const response = await fetch('https://localhost:7050/api/Package', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),

            });
            console.log(response)
            console.log(formData)

            if (response.status === 200) {
                const responseData = await response.json();
                console.log('API response:', responseData);

                // Update the packages state with the new data (if needed)
                setPackages([...packages, responseData]);

                // Clear the form data
                setFormData({
                    packageType: '',
                    description: '',
                    pricePerPerson: '',
                    source: '',
                    destination: '',
                    vehicleType: '',
                    days: '',
                    nights: '',
                    totaldays: '',
                    itineraryDetails: '',
                    placeId: '',
                    hotelId: '',
                });
                toast.success('Package Added')

            } else {
                console.error('API request failed with status:', response.status);
            }
        } catch (errors) {
            console.error('Validation errors:', errors);
        }
    };


    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container maxWidth="sm">
                <Typography variant="h4" align="center" gutterBottom>

                </Typography>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                label="Package Type"
                                name="packageType"
                                value={formData.packageType}
                                onChange={handleChange}
                                error={Boolean(ValidationSchema.fields.packageType && ValidationSchema.fields.packageType.errors)}
                                helperText={ValidationSchema.fields.packageType && ValidationSchema.fields.packageType.errors}
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Description"
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                error={Boolean(ValidationSchema.fields.description && ValidationSchema.fields.description.errors)}
                                helperText={ValidationSchema.fields.description && ValidationSchema.fields.description.errors}
                                fullWidth
                                required
                                multiline
                                rows={4}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Price per Person"
                                name="pricePerPerson"
                                value={formData.pricePerPerson}
                                onChange={handleChange}
                                error={Boolean(ValidationSchema.fields.pricePerPerson && ValidationSchema.fields.pricePerPerson.errors)}
                                helperText={ValidationSchema.fields.pricePerPerson && ValidationSchema.fields.pricePerPerson.errors}
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Source"
                                name="source"
                                value={formData.source}
                                onChange={handleChange}
                                error={Boolean(ValidationSchema.fields.source && ValidationSchema.fields.source.errors)}
                                helperText={ValidationSchema.fields.source && ValidationSchema.fields.source.errors}
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Destination"
                                name="destination"
                                value={formData.destination}
                                onChange={handleChange}
                                error={Boolean(ValidationSchema.fields.destination && ValidationSchema.fields.destination.errors)}
                                helperText={ValidationSchema.fields.destination && ValidationSchema.fields.destination.errors}
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Vehicle Type"
                                name="vehicleType"
                                value={formData.vehicleType}
                                onChange={handleChange}
                                error={Boolean(ValidationSchema.fields.vehicleType && ValidationSchema.fields.vehicleType.errors)}
                                helperText={ValidationSchema.fields.vehicleType && ValidationSchema.fields.vehicleType.errors}
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Number of Days"
                                name="days"
                                type="number"
                                value={formData.days}
                                onChange={handleChange}
                                error={Boolean(ValidationSchema.fields.days && ValidationSchema.fields.days.errors)}
                                helperText={ValidationSchema.fields.days && ValidationSchema.fields.days.errors}
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Number of Nights"
                                name="nights"
                                type="number"
                                value={formData.nights}
                                onChange={handleChange}
                                error={Boolean(ValidationSchema.fields.nights && ValidationSchema.fields.nights.errors)}
                                helperText={ValidationSchema.fields.nights && ValidationSchema.fields.nights.errors}
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Total Number of Days"
                                name="totaldays"
                                type="number"
                                value={formData.totaldays}
                                onChange={handleChange}
                                error={Boolean(ValidationSchema.fields.totaldays && ValidationSchema.fields.totaldays.errors)}
                                helperText={ValidationSchema.fields.totaldays && ValidationSchema.fields.totaldays.errors}
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Itinerary Details"
                                name="itineraryDetails"
                                value={formData.itineraryDetails}
                                onChange={handleChange}
                                error={Boolean(ValidationSchema.fields.itineraryDetails && ValidationSchema.fields.itineraryDetails.errors)}
                                helperText={ValidationSchema.fields.itineraryDetails && ValidationSchema.fields.itineraryDetails.errors}
                                fullWidth
                                required
                                multiline
                                rows={4}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Place ID"
                                name="placeId"
                                type="number"
                                value={formData.placeId}
                                onChange={handleChange}
                                error={Boolean(ValidationSchema.fields.placeId && ValidationSchema.fields.placeId.errors)}
                                helperText={ValidationSchema.fields.placeId && ValidationSchema.fields.placeId.errors}
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Hotel ID"
                                name="hotelId"
                                type="number"
                                value={formData.hotelId}
                                onChange={handleChange}
                                error={Boolean(ValidationSchema.fields.hotelId && ValidationSchema.fields.hotelId.errors)}
                                helperText={ValidationSchema.fields.hotelId && ValidationSchema.fields.hotelId.errors}
                                fullWidth
                                required
                            />
                        </Grid>
                    </Grid>
                    <Box mt={2}>
                        <Button type="submit" variant="contained" color="primary" fullWidth>
                            Submit
                        </Button>
                    </Box>
                </form>
            </Container>

        </ThemeProvider>
    );
};

export default AddingPackage;
