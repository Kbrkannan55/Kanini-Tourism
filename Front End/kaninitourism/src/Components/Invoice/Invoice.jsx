import React from 'react';
import {
  Typography,
  Paper,
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Button,
  Tooltip,
} from '@mui/material';
import { Print as PrintIcon, GetApp as GetAppIcon } from '@mui/icons-material';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import './Invoice.css'

const Invoice = (props) => {
  // Sample data for demonstration purposes
  const selectedPacks = [
    { id: 1, name: 'Package A', customers: 2, adults: 1, children: 1 },
    { id: 2, name: 'Package B', customers: 4, adults: 2, children: 2 },
    { id: 3, name: 'Package C', customers: 3, adults: 1, children: 2 },
  ];

  const totalAmount = 250; // Replace with the actual total amount

  const handlePrint = () => {
    const doc = new jsPDF();
    doc.text('Invoice', 10, 10);
    doc.autoTable({
      head: [['Package', 'No of Customers', 'Adults', 'Children']],
      body: selectedPacks.map(pack => [pack.name, pack.customers, pack.adults, pack.children]),
      startY: 20,
    });
    doc.text(`Total Amount: $${totalAmount}`, 10, doc.autoTable.previous.finalY + 10);
    doc.save('invoice.pdf');
  };

  return (
    <div className="invoice-container">
      <Paper elevation={3} className="invoice-paper">
        <Typography variant="h4" gutterBottom>
          Invoice
        </Typography>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Package</TableCell>
                <TableCell>No of Customers</TableCell>
                <TableCell>Adults</TableCell>
                <TableCell>Children</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {selectedPacks.map(pack => (
                <TableRow key={pack.id}>
                  <TableCell>{pack.name}</TableCell>
                  <TableCell>{pack.customers}</TableCell>
                  <TableCell>{pack.adults}</TableCell>
                  <TableCell>{pack.children}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <div className="total-amount">
          <Typography variant="h6">Total Amount: ${totalAmount}</Typography>
        </div>
        <div className="invoice-buttons">
          <Tooltip title="Download Invoice PDF">
            <Button variant="outlined" startIcon={<GetAppIcon />} onClick={handlePrint}>
              Download
            </Button>
          </Tooltip>
          <Tooltip title="Back to Cart">
            <Button variant="outlined" startIcon={<PrintIcon />}>
              Back to Cart
            </Button>
          </Tooltip>
        </div>
      </Paper>
    </div>
  );
};

export default Invoice;