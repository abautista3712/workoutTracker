# workoutTracker

Created by abautista3712 | https://api.github.com/users/abautista3712

![npm](https://img.shields.io/npm/v/fs) ![npm](https://img.shields.io/npm/v/inquirer) ![npm](https://img.shields.io/npm/v/axios)

![workoutTrackerScreenshot](./public/assets/images/workoutTrackerScreenshot.PNG?raw=true "Landing Page")

## Description

workoutTracker is a program developed to help the user organize and display information about the various excercises done in their workout over the course of the week. The application is developed with nodejs, Mongo database with a Mongoose schema, and Express for route handling. Upon opening, the user is presented with a landing screen which contains a summary table detailing the user's last inputted workout. The user has the option to either create a new workout or continuing adding to the last existing workout. Upon either selection, the user can input details about the excercise performed and can continue adding excercises to a workout until finished. Once all excercises have been added the user has the option to complete the workout which will take them back to the home route landing page. The user is also given the option to visualize their workout by clicking on the top left button for dashboard. On the dashboard, the user can see the duration of their workouts in minutes broken down by both day/excercise and can similarly see the amount of weight used during a workout as broken down by both day/excercise.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Test](#tests)
- [Questions](#questions)

## Installation

To install necessary dependencies, run the following command:

```

npm i

```

## Usage

Accessible via: https://thawing-earth-37721.herokuapp.com/

On the home route, the user can begin by choosing either to create a new workout or add to the last existing workout.
![workoutTrackerScreenshot](./public/assets/images/workoutTrackerScreenshot.PNG?raw=true "Landing Page")

Either selection will bring the user to an input page where they can add any number of excercises.
![workoutTrackerInputResistance](./public/assets/images/workoutTrackerInputResistance.PNG?raw=true "Input Page: Resistance Option")
![workoutTrackerInputCardio](./public/assets/images/workoutTrackerInputCardio.PNG?raw=true "Input Page: Cardio Option")
Once finished, the user should select 'complete' which will bring the user back to the home route.

The user can visualize their workout by clicking on 'Dashboard' on the top left corner.
![workoutTrackerScreenshot](./public/assets/images/workoutTrackerScreenshot.PNG?raw=true "Landing Page")
![workoutTrackerDashboard](./public/assets/images/workoutTrackerDashboard.PNG?raw=true "Dashboard")

At any point, the user can also click on 'Fitness Tracker' in the top left corner to return to the home route.

## License

None

## Contributing

External contributions are discouraged.  

## Questions?

<img src="https://avatars1.githubusercontent.com/u/58578177?v=4" alt="avatar" style="border-radius: 16px" width="30" />
    
If you have any questions about this repo, open an issue or contact Abelard Bautista directly at abelardbautista@gmail.com
