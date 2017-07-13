# node-docker

### Dockerfile

Structure
```
FROM image

RUN command

COPY copy files from host to image

CMD exit command
```

### Tips
- Generate shrinkwrap: `npm shrinkwrap`
    - To generage shrinkwrap with dev dependencies add `--dev`
- Do heavy taks at the end.
- List images : `docker images`
- To rename an image: `docker tag <IMAGE_ID> <NEW_NAME>`
- To remove an image: `docker rmi <IMAGE_ID>`
- Run image: `docker run <IMAGE_ID> OR <IMAGE_NAME>`
- List containers: `docker ps`
- Stop container: `docker stop <CONTAINER_ID>`
- Build docker-compose: `docker-compose build`
- Up docker-compose: `docker-compose up`
    - To run in bg (Daemon mode): `docker-compose up -d`
    - To run docker-compose for production: `docker-compose -f docker-compose.prod.yml build`
- List container logs: `docker logs <CONTAINER_ID>`

### Flow
Download image > Run commands > Image ready :D.

### Containers
Running images.

### Volumes
Symbolic link between host and container for sync purposes. Called binding.

Create a link between the local code and the container code

### Docker-compose
A .yml file to orchestrate all the infrastructure and application to get it running.
- Port: portContainer/portMachine.
