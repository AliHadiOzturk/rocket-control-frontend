# Miltron Rocket Controller Frontend

Frontend project for an rocket launch station. This frontend project showing all rocket data from provided [backend service]. This project also have a live data coming from [rocket-controller-backend] via `WebSocket` 
## Running Project
To run this project:
* You need docker installed.
* If you don't have angular-cli, install it with `npm install -g @angular/cli
* Create a `environment.ts` file under `src/environments/`.
    - Then paste.
    ```typescript
    export const environment = {
        production: false,
        serviceUrl: 'http://127.0.0.1:5000/',
        wsUrl: 'http://127.0.0.1:5001/',
        apiKey: 'API_KEY_1'
    };
    ```
* Run [backend service] with docker command `docker run -d  -p 5000:5000 -p 4000-4009:4000-4009 miltronhub/launchsite:1.0.0` Docker will start image in the background and accessible with url http://127.0.0.1:5000/
* Run [rocket-controller-backend](https://github.com/AliHadiOzturk/rocket-control-backend#running-project) for live data coming with `Web Socket` events.
* Run `yarn install` for the install packages.
* Run `yarn start` command for the frontend start. Frontend's default url http://localhost:4200
 


[backend service]:https://hub.docker.com/r/miltronhub/launchsite
[rocket-controller-backend]:https://github.com/AliHadiOzturk/rocket-control-backend