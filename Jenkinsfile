pipeline {
    agent any

    stages {
        stage('Git Setup') {
            steps {
                sh 'git init'
            }
        }

        stage('Checkout develop') {
            steps {
                script {
                    skipDefaultCheckout()
                    git branch: 'develop', url: 'https://github.com/joejonenjonas/Team4-Pipeline1.git'
                }
            }
        }

        stage('Create Dockerfile') {
            steps {
                script {
                    def dockerfileContent = """
# syntax=docker/dockerfile:1

# Comments are provided throughout this file to help you get started.
# If you need more help, visit the Dockerfile reference guide at
# https://docs.docker.com/go/dockerfile-reference/

ARG NODE_VERSION=18.14.2

FROM node:${NODE_VERSION}-alpine

# Use production node environment by default.
ENV NODE_ENV production


WORKDIR /usr/src/app

# Download dependencies as a separate step to take advantage of Docker's caching.
# Leverage a cache mount to /root/.npm to speed up subsequent builds.
# Leverage a bind mounts to package.json and package-lock.json to avoid having to copy them into
# into this layer.
RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci --omit=dev

# Run the application as a non-root user.
USER node

# Copy the rest of the source files into the image.
COPY . .

# Expose the port that the application listens on.
EXPOSE 4000

# Run the application.
CMD npm run dev

                    """
                    writeFile(file: 'bussinbee/src/app/Dockerfile', text: dockerfileContent)
                }
            }
        }

        stage('Build and Run Node.js App in Docker') {
            steps {
                script {
                    // Assuming your Node.js app is in a directory named 'app'
                    dir('bussinbee/src/app') {
                        // Build Docker image
                        sh 'docker build -t my-node-app .'
                        sh 'docker run -p 4000:3000 -d --name karaoke my-node-app'
                    }
                }
            }
        }

        stage('Checkout test') {
            steps {
                script {
                    skipDefaultCheckout()
                    git branch: 'test', url: 'https://github.com/joejonenjonas/Team4-Pipeline1.git'
                    sh 'git pull'
                }
            }
        }

        stage('Build and Test') {
            steps {
                script {
                    sh 'mvn verify -X'
                }
            }
        }

        stage('Cleanup Docker Container') {
            steps {
                script {
                    sh 'docker stop karaoke || true'
                    sh 'docker rm karaoke || true'
                }
            }
        }
    }
}
