import React, { useState } from "react";
import { userInputType } from "../../App";
import classes from "./UserInput.module.css";

interface IUserInputProps {
    onCalculate: (userInput: userInputType) => void;
}

const initialUserInput = {
    "current-savings": 10000,
    "monthly-contribution": 1200,
    "expected-return": 7,
    duration: 10,
};

const UserInput = (props: IUserInputProps) => {
    const [userInput, setUserInput] = useState(initialUserInput);

    const submitHandler = (event: React.SyntheticEvent) => {
        event.preventDefault();
        // console.log("SUBMIT");
        props.onCalculate(userInput);
    };

    const resetHandler = () => {
        // console.log("RESET");
        setUserInput(initialUserInput);
    };

    const inputChangeHandler = (input: string, value: any) => {
        // console.log(input, value);
        setUserInput((prevInput) => {
            return {
                ...prevInput,
                [input]: +value,
            };
        });
    };

    return (
        <form onSubmit={submitHandler} className={classes.form}>
            <div className={classes["input-group"]}>
                <p>
                    <label htmlFor="current-savings">
                        Ahorros actuales (€)
                    </label>
                    <input
                        onChange={(event) =>
                            inputChangeHandler(
                                "current-savings",
                                (event.target as HTMLInputElement).value
                            )
                        }
                        value={userInput["current-savings"]}
                        type="number"
                        id="current-savings"
                    />
                </p>
                <p>
                    <label htmlFor="yearly-contribution">
                        Ahorros Mensuales (€)
                    </label>
                    <input
                        onChange={(event) =>
                            inputChangeHandler(
                                "monthly-contribution",
                                (event.target as HTMLInputElement).value
                            )
                        }
                        value={userInput["monthly-contribution"]}
                        type="number"
                        id="monthly-contribution"
                    />
                </p>
            </div>
            <div className={classes["input-group"]}>
                <p>
                    <label htmlFor="expected-return">
                        Interes (%, por año)
                    </label>
                    <input
                        onChange={(event) =>
                            inputChangeHandler(
                                "expected-return",
                                (event.target as HTMLInputElement).value
                            )
                        }
                        value={userInput["expected-return"]}
                        type="number"
                        id="expected-return"
                    />
                </p>
                <p>
                    <label htmlFor="duration">
                        Duración de Inversión (años)
                    </label>
                    <input
                        onChange={(event) =>
                            inputChangeHandler(
                                "duration",
                                (event.target as HTMLInputElement).value
                            )
                        }
                        value={userInput["duration"]}
                        type="number"
                        id="duration"
                    />
                </p>
            </div>
            <p className={classes.actions}>
                <button
                    onClick={resetHandler}
                    type="reset"
                    className={classes.buttonAlt}
                >
                    Reset
                </button>
                <button type="submit" className={classes.button}>
                    Calcular
                </button>
            </p>
        </form>
    );
};

export default UserInput;
