import React, { useState, useEffect, useReducer, use } from "react";

interface Checkbox {
  id: string;
  label: string;
}

interface CheckboxListProps {
  checkboxes: Checkbox[];
  title: string;
  onCheckboxChange: (selectedCheckboxes: string[]) => void;
}

export default function CheckBoxes({
  checkboxes,
  title,
  onCheckboxChange,
}: CheckboxListProps) {
  const [selectedCheckboxes, setSelectedCheckboxes] = useState<string[]>([]);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checkboxId = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      setSelectedCheckboxes((prevSelected) => [...prevSelected, checkboxId]);
    } else {
      setSelectedCheckboxes((prevSelected) =>
        prevSelected.filter((id) => id !== checkboxId)
      );
    }
  };

  const handleSelectAllChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const isChecked = event.target.checked;

    if (isChecked) {
      const allCheckboxIds = checkboxes.map((checkbox) => checkbox.id);
      setSelectedCheckboxes(allCheckboxIds);
    } else {
      setSelectedCheckboxes([]);
    }
  };
  useEffect(() => {
    onCheckboxChange(selectedCheckboxes);
  }, [selectedCheckboxes]);

  useEffect(() => {
    const allCheckboxIds = checkboxes.map((checkbox) => checkbox.id);
    setSelectedCheckboxes(allCheckboxIds);
  }, []);

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="font-bold">{title}</div>
      <div className="flex flex-col items-start gap-2.5">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={selectedCheckboxes.length === checkboxes.length}
            onChange={handleSelectAllChange}
            className="h-5 w-5 "
          />
          <span>All</span>
        </label>
        {checkboxes.length > 0 &&
          checkboxes.map((checkbox) => (
            <label key={checkbox.id} className="flex items-center gap-2">
              <input
                type="checkbox"
                value={checkbox.id}
                checked={selectedCheckboxes.includes(checkbox.id)}
                onChange={handleCheckboxChange}
                className="h-5 w-5 "
              />
              <span>{checkbox.label}</span>
            </label>
          ))}
      </div>
    </div>
  );
}

// example usage
// const checkboxes = [
//   { id: "checkbox1", label: "Checkbox 1" },
//   { id: "checkbox2", label: "Checkbox 2" },
//   { id: "checkbox3", label: "Checkbox 3" },
// ];

// return (
//   <div>
//     <CheckboxList checkboxes={checkboxes} />
//   </div>
// );
