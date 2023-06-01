/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { WorkoutTeam } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
  errorMessage,
}) {
  const labelElement = <Text>{label}</Text>;
  const {
    tokens: {
      components: {
        fieldmessages: { error: errorStyles },
      },
    },
  } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
          {errorMessage && hasError && (
            <Text color={errorStyles.color} fontSize={errorStyles.fontSize}>
              {errorMessage}
            </Text>
          )}
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button
            size="small"
            variation="link"
            isDisabled={hasError}
            onClick={addItem}
          >
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
export default function WorkoutTeamUpdateForm(props) {
  const {
    id: idProp,
    workoutTeam: workoutTeamModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    teamName: "",
    description: "",
    sports: [],
    numberOfMembers: "",
    members: "",
  };
  const [teamName, setTeamName] = React.useState(initialValues.teamName);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [sports, setSports] = React.useState(initialValues.sports);
  const [numberOfMembers, setNumberOfMembers] = React.useState(
    initialValues.numberOfMembers
  );
  const [members, setMembers] = React.useState(initialValues.members);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = workoutTeamRecord
      ? { ...initialValues, ...workoutTeamRecord }
      : initialValues;
    setTeamName(cleanValues.teamName);
    setDescription(cleanValues.description);
    setSports(cleanValues.sports ?? []);
    setCurrentSportsValue("");
    setNumberOfMembers(cleanValues.numberOfMembers);
    setMembers(cleanValues.members);
    setErrors({});
  };
  const [workoutTeamRecord, setWorkoutTeamRecord] =
    React.useState(workoutTeamModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(WorkoutTeam, idProp)
        : workoutTeamModelProp;
      setWorkoutTeamRecord(record);
    };
    queryData();
  }, [idProp, workoutTeamModelProp]);
  React.useEffect(resetStateValues, [workoutTeamRecord]);
  const [currentSportsValue, setCurrentSportsValue] = React.useState("");
  const sportsRef = React.createRef();
  const validations = {
    teamName: [{ type: "Required" }],
    description: [],
    sports: [{ type: "Required" }],
    numberOfMembers: [],
    members: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          teamName,
          description,
          sports,
          numberOfMembers,
          members,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            WorkoutTeam.copyOf(workoutTeamRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "WorkoutTeamUpdateForm")}
      {...rest}
    >
      <TextField
        label="Team name"
        isRequired={true}
        isReadOnly={false}
        value={teamName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              teamName: value,
              description,
              sports,
              numberOfMembers,
              members,
            };
            const result = onChange(modelFields);
            value = result?.teamName ?? value;
          }
          if (errors.teamName?.hasError) {
            runValidationTasks("teamName", value);
          }
          setTeamName(value);
        }}
        onBlur={() => runValidationTasks("teamName", teamName)}
        errorMessage={errors.teamName?.errorMessage}
        hasError={errors.teamName?.hasError}
        {...getOverrideProps(overrides, "teamName")}
      ></TextField>
      <TextField
        label="Description"
        isRequired={false}
        isReadOnly={false}
        value={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              teamName,
              description: value,
              sports,
              numberOfMembers,
              members,
            };
            const result = onChange(modelFields);
            value = result?.description ?? value;
          }
          if (errors.description?.hasError) {
            runValidationTasks("description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("description", description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, "description")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              teamName,
              description,
              sports: values,
              numberOfMembers,
              members,
            };
            const result = onChange(modelFields);
            values = result?.sports ?? values;
          }
          setSports(values);
          setCurrentSportsValue("");
        }}
        currentFieldValue={currentSportsValue}
        label={"Sports"}
        items={sports}
        hasError={errors?.sports?.hasError}
        errorMessage={errors?.sports?.errorMessage}
        setFieldValue={setCurrentSportsValue}
        inputFieldRef={sportsRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Sports"
          isRequired={true}
          isReadOnly={false}
          value={currentSportsValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.sports?.hasError) {
              runValidationTasks("sports", value);
            }
            setCurrentSportsValue(value);
          }}
          onBlur={() => runValidationTasks("sports", currentSportsValue)}
          errorMessage={errors.sports?.errorMessage}
          hasError={errors.sports?.hasError}
          ref={sportsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "sports")}
        ></TextField>
      </ArrayField>
      <TextField
        label="Number of members"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={numberOfMembers}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              teamName,
              description,
              sports,
              numberOfMembers: value,
              members,
            };
            const result = onChange(modelFields);
            value = result?.numberOfMembers ?? value;
          }
          if (errors.numberOfMembers?.hasError) {
            runValidationTasks("numberOfMembers", value);
          }
          setNumberOfMembers(value);
        }}
        onBlur={() => runValidationTasks("numberOfMembers", numberOfMembers)}
        errorMessage={errors.numberOfMembers?.errorMessage}
        hasError={errors.numberOfMembers?.hasError}
        {...getOverrideProps(overrides, "numberOfMembers")}
      ></TextField>
      <TextField
        label="Members"
        isRequired={true}
        isReadOnly={false}
        value={members}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              teamName,
              description,
              sports,
              numberOfMembers,
              members: value,
            };
            const result = onChange(modelFields);
            value = result?.members ?? value;
          }
          if (errors.members?.hasError) {
            runValidationTasks("members", value);
          }
          setMembers(value);
        }}
        onBlur={() => runValidationTasks("members", members)}
        errorMessage={errors.members?.errorMessage}
        hasError={errors.members?.hasError}
        {...getOverrideProps(overrides, "members")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || workoutTeamModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || workoutTeamModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
