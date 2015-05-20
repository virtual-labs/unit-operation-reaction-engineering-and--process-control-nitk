// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Test Your Knowledge",
        "main":    "<p></p>",
        "results": "<h5>Learn More</h5><p>study and take quiz</p>",
        "level1":  "Jeopardy Ready",
        "level2":  "Jeopardy Contender",
        "level3":  "Jeopardy Amateur",
        "level4":  "Jeopardy Newb",
        "level5":  "Stay in school, kid..." // no comma here
    },
     "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "In a continuous flow stirred tank reactor, the concentration of the exit stream",
            "a": [
                { "option": "is same as that in the reactor", "correct": true },
                { "option": "is different than that in the reactor", "correct": false },
                { "option": "depends upon the flow rate of inlet stream", "correct": false },
              { "option": "none", "correct": false}		// no comma here
            ],
              "correct": "<p><span>Right answer</span> Ans:is same as that in the reactor</p>",
              "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:is same as that in the reactor</p>" // no comma here
        },
          { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
              "q": "For a given conversion with  first order reaction , which one will be of less volume",
              "a": [
                { "option": "PFR", "correct": true },
               { "option": "CSTR", "correct": false} // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>Right answer</span> Ans:PFR</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:PFR</p>" // no comma here
        },
          { // Question 3 - Multiple Choice, Multiple True Answers, Select All
              "q": "Consider a  reaction A -----> B  which is  a first order reaction. At a particular time the concentration of a reactant in a batch reactor is 5mole/lit. Temperature is maintained at 30° C. Rate of the reaction at this time is  15mole/lit.min. The same reaction is being carried out in a  CSTR  and the concentration in the reactor is maintained at 10 mole/lit. The rate of reaction in CSTR is ------------the rate of reaction in the batch reactor if the CSTR temperature is maintained at 30°C.",
            "a": [
                { "option": "equal to", "correct": false },
                { "option": "greater than", "correct": true },
              { "option": "smaller than", "correct": false} // no comma here
            ],
              "correct": "<p><span>Right answer</span> Ans:greater than</p>",
              "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:greater than</p>" // no comma here
        },
       { // Question 4
           "q": "Consider a reaction A ----> B  which is  a first order reaction. At a particular time the concentration of a reactant in a batch reactor is 2mole /lit. Temperature is maintained at 30° C. Rate of the reaction at this time is   5mole/lit.min. The same reaction is being carried out in a   CSTR  and the concentration in the reactor is maintained at 2mole/lit. The rate of reaction in   CSTR is ----------- the rate of reaction in the batch reactor if the CSTR temperature is maintained at 50°C. ",
            "a": [
            { "option": "equal to", "correct": false },
                { "option": "greater than", "correct": true },
              { "option": "smaller than", "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:greater than</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:greater than</p>" // no comma here
        },
         { // Question 5
             "q": "Consider reaction A ----> B  which is  a first order reaction. At a particular time the concentration of a reactant in a batch reactor is 5 mole/lit. Temperature is maintained at 30° C. Rate of the reaction at this time is   15mole/lit.min. The same reaction is being carried out in a  steady state continuous stirred tank reactor (CSTR)  and the concentration in the reactor is maintained at 5mole/lit. The rate of reaction in   CSTR is ----------- the rate of reaction in the batch reactor if the CSTR temperature is also maintained at 30°C. ",
            "a": [
                  { "option": "equal to", "correct": false },
                { "option": "greater than", "correct": true },
              { "option": "smaller than", "correct": false} // no comma here
            ],
              "correct": "<p><span>Right answer</span> Ans:equal to</p>",
              "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:equal to</p>"  // no comma here
        }// no comma here
    ]
};
