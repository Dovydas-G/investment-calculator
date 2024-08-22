export default function UserInput ({ onChange, userInput }) {

    return (
        <>
            <section id="user-input" action="">
                <div className="input-group">
                    <p>
                        <label id="user-input label" htmlFor="">INITIAL  INVESTMENT</label>
                        <input value={userInput.initialInvestment} onChange={(event) => onChange('initialInvestment', event.target.value)} id="user-input input" type="number" />
                    </p>
                    <p>
                        <label id="user-input label" htmlFor="">ANNUAL INVESTMENT</label>
                        <input value={userInput.annualInvestment} onChange={(event) => onChange('annualInvestment', event.target.value)} id="user-input input" type="number" />
                    </p>
                </div>
                <div className="input-group">
                    <p>
                        <label id="user-input label" htmlFor="">EXPECTED RETURN</label>
                        <input value={userInput.expectedReturn} onChange={(event) => onChange('expectedReturn', event.target.value)} id="user-input input" type="number" />
                    </p>
                    <p>
                        <label id="user-input label" htmlFor="">DURATION</label>
                        <input value={userInput.duration} onChange={(event) => onChange('duration', event.target.value)} id="user-input input" type="number" />
                    </p>
                </div>
            </section>
        </>
    )
}