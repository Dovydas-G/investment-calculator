import { useState } from "react";
import { calculateInvestmentResults, formatter } from "../util/investment.js"

export default function UserInput () {
    const [initialInvestment, setInitialInvestment] = useState('');
    const [annualInvestment, setAnnualInvestment] = useState('');
    const [expectedInvestment, setExpectedInvestment] = useState('');
    const [duration, setDuration] = useState('');

    function handleInitialInvestment (e) {
        setInitialInvestment(e.target.value);
    }

    function handleAnnualInvestment (e) {
        setAnnualInvestment(e.target.value);
    }

    function handleExpectedInvestment (e) {
        setExpectedInvestment(e.target.value);
    }

    function handleDuration (e) {
        setDuration(e.target.value);
    }
    
    const result = calculateInvestmentResults(+initialInvestment, +annualInvestment, +expectedInvestment, +duration)
    
    for (const item of result) {
        console.log(formatter.format(item.valueEndOfYear))
    }
    


    return (
        <>
            <section id="user-input" action="">
                <div className="input-group">
                    <p>
                        <label id="user-input label" htmlFor="">INITIAL  INVESTMENT</label>
                        <input value={initialInvestment} onChange={handleInitialInvestment} id="user-input input" type="number" />
                    </p>
                    <p>
                        <label id="user-input label" htmlFor="">ANNUAL INVESTMENT</label>
                        <input value={annualInvestment} onChange={handleAnnualInvestment} id="user-input input" type="number" />
                    </p>
                </div>
                <div className="input-group">
                    <p>
                        <label id="user-input label" htmlFor="">EXPECTED RETURN</label>
                        <input value={expectedInvestment} onChange={handleExpectedInvestment} id="user-input input" type="number" />
                    </p>
                    <p>
                        <label id="user-input label" htmlFor="">DURATION</label>
                        <input value={duration} onChange={handleDuration} id="user-input input" type="number" />
                    </p>
                </div>
            </section>
            <table id="result">
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
            </table>
        </>
    )
}