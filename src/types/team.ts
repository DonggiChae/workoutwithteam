export interface Team {
  name: string;
  description: string;
  url: string;
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
