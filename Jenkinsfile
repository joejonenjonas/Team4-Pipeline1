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
        stage('Run app') {
            steps {
                script {
                        sh 'ls -l'
                        sh 'npm install'
                        sh 'npm run dev'
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
