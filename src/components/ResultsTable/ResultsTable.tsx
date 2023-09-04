import { resultType } from "../../App";
import classes from "./ResultsTable.module.css";

interface IUserInputProps {
    data: resultType[];
    initialInvestment: number;
}

const formatter = new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
});

const ResultsTable = ({ data, initialInvestment }: IUserInputProps) => {
    return (
        <table className={classes.result}>
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Total Savings</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {data.map((yearData) => {
                    return (
                        <tr key={yearData.year}>
                            <td>{yearData.year}</td>
                            <td>
                                {formatter.format(yearData.savingsEndOfYear)}
                            </td>
                            <td>{formatter.format(yearData.yearlyInterest)}</td>
                            <td>
                                {formatter.format(
                                    yearData.savingsEndOfYear -
                                        initialInvestment -
                                        yearData.yearlyContribution *
                                            yearData.year
                                )}
                            </td>
                            <td>
                                {formatter.format(
                                    initialInvestment +
                                        yearData.yearlyContribution *
                                            yearData.year
                                )}
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

export default ResultsTable;
