import React from "react";

export function PersonForm(props) {
  const [stateName, setName] = React.useState(props.person.name);
  const [email, setEmail] = React.useState(props.person.email);

  return (
    <form
      onSubmit={(e) => {
        // use preventDefault, so that the browser not try
        // to reload the page on submit (skip default behavior)
        e.preventDefault();
        props.onSubmitPerson({ name: stateName, email: email });
      }}
    >
      <div>
        <label htmlFor="name">Name</label>
        {/* this is a "controlled input" */}
        <input
          id="name"
          style={{ marginLeft: 16 }}
          value={stateName}
          onChange={(e) => setName(e.target.value)}
          required
        />
        {/* fyi: this is an "uncontrolled input" */}
        {/* <input id="uncontrolled" style={{ marginLeft: 16 }} /> */}
      </div>
      <div>
        <label htmlFor="email">E-Mail</label>
        <input
          id="email"
          style={{ marginLeft: 16 }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <button type="submit">submit</button>
    </form>
  );
}

// just for info: basic idea of a stepper implementation
function BasicStepper() {
  // setting the currentStep to "person" or "payment" or "overview"
  // should show only this step as the active step in the UI
  const [currentStep, setCurrentStep] = React.useState("person");
  return (
    <div>
      <h2>1. person</h2>
      {currentStep === "person" ? (
        <div>
          SHOW PERSON DATA =>
          <button onClick={() => setCurrentStep("payment")}>next step</button>
        </div>
      ) : null}

      <h2>2. payment</h2>
      {currentStep === "payment" ? (
        <div>
          SHOW PAYMENT DATA =>
          <button onClick={() => setCurrentStep("overview")}>next step</button>
        </div>
      ) : null}

      <h2>3. overview</h2>
      {currentStep === "overview" ? <div>SHOW OVERVIEW DATA</div> : null}
    </div>
  );
}

export function StepperFormApp() {
  const [person, setPerson] = React.useState({
    name: "Pascal",
    email: "test@example.com",
  });
  const [paymentInfo, setPaymentInfo] = React.useState({
    method: "",
    info: "",
  });

  // setting the currentStep to "person" or "payment" or "overview"
  // should show only this step as the active step in the UI
  const [currentStep, setCurrentStep] = React.useState("person");

  return (
    <div>
      <h1>my stepper form</h1>

      <h2>1. person</h2>
      {currentStep === "person" ? (
        <PersonForm
          onSubmitPerson={(newPerson) => {
            setPerson(newPerson);
            setCurrentStep("payment");
          }}
          person={person}
        />
      ) : null}

      <h2>2. payment</h2>
      {currentStep === "payment" ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setCurrentStep("overview");
          }}
        >
          TODO add some input-components to edit data (like PersonForm)
          <button type="submit">next step</button>
        </form>
      ) : null}

      <h2>3. overview</h2>
      {currentStep === "overview" ? (
        <div>
          <p>you inserted one first step the following person:</p>
          <pre>{JSON.stringify(person)}</pre>
          <p>you inserted on second the step the following payment-method:</p>
          <pre>{JSON.stringify(paymentInfo)}</pre>
        </div>
      ) : null}
    </div>
  );
}
