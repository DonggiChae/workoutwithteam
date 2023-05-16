import { useState } from "react";
import { useRouter } from "next/router";
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
    </div>
  );
};

export default CreateTeam;
