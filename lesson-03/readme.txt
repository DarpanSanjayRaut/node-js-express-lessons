In this lesson we'll install mongodb and connect to mongodb 

1. download and install mongodb
2. go to the folder in which mongodb is present in my case it is
    C:\Windows\System32\cmd.exe
3. open cmd and run below command
    mongod --port 27017 --dbpath /data/db --bind_ip 0.0.0.0 

Note : create /data/db folder if not present. the data gets stored here

npm install dotenv --save
npm install mongoose --save
