# Sports Poll Project Specification

The "Sports Poll" app is a simple polling application centered around various sports events, where data is retrieved from a JSON file.

The app allows users to vote on an event and then presents another random event for the next vote. Each poll displays one random category at a time. For example, a Football category may be loaded with options to vote on, such as which team will win or if the game will end in a draw. On reloading the browser, the category might switch to another sport, like Tennis.

Polling options include:

    Home Team Win (Team A)
    Draw
    Away Team Win (Team B)

### Core Requirements

Estimated time for completion: 3 to 6 hours

- Design: Create a user-friendly page following best design practices. The design will be evaluated for its visual appeal and ease of use.
- Framework Choice: You may use any modern JavaScript framework, but the choice will influence the evaluation.
- Event Data: The JSON file containing events can be accessed directly from the frontend or hardcoded.
- Random Odds: Generate event odds randomly. Votes do not need to persist across page reloads.
