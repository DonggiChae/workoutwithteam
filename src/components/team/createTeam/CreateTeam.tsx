import { useState } from "react";
import { useRouter } from "next/router";
import { Form, Button } from "react-bootstrap";
import { Team } from "@/types/team";
import styles from "./CreateTeam.module.scss";

type FormData = {
  name: string;
  description: string;
  url: string;
  sports: string[];
};

const CreateTeam = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    description: "",
    url: "",
    sports: [],
  });

  const onNameChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setFormData({ ...formData, name: event.target.value });
  };

  const onDescriptionChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setFormData({ ...formData, description: event.target.value });
  };

  const onUrlChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setFormData({ ...formData, url: event.target.value });
  };

  const onSportsChange: React.ChangeEventHandler<HTMLSelectElement> = (
    event
  ) => {
    const selectedSports: string[] = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    setFormData({ ...formData, sports: selectedSports });
  };

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    const newTeam: Team = {
      name: formData.name,
      description: formData.description,
      url: formData.url,
      sports: formData.sports,
    };

    // TODO: Add API call to save the new team

    router.push("/");
  };

  return (
    <div className={styles.createTeam}>
      <h1>Create a new team</h1>

      <Form onSubmit={onSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter team name"
            value={formData.name}
            onChange={onNameChange}
          />
        </Form.Group>

        <Form.Group controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter team description"
            value={formData.description}
            onChange={onDescriptionChange}
          />
        </Form.Group>

        <Form.Group controlId="url">
          <Form.Label>Website URL</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter team website URL"
            value={formData.url}
            onChange={onUrlChange}
          />
        </Form.Group>

        <Form.Group controlId="sports">
          <Form.Label>Sports</Form.Label>
          <Form.Select value={formData.sports} onChange={onSportsChange}>
            <option value="football">Football</option>
            <option value="basketball">Basketball</option>
            <option value="baseball">Baseball</option>
            <option value="hockey">Hockey</option>
            <option value="tennis">Tennis</option>
          </Form.Select>
        </Form.Group>

        <Button variant="primary" type="submit">
          Create Team
        </Button>
      </Form>
    </div>
  );
};

export default CreateTeam;
