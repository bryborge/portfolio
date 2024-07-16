# Portfolio

This is my portfolio app.  It is a NextJS application and was bootstrapped using [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Prerequisites

*   nodenv (optional)
*   NodeJS
*   Docker

## Getting Started

1.  `npm install`
2.  `npm run dev`

You could also use Docker to spin up the application locally, though it is generally a nicer, faster experience to work
on the application natively on your development machine.  


Now, open [http://localhost:3000](http://localhost:3000) with your browser.

## Testing

TODO: Add test suite

## Deployment

This project uses [Github Workflows](https://docs.github.com/en/actions/using-workflows) to manage the docker image
build, tag, and push steps to [AWS ECR](https://aws.amazon.com/ecr/).  All of this is set up to work against the `main`
branch.

### CI/CD

After Github Workflows is triggered and runs successfully, an image with the name/tag `<REPOSITORY_URI>:<TAG>` can be
found in the image repository on ECR.

To deploy this app where it is currently hosted ([AWS ECS](https://aws.amazon.com/ecs/)), you will need to update the
image tag variable in IaC
(found [here](https://github.com/bryborge/cosmos/blob/main/aws/environments/production/portfolio/02_ecs/terraform.tfvars#L3)).
Once this value has been updated to point to the correct image you just pushed, just run the following commands from
the [correct directory within the Cosmos project](https://github.com/bryborge/cosmos/blob/main/aws/environments/production/portfolio/02_ecs/).

**TODO:** Remove the above manual step(s) so that the "CD" part of "CI/CD" is fully implemented.

### Manual Process

1.  When ready to create and deploy a version of the app, use the docker cli to build a new image and tag it.

    ```sh
    docker build -t portfolio-app .
    docker tag portfolio-app:latest <12345667890>.dkr.ecr.<AWS_REGION>.amazonaws.com/portfolio-app:latest
    ```

2.  Now use docker to push the newly built and tagged image up to AWS ECR.

    ```sh
    docker push <12345667890>.dkr.ecr.<AWS_REGION>.amazonaws.com/portfolio-app:latest
    ```

3.  Once complete, head over to the AWS Web Console and navigate to `Elastic Container Service` > `Task Definitions` > `<my-task-definition>`,
    then press the `Create new revision` button. Fill out the form and then click `Create`.

4.  While still on the AWS ECS page, navigate to `Clusters` > `<my-cluster>` and then select your service `<my-service>`.
    On the Service description page, click the `Update Service` button, fill out the form (taking care to select the correct revision),
    then `Update`.

    This can take several minutes to spin up the new services with the new image and drain the old services

5.  Once this completes, check the health of the application in the browser.

### Infrastructure

The application can be deployed to AWS ECS, the infrastructure for which has been codified and can be found
[here](https://github.com/bryborge/cosmos/tree/main/aws/modules/ecs-hosted-app).
