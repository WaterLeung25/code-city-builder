import React from "react";
import ProgressForm from "../ProgressForm/ProgressForm";
import "./ProgressDialog.scss";

const ProgressDialog = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleSubmitSuccess = () => {
    onClose();
  };

  return (
    <div className="progress-dialog-overlay">
      <div className="progress-dialog">
        <div className="progress-dialog-header">
          <h2>Log Progress</h2>
          <button className="close-button" onClick={onClose}>
            ×
          </button>
        </div>
        <div className="progress-dialog-content">
          <ProgressForm onSubmitSuccess={handleSubmitSuccess} />
        </div>
      </div>
    </div>
  );
};

export default ProgressDialog;
