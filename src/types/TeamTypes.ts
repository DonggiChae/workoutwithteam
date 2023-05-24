export interface TeamProps {
  name: string;
  description: string;
  id: string;
  sports: string[];
  members: number;
}

export interface Checkbox {
  id: string;
  label: string;
}

export interface CheckboxListProps {
  checkboxes: Checkbox[];
  title: string;
}
