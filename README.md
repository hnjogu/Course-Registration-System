##Installation Process
clone the project
run 
    composer install
composer require laravel/breeze --dev

After using this command to install breeze library run this command to create auth ;php artisan breeze: install react,This command will create authentication with login, register, dashboard, forgot password, and email verification.

Install the node js package using the below command:

npm install
After installation of node js packages, you will need to run vite, using the below command.

npm run dev
but you will note that after using npm run dev nothing much will happens so will need to use npm run build to compile the package.

Creating Migration and Model

We are going to create a migration for the tables by running the following command
php artisan migrate

Create the Database
    DB_CONNECTION=mysql
    DB_HOST=127.0.0.1
    DB_PORT=3306
    DB_DATABASE=student_db
    DB_USERNAME=root
    DB_PASSWORD= 

