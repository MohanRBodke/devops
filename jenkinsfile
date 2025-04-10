pipeline {
    agent any

    environment {
        NEWMAN_PATH = "C:/Users/mohan/AppData/Roaming/npm/newman.cmd"
    }

    stages {
        stage('Build') {
            steps {
                dir('app') {
                    sh 'npm install'
                }
            }
        }

        stage('Test') {
            steps {
                dir('test/postman') {
                    sh "${env.NEWMAN_PATH} run collection.json -e environment.json"
                }
            }
        }

        stage('Deploy') {
            steps {
                sh './deploy-to-test.sh'
            }
        }
    }

    post {
        always {
            echo 'Pipeline finished.'
        }
    }
}
