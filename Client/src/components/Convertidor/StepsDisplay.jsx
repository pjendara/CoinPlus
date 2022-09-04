import React, { useState, useEffect, useRef } from "react";

export default function StepsDisplay ({ steps, currentStep }){

    const [newStep, setNewStep] = useState([]);
    const stepsRef = useRef();
  
    const updateStep = (stepNumber, steps) => {
      const newSteps = [...steps];
      console.log(newSteps);
      let count = 0;
      while (count < newSteps.length) {
        //current step
        if (count === stepNumber) {
          newSteps[count] = {
            ...newSteps[count],
            highlighted: true,
            selected: true,
            completed: true,
          };
          count++;
        }
  
        //step completed
        else if (count < stepNumber) {
          newSteps[count] = {
            ...newSteps[count],
            highlighted: false,
            selected: true,
            completed: true,
          };
          count++;
        }
        //step pending
        else {
          newSteps[count] = {
            ...newSteps[count],
            highlighted: false,
            selected: false,
            completed: false,
          };
          count++;
        }
      }
  
      return newSteps;
    };
  
    useEffect(() => {
      const stepsState = steps.map((step, index) =>
        Object.assign(
          {},
          {
            description: step,
            completed: false,
            highlighted: index === 0 ? true : false,
            selected: index === 0 ? true : false,
          }
        )
      );
  
      stepsRef.current = stepsState;
      const current = updateStep(currentStep - 1, stepsRef.current);
      setNewStep(current);
    }, [steps, currentStep]);

    const stepsDisplay = newStep.map((step, index) => {
        return (
          <div
            key={index}
          >
            <div >
              <div
              >
                {step.completed ? (
                  <span >&#10003;</span>
                ) : (
                  index + 1
                )}
              </div>
              <div
               
              >
                {step.description}
              </div>
            </div>
            <div
              
            ></div>
          </div>
        );
      });

    return(
        <div>
            {stepsDisplay}
        </div>
    )
}