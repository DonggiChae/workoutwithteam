/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { WorkoutRecord } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function WorkoutRecordUpdateForm(props) {
  const {
    id: idProp,
    workoutRecord: workoutRecordModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    date: "",
    intensity: "",
    pain: "",
    weather: "",
  };
  const [date, setDate] = React.useState(initialValues.date);
  const [intensity, setIntensity] = React.useState(initialValues.intensity);
  const [pain, setPain] = React.useState(initialValues.pain);
  const [weather, setWeather] = React.useState(initialValues.weather);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = workoutRecordRecord
      ? { ...initialValues, ...workoutRecordRecord }
      : initialValues;
    setDate(cleanValues.date);
    setIntensity(cleanValues.intensity);
    setPain(cleanValues.pain);
    setWeather(cleanValues.weather);
    setErrors({});
  };
  const [workoutRecordRecord, setWorkoutRecordRecord] = React.useState(
    workoutRecordModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(WorkoutRecord, idProp)
        : workoutRecordModelProp;
      setWorkoutRecordRecord(record);
    };
    queryData();
  }, [idProp, workoutRecordModelProp]);
  React.useEffect(resetStateValues, [workoutRecordRecord]);
  const validations = {
    date: [],
    intensity: [],
    pain: [],
    weather: [],
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
  const convertToLocal = (date) => {
    const df = new Intl.DateTimeFormat("default", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      calendar: "iso8601",
      numberingSystem: "latn",
      hourCycle: "h23",
    });
    const parts = df.formatToParts(date).reduce((acc, part) => {
      acc[part.type] = part.value;
      return acc;
    }, {});
    return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`;
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
          date,
          intensity,
          pain,
          weather,
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
            WorkoutRecord.copyOf(workoutRecordRecord, (updated) => {
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
      {...getOverrideProps(overrides, "WorkoutRecordUpdateForm")}
      {...rest}
    >
      <TextField
        label="Date"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={date && convertToLocal(new Date(date))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              date: value,
              intensity,
              pain,
              weather,
            };
            const result = onChange(modelFields);
            value = result?.date ?? value;
          }
          if (errors.date?.hasError) {
            runValidationTasks("date", value);
          }
          setDate(value);
        }}
        onBlur={() => runValidationTasks("date", date)}
        errorMessage={errors.date?.errorMessage}
        hasError={errors.date?.hasError}
        {...getOverrideProps(overrides, "date")}
      ></TextField>
      <TextField
        label="Intensity"
        isRequired={false}
        isReadOnly={false}
        value={intensity}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              intensity: value,
              pain,
              weather,
            };
            const result = onChange(modelFields);
            value = result?.intensity ?? value;
          }
          if (errors.intensity?.hasError) {
            runValidationTasks("intensity", value);
          }
          setIntensity(value);
        }}
        onBlur={() => runValidationTasks("intensity", intensity)}
        errorMessage={errors.intensity?.errorMessage}
        hasError={errors.intensity?.hasError}
        {...getOverrideProps(overrides, "intensity")}
      ></TextField>
      <TextField
        label="Pain"
        isRequired={false}
        isReadOnly={false}
        value={pain}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              intensity,
              pain: value,
              weather,
            };
            const result = onChange(modelFields);
            value = result?.pain ?? value;
          }
          if (errors.pain?.hasError) {
            runValidationTasks("pain", value);
          }
          setPain(value);
        }}
        onBlur={() => runValidationTasks("pain", pain)}
        errorMessage={errors.pain?.errorMessage}
        hasError={errors.pain?.hasError}
        {...getOverrideProps(overrides, "pain")}
      ></TextField>
      <TextField
        label="Weather"
        isRequired={false}
        isReadOnly={false}
        value={weather}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              intensity,
              pain,
              weather: value,
            };
            const result = onChange(modelFields);
            value = result?.weather ?? value;
          }
          if (errors.weather?.hasError) {
            runValidationTasks("weather", value);
          }
          setWeather(value);
        }}
        onBlur={() => runValidationTasks("weather", weather)}
        errorMessage={errors.weather?.errorMessage}
        hasError={errors.weather?.hasError}
        {...getOverrideProps(overrides, "weather")}
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
          isDisabled={!(idProp || workoutRecordModelProp)}
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
              !(idProp || workoutRecordModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
