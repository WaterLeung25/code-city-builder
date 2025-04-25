import React, { useState } from "react";
import { patterns } from "../../data/patterns";
import { useResources } from "../../hooks/useResources";
import "./ProgressForm.scss";
import PropTypes from "prop-types";

const ProgressForm = ({ onSubmitSuccess }) => {
  const { handleProblemSolved } = useResources();
  const [formData, setFormData] = useState({
    difficulty: "easy",
    pattern: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleProblemSolved(formData.difficulty, formData.pattern);

    if (onSubmitSuccess) {
      onSubmitSuccess();
    }

    // Reset form
    setFormData({
      difficulty: "easy",
      pattern: "",
    });
  };

  return (
    <div className="progress-form">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="difficulty">Difficulty:</label>
          <select
            id="difficulty"
            name="difficulty"
            value={formData.difficulty}
            onChange={handleChange}
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="pattern">Pattern:</label>
          <select
            id="pattern"
            name="pattern"
            value={formData.pattern}
            onChange={handleChange}
            required
          >
            <option value="">Select a pattern</option>
            {Object.entries(patterns).map(([category, categoryPatterns]) => (
              <optgroup key={category} label={category.replace(/_/g, " ")}>
                {categoryPatterns.map((pattern) => (
                  <option key={pattern} value={pattern}>
                    {pattern}
                  </option>
                ))}
              </optgroup>
            ))}
          </select>
        </div>

        <button type="submit">Log Progress</button>
      </form>
    </div>
  );
};
ProgressForm.propTypes = {
  onSubmitSuccess: PropTypes.func,
};

export default ProgressForm;
