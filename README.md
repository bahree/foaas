# PFOaaS

*July 2024 - v0.0.15*

PFOaaS (Polite Fork Off As A Service) provides a modern, RESTful, scalable solution to the common problem of telling people to fork off.

Please see https://pfoaas.desigeek.com for API documentation and examples.

# Example use

# Docker

    docker build -t foaas:1 .
    docker run -v $(pwd):/usr/src/app -p 5000:5000 foaas:1

# Docker
    image: amitbahree/pfoaas:latest

# Contributing

## Adding new operations

To add a new FOAAS operation:

1. Fork into your account
2. Branch into a feature branch `feature/your_operation`
3. See the operation files in `/lib/operations`.
4. Add specs, using `/spec/operations` as examples. We won't be merging operations without working specs.
5. Push to your fork and submit a PR.

All contributions are very welcome.
