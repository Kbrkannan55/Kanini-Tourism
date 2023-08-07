import React, { useState } from 'react';
import axios from 'axios';
import * as yup from 'yup';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import {
  AppBar,
  Box,
  Button,
  Container,
  CssBaseline,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
  TextField,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Link, useNavigate } from 'react-router-dom';
import { toPdf } from '@react-pdf/renderer';
import { PDFViewer, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import './Booking.css';
import Logo from '../../Assets/traveltour.png';
import { ToastContainer, toast } from 'react-toastify';

const validationSchema = yup.object().shape({
  id: yup.number().required('User ID is required'),
  name: yup.string().required('Name is required'),
  startDate: yup.date().required('Start Date is required'),
  count: yup.number().required('Total Count is required'),
  packageID: yup.number().required('Package ID is required'),
});

const PdfDocument = ({ formData }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>Name: {formData.name}</Text>
          <Text>Start Date: {formData.startDate}</Text>
          <Text>Total Count: {formData.count}</Text>
          <Text>Package ID: {formData.packageID}</Text>
        </View>
      </Page>
    </Document>
  );
};

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

const Booking = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [formData, setFormData] = useState({
    id: 2,
    name: '',
    startDate: '',
    count: '',
    packageID: '',
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const [invoicechange,setinvoicechange]=useState(1000)

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // await validationSchema.validate(formData, { abortEarly: false });
      const response = await axios.post('https://localhost:7050/api/Booking', formData);
      console.log(response.data);

      // Display a success toast message
      toast.success('Booked successfully!');
      setinvoicechange(invoicechange+1);

      // Generate the PDF content
      const pdfData = (
        <PdfDocument formData={formData} />
      );

      // Convert the PDF content to blob
      const doc = new jsPDF();

      // Set the content of the PDF
      doc.text('TT Tourism', 20,10);
      doc.text('Booking Invoice', 20, 20);
      // doc.text(`Name: ${formData.name}`, 10, 20);
      doc.text(`Start Date : ${formData.startDate}`, 20, 30);
      doc.text(`Total Count : ${formData.count}`, 20, 40);
      doc.text(`Package ID : ${formData.packageID}`, 20, 50);
      doc.text(`Booking Number : ${invoicechange} `,20,60)
  
      // Save the PDF
      doc.save('booking_invoice.pdf');
      // Clear the form data
      setFormData({
        name: '',
        startDate: '',
        count: '',
        packageID: '',
      });

      alert("Now Pay Advance and take a screenshot of it")
      navigate('/invoice')

      // Navigate to the invoice page (if needed)

    } catch (error) {
      if (error instanceof yup.ValidationError) {
        const newErrors = {};
        error.inner.forEach((validationError) => {
          newErrors[validationError.path] = validationError.message;
        });
        setErrors(newErrors);
      } else {
        console.error('Error submitting form:', error);
        toast.error("Wrong Data");
      }
    }
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={toggleLinks}
            edge="start"
            sx={{
              ...(showLinks && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            <img src={Logo} style={{ height: '90px', width: '120px', borderRadius: '10px' }} alt="Logo" />
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary"
        sx={{
          width: 30,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 150,
            boxSizing: 'border-box',
          },
        }}
        open={showLinks}
        onClose={toggleLinks}
      >
        <Toolbar sx={{ justifyContent: 'flex-end' }}>
          <IconButton onClick={toggleLinks}>
            <ChevronLeftIcon />
          </IconButton>
        </Toolbar>
        <Box sx={{ overflow: 'auto' }}>
          <ul className={`navbar-links ${showLinks ? 'active' : ''}`}>
            <li className='booking-li'>
            <Link to={'/'}>  Home</Link>
            </li>
            <li className='booking-li'>
            <Link to={'/package'}>Packages </Link>
            </li>
            <li className='booking-li'>
            <Link to={'/'}>Logout</Link>
            </li>
          </ul>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Container maxWidth="sm" sx={{ marginTop: '2rem' }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Book and Pay
          </Typography>
          <form onSubmit={handleSubmit}>
            
            <TextField
              fullWidth
              margin="normal"
              label="Name"
              name="name"
            />
            <TextField
              fullWidth
              margin="normal"
              label=""
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              required
              error={!!errors.startDate}
              helperText={errors.startDate}
            />
            <TextField
              fullWidth
              margin="normal"
              label="Total Count"
              name="count"
              type="number"
              value={formData.count}
              onChange={handleChange}
              required
              error={!!errors.count}
              helperText={errors.count}
            />
            <TextField
              fullWidth
              margin="normal"
              label="Package ID"
              name="packageID"
              type="number"
              value={formData.packageID}
              onChange={handleChange}
              required
              error={!!errors.packageID}
              helperText={errors.packageID}
            />
            <Button type="submit" variant="contained" color="primary" >
              Submit
            </Button>
          </form>
        </Container>
        <ToastContainer/>
      </Box>
    </Box>
  );
};

export default Booking;
