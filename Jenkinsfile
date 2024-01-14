pipeline {
    agent any

    stages {
        stage('Git Setup') {
            steps {
                sh 'git init'
            }
        }

        stage('Checkout') {
            steps {
                script {
                    skipDefaultCheckout()
                    git branch: 'develop', url: 'https://github.com/joejonenjonas/Team4-Pipeline1.git'
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
