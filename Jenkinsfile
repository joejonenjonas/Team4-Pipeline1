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
                    sh 'git pull https://github.com/joejonenjonas/Team4-Pipeline1.git'
                }
            }
        }
        
        stage('Create .dockerignore') {
            steps {
                script {
                    def dockerignoreContent = """
                        # Include all files
                        *
                        # Exclude specific files or directories
                        !*.json
                    """
                    writeFile(file: '.dockerignore', text: dockerignoreContent)
                }
            }
        }
        
        stage('Create Dockerfile') {
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
        
        stage('Merge Develop into Master') {
            steps {
                script {
                    sh 'git checkout master'
                    sh 'git merge origin/develop'
                    sh 'git push origin master'
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
