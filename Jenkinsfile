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
                    sh 'git pull'
                }
            }
        }
        stage('Create Dockerfile') {
            steps {
                script {
                    def dockerfileContent = """
                        FROM node:14
                        WORKDIR /app
                        COPY . /app
                        RUN npm install
                        EXPOSE 3000
                        CMD [\"npm\", \"run\", \"dev\"]
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

                        // Run Docker container
                        sh 'docker run -p 3000:3000 -d my-node-app'
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
    }
}
