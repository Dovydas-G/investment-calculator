import { useState } from "react";
import { calculateInvestmentResults, formatter } from "../util/investment.js"

export default function UserInput () {
    const [userInput, setUserInput] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10
    });

    function handleChange(inputIdentifier, newValue) {
        setUserInput(prevUserInput => {
            return {
                ...prevUserInput,
                [inputIdentifier]: newValue
            };
        });
    }

    // const result = calculateInvestmentResults(+(userInput.initialInvestment), +(userInput.annualInvestment), +(userInput.expectedReturn), +(userInput.duration))
    
    // for (const item of result) {
    //     console.log(formatter.format(item.valueEndOfYear))
    // }
    
    return (
        <>
            <section id="user-input" action="">
                <div className="input-group">
                    <p>
                        <label id="user-input label" htmlFor="">INITIAL  INVESTMENT</label>
                        <input value={userInput.initialInvestment} onChange={(event) => handleChange('initialInvestment', event.target.value)} id="user-input input" type="number" />
                    </p>
                    <p>
                        <label id="user-input label" htmlFor="">ANNUAL INVESTMENT</label>
                        <input value={userInput.annualInvestment} onChange={(event) => handleChange('annualInvestment', event.target.value)} id="user-input input" type="number" />
                    </p>
                </div>
                <div className="input-group">
                    <p>
                        <label id="user-input label" htmlFor="">EXPECTED RETURN</label>
                        <input value={userInput.expectedReturn} onChange={(event) => handleChange('expectedReturn', event.target.value)} id="user-input input" type="number" />
                    </p>
                    <p>
                        <label id="user-input label" htmlFor="">DURATION</label>
                        <input value={userInput.duration} onChange={(event) => handleChange('duration', event.target.value)} id="user-input input" type="number" />
                    </p>
                </div>
            </section>
            {/* <table id="result">
                <thead id="result thead">
                    <tr>
                        <th>Year</th>
                        <th>Investment Value</th>
                        <th>Interest(Year)</th>
                        <th>Total interest</th>
                        <th>Invested Capital</th>
                    </tr>
                </thead>
                <tbody id="result tbody">
                   {result.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            <td>{row.year}</td>
                            <td>{formatter.format(row.valueEndOfYear)}</td>
                            <td>{formatter.format(row.interest)}</td>
                            <td>{formatter.format(row.valueEndOfYear - (+initialInvestment + (row.annualInvestment * row.year)))}</td>
                            <td>{formatter.format(+initialInvestment + (row.annualInvestment * row.year))}</td>
                        </tr>
                   ))}
                </tbody>
            </table> */}
        </>
    )
}