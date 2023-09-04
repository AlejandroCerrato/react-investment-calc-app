import Header from "./components/Header/Header";
import UserInput from "./components/UserInput/UserInput";
import ResultsTable from "./components/ResultsTable/ResultsTable";
import { useState } from "react";

export type userInputType = {
    "current-savings": number;
    "monthly-contribution": number;
    "expected-return": number;
    duration: number;
};

export type resultType = {
    year: number;
    yearlyInterest: number;
    savingsEndOfYear: number;
    yearlyContribution: number;
};

function App() {
    const [userInput, setUserInput] = useState<userInputType | null>(null);

    const calculateHandler = (userInput: userInputType) => {
        setUserInput(userInput);
    };

    const yearlyData = []; // per-year results

    if (userInput) {
        let currentSavings = +userInput["current-savings"];
        const yearlyContribution = +userInput["monthly-contribution"] * 12;
        const expectedReturn = +userInput["expected-return"] / 100;
        const duration = +userInput["duration"];

        // The below code calculates yearly results (total savings, interest etc)
        for (let i = 0; i < duration; i++) {
            const yearlyInterest = currentSavings * expectedReturn;
            currentSavings += yearlyInterest + yearlyContribution;
            yearlyData.push({
                year: i + 1,
                yearlyInterest: yearlyInterest,
                savingsEndOfYear: currentSavings,
                yearlyContribution: yearlyContribution,
            });
        }
    }

    return (
        <div>
            <Header />
            <UserInput onCalculate={calculateHandler} />
            {!userInput && (
                <p style={{ textAlign: "center" }}>
                    No se ha calculado nada aún.
                </p>
            )}
            {userInput && (
                <ResultsTable
                    data={yearlyData}
                    initialInvestment={userInput["current-savings"]}
                />
            )}
        </div>
    );
}

export default App;
