# calculator-jan-2021

## Outcomes

-Addition
    We should see on the screen: two user input boxes, and a button (there is also a secret place where we put the result)
        -validation: Look at the screen
    -We should be able to "get" the user input
        1) Grab the dom elements (the input box and the button) in javascript
            -How: make variables for each dom element, using 'doc.getElementById('whatever-id')
            -Why do we need the input box? Because thats where the user input lives
            -Why do we need the button? The button triggers the 'event'
            -Validation: we can log dom elements out
        2) Add an event listener to the button
            -validation: console.log 'hello world' on click
        3) Get access to what the user typed in
            - How: get acces to what the user typed in
            - Validation: we can log out the user input (the number they type) on click
        4) Use the user input to calculate the results
            - Validation: log out the result to the console
        5) Display that result to the user 
            - How: we need to grab the secret box, and inject the answer into its 'textContent'
            - Validation: we should see it on the screen
        
