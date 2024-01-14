pipeline {
    agent any
    stages {
        stage('Checkout Code') {
            steps {
                checkout([
                    $class: 'GitSCM',
                    branches: [[name: '*/develop']],
                    doGenerateSubmoduleConfigurations: false,
                    extensions: [],
                    submoduleCfg: [],
                    userRemoteConfigs: [[url: 'https://github.com/joejonenjonas/Team4-Pipeline1.git']]
                ])
            }
        }
        stage('Prepare Dockerfile') {
            steps {
                script {
                    def dockerfileContent = """
                    # Use the official Node.js image as the base image
                    FROM node:14-alpine as base
                    # Set the working directory inside the container
                    WORKDIR /app
                    # Copy package.json and package-lock.json (if available)
                    COPY package*.json ./
                    # Install production dependencies.
                    RUN npm ci --only=production
                    # Copy the rest of the application code
                    COPY . .
                    # Expose the port that the application listens on
                    EXPOSE 4000
                    # Run the application
                    CMD ["npm", "run", "start"]
                    """
                    writeFile(file: 'Dockerfile', text: dockerfileContent)
                }
            }
        }
        stage('Build and Run Node.js App in Docker') {
            steps {
                script {
                    // Build Docker image
                    sh 'docker build -t my-node-app .'
                    // Run Docker container
                    sh 'docker run -p 4000:3000 -d --name karaoke my-node-app'
                }
            }
        }
        stage('Build and Test') {
            steps {
                sh 'mvn verify -X'
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
