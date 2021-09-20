# Project Overview

## Project Name

Bug-Catcher

## Project Description

Bug-Catcher is an interactive learning experience that teaches you about bugs found all over the world! simply move your character around the game board searching for bugs, when you find one - a information page will appear that will show you details of the bug you've caught! 


## Wireframes



#### Desktop Main Page
![Bug-Catcher Main Page](https://i.imgur.com/WgEPBv6.png)

#### Mobile Main Page
![Bug-Catcher Mobile Page](https://i.imgur.com/0G40Ohg.png)

#### Desktop Bug Create Page
![Bug-Catcher Desktop Bug Create Page](https://i.imgur.com/XfrOAKr.png)

#### Mobile Bug Create Page
![Bug-Catcher Mobile Bug Create Page](https://i.imgur.com/9xxH5Gt.png)

#### Desktop Bug Information Screen
![Bug-Catcher Desktop Bug Info Screen](https://i.imgur.com/otJwrXH.png)

#### Mobile Bug Information Screen
![Bug-Catcher Desktop Bug Info Screen](https://i.imgur.com/xvUhqVS.png)

## Component Hierarchy

![Bug-Catcher App Component Hierarchy](https://i.imgur.com/TBmKxhE.png)

## API and Data Sample

### Example Link:

https://api.airtable.com/v0/AIRTABLE_BASE_ID/bugs?api_key=YOUR_API_KEY

### Example Data:

```json
{
  "records": [
    {
      "id": "rec0MIBiEhEHoDpyO",
      "fields": {
        "species": "Synoeca",
        "image-url": "https://i.imgur.com/yNYi7Uq.png",
        "information": "Commonly known as warrior wasps or drumming wasps, they are known for their aggressive behavior, a threat display consisting of multiple insects guarding a nest beating their wings in a synchronized fashion, and an extremely painful sting.",
        "schmidt pain index": "because the warrior wasps sting can last up to 150 minutes, it is ranked as the second most painful sting on the Schmidt pain index! Ouch!!",
        "bug": "Warrior Wasp"
      },
      "createdTime": "2021-09-20T05:19:22.000Z"
    }
```

### MVP/Post MVP

#### MVP

- design and create entire structure of app via react and react router
- Create an Airtable that will handle GET, and POST along with PUT data 
- Render the game board randomly with bugs
- Create a form for users to add more bugs
- Style components using CSS create layout with grid and flexbox
- Make site responsive on at least two screen sizes
- Deploy site and use .env to hide API keys

#### Post MVP

- Add game elements, like a win/lose scenerio
- Make the bug catching interactive 

## Project Schedule

| Day        | Deliverable                                   | Status   |
| ---------- | --------------------------------------------- | -------- |
| Sept 20    | Readme / Wireframes / Timeframe               | Complete |
| Sept 20    | Approval                                      |incomplete|
| Sept 21    | App Sctructure(React, Scss, Javascript)       |incomplete|
| Sept 22    | Axios / Form / Game Logic / Render            |incomplete|
| Sept 23    | MVP Deployment                                |incomplete|
| Sept 24    | post-MVP/ Game Logic                          |incomplete|
| Sept 27    | Presentation                                  |incomplete|      
## Timeframes

| Component                     | Priority | Estimated Time | Time Invested | Actual Time |
| ----------------------------- | :------: | :------------: | :-----------: | :---------: |
| Prep/Plan                     |    H     |     3hrs       |     2hrs      |             |
| Wireframes/Animation Design   |    H     |     2.5hrs     |     2hrs      |             |
| React Structure               |    H     |     2.5hrs     |               |             |
| Page/Gameboard Styling        |    H     |     3hrs       |               |             |
| Component Styling             |    H     |     3.5hrs     |               |             |
| Routing                       |    H     |     2.5hrs     |               |             |
| Airtable                      |    H     |     3hrs       |               |             |
| Axios Requests                |    H     |     3hrs       |               |             |
| Media Queries                 |    M     |     2.5hrs     |               |             |  
| Bug Information screen        |    H     |     3.5hrs     |               |             |
| Form Setup                    |    M     |     2hrs       |               |             |
| Form POST                     |    H     |     2.5hrs     |               |             |
| Debug                         |    M     |     3hrs       |               |             |
| SCSS animation                |    L     |     3.5hrs     |               |             |
|Deployment                     |    H     |     2hrs       |               |             |
| Total                         |          |     42hrs      |     4hrs      |    4hrs     |

