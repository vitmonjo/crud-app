import React from 'react';
import '../styles/helpModal.css';
import Button from '@mui/material/Button';

const HelpModal = ({ show, onClose }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal">
        <h2>Ajuda</h2>
        <p>Digite para procurar por um nome, ou use # para procurar por um telefone específico. Você pode procurar por múltiplos telefones separando-os por um espaço.</p>
      <Button sx={{'marginTop': '15px'}} color="error" onClick={onClose}>Fechar</Button>
      </div>
    </div>
  );
};

export default HelpModal;
