# Welcome To The Full-Stack Starter Project

This project will assist you in building the critical skills necessary to complete tasks concerning both the
Front-End and Back-End of a web application.

### Back-End

1. Before anything else, we need to populate our local databases with the sample data. For your convenience, we
have included a script that will automatically import all of the json data for you, so all you need to do is run
it. From the fullstack-starter root directory, enter the following command:
    ```
    ./sample-data/import.sh
    ```

2. Next, ```cd``` into the starter directory
3. In order to run the web application, we need to compile, or "build", the data objects and classes from the
back-end. Enter the following command:

    ```
    mvn clean install
    ```

4. Next, we are ready to run the back-end of the application. Enter the following command:

    ```
    mvn spring-boot:run
    ```

### Front-End

5. In a new terminal window, navigate back to the fullstack-starter root directory
6. Next, ```cd``` into the ui directory
7. In order to run the front-end, we must first resolve any dependencies that the project relies on. Enter the
following command:
    ```
    yarn
    ```

8. After all of the dependencies have been resolved, we are ready to run the front-end of the application. In the
same directory, enter the following command:
    ```
    yarn start
    ```
9. Lastly, to view the operating front-end, navigate to [http://localhost:3000](http://localhost:3000) in any
browser
