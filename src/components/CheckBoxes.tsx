import React, { useState } from "react";

interface Checkbox {
  id: string;
  label: string;
}

interface CheckboxListProps {
  checkboxes: Checkbox[];
  title: string;
}

export default function CheckBoxes({ checkboxes, title }: CheckboxListProps) {
  const [checkedItems, setCheckedItems] = useState<string[]>([]);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    if (checked) {
      setCheckedItems((prevCheckedItems) => [...prevCheckedItems, value]);
    } else {
      setCheckedItems((prevCheckedItems) =>
        prevCheckedItems.filter((item) => item !== value)
      );
    }
  };
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="font-bold">{title}</div>
      <div className="flex flex-col items-start gap-2.5">
        {checkboxes.length > 0 &&
          checkboxes.map((checkbox) => (
            <label key={checkbox.id} className="flex items-center gap-2">
              <input
                type="checkbox"
                value={checkbox.id}
                checked={checkedItems.includes(checkbox.id)}
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
