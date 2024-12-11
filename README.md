# PFOaaS

*Dec 2024 - v0.0.15*

PFOaaS (Polite Fork Off As A Service) provides a modern, RESTful, scalable solution to the common problem of telling people to fork off.

Please see https://pfoaas.desigeek.com for API documentation and examples.

# Example use

# Docker

    docker build -t foaas:1 .
    docker run -v $(pwd):/usr/src/app -p 5000:5000 foaas:1

# Docker Compose

You can also use Docker Compose to run the application:

1. Create a `docker-compose.yml` file with the following content:

    ```yaml
    version: '3.8'

    services:
      pfoaas:
        image: amitbahree/pfoaas
        build:
          context: .
          dockerfile: Dockerfile
        ports:
          - "5000:5000"
        environment:
          NODE_ENV: production
        restart: unless-stopped
    ```

2. Run Docker Compose:

    ```sh
    docker-compose up
    ```

# Docker Hub

The Docker image for this project is also available on Docker Hub. You can pull it using the following command:

    docker pull amitbahree/pfoaas

For more details, visit the [Docker Hub repository](https://hub.docker.com/repository/docker/amitbahree/pfoaas/general).

# Contributing

## Adding new operations

To add a new FOAAS operation:

1. Fork into your account
2. Branch into a feature branch `feature/your_operation`
3. See the operation files in `/lib/operations`.
4. Add specs, using `/spec/operations` as examples. We won't be merging operations without working specs.
5. Push to your fork and submit a PR.

All contributions are very welcome.
