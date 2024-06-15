import * as React from 'react';
import { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Chip from '@mui/material/Chip';
import Modal from './Modal';
import HelpModal from './HelpModal';
import moment from 'moment';


export default function Body() {
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'name', headerName: 'Nome', width: 150 },
    {
      field: 'emails',
      headerName: 'Email(s)',
      width: 300,
      renderCell: (params) => (
        <Box sx={{ display: 'flex', flexDirection: 'row', alignContent: 'center', alignItems: 'center', gap: 0.5, paddingTop: '8px' }}>
          {params.value.map((email, index) => (
            <Chip
              key={index}
              label={email}
              onClick={() => handleEmailClick(email)}
              sx={{ cursor: 'pointer' }}
            />
          ))}
        </Box>
      ),
    },
    {
      field: 'telephones',
      headerName: 'Telefone(s)',
      width: 300,
      renderCell: (params) => (
        <Box sx={{ display: 'flex', flexDirection: 'row', alignContent: 'center', alignItems: 'center', gap: 0.5, paddingTop: '8px' }}>
          {params.value.map((telephone, index) => (
            <Chip
              key={index}
              label={telephone}
              onClick={() => handleTelephoneClick(telephone)}
              sx={{ cursor: 'pointer' }}
            />
          ))}
        </Box>
      ),
    },
    { 
      field: 'createdAt', 
      headerName: 'Criado em', 
      width: 150,
      renderCell: (params) => {
        // Format the createdAt field to dd/mm/yyyy
        const formattedDate = moment(params.value).format('DD/MM/YYYY - HH:mm');
        return <div>{formattedDate}</div>;
      }
    },
    {
      field: 'actions',
      headerName: 'Ações',
      width: 200,
      renderCell: (params) => (
        <Box>
          <Button
            color="primary"
            onClick={() => handleUpdateButtonClick(params.row)}
            sx={{ marginRight: 1 }}
          >
            Modificar
          </Button>
          <Button
            color="error"
            onClick={() => handleDeleteButtonClick(params.row)}
          >
            Apagar
          </Button>
        </Box>
      ),
    },

  ];

  const [searchName, setSearchName] = useState('');
  const [rows, setRows] = useState([]);
  const [filteredRows, setFilteredRows] = useState(rows);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [modalClient, setModalClient] = useState({});
  const [showHelpModal, setShowHelpModal] = useState(false); // State to control HelpModal visibility

  const fetchClients = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/clients');
      const data = await response.json();
      const dataWithIds = data.map((item) => ({ id: item._id, ...item }));
      setRows(dataWithIds);
      setFilteredRows(dataWithIds);
    } catch (error) {
      console.error('Error fetching the data:', error);
    }
  };

  const handleOpenModal = (message, client) => {
    setModalMessage(message);
    setModalClient(client);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    fetchClients(); // Fetch clients again after closing the modal
  };

  const handleCreateButtonClick = () => {
    handleOpenModal('Create Client', {});
  };

  const handleUpdateButtonClick = (row) => {
    console.log('Update button clicked for row:', row);
    handleOpenModal('Update Client', row);
  };

  const handleDeleteButtonClick = async (row) => {
    console.log('Delete button clicked for row:', row);
    const idToRemove = row.id;

    try {
      const response = await fetch(`http://localhost:4000/api/clients/${idToRemove}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        // If the DELETE request was successful, update the state
        fetchClients();
      } else {
        console.error('Failed to delete the client:', response.statusText);
      }
    } catch (error) {
      console.error('Error deleting the client:', error);
    }
  };

  const handleSearchBarChange = (e) => {
    setSearchName(e.target.value);
  };

  const handleTelephoneClick = (telephone) => {
    setSearchName(`#${telephone}`);
  };

  const toggleHelpModal = () => {
    setShowHelpModal(!showHelpModal);
  };

  useEffect(() => {
    fetchClients();
  }, []);

  useEffect(() => {
    let updatedRows = rows;
  
    if (searchName.startsWith('#')) {
      const telephoneNames = searchName.slice(1).toLowerCase().split(' #').map(telephone => telephone.trim());
      updatedRows = rows.filter((row) =>
        telephoneNames.every(telephoneName =>
          row.telephones.some((telephone) => telephone.toLowerCase().includes(telephoneName))
        )
      );
    } else {
      updatedRows = rows.filter((row) =>
        row.name.toLowerCase().includes(searchName.toLowerCase())
      );
    }
  
    setFilteredRows(updatedRows);
  }, [searchName, rows]);
  

  return (
    <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Container maxWidth="sm" sx={{ display: 'flex', alignItems: 'center' }}>
          <TextField
            sx={{ margin: '8px', width: '60%', alignSelf: 'center' }}
            id="outlined-basic"
            label="Search clients"
            variant="outlined"
            value={searchName}
            onChange={handleSearchBarChange}
          />
          <Button 
            variant="outlined" 
            sx={{ height: '60%' }}
            onClick={handleCreateButtonClick}
          >
            Criar
          </Button>
          <Button
            variant="outlined"
            sx={{ height: '60%', marginLeft: '8px' }}
            onClick={toggleHelpModal} // Button to toggle HelpModal visibility
          >
            Ajuda
          </Button>
        </Container>
        <DataGrid
          rows={filteredRows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 20 },
            },
          }}
          pageSizeOptions={[5, 10, 20]}
          checkboxSelection
          components={{
            Pagination: (props) => <Box>{props.children}</Box>,
          }}
        />
      </Box>
      <Modal 
        show={showModal} 
        onClose={handleCloseModal} 
        message={modalMessage} 
        client={modalClient || {}} 
      />
      <HelpModal show={showHelpModal} onClose={toggleHelpModal} /> {/* HelpModal component */}
    </Box>
  );
}
