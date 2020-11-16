# Lider Challenge

# User Interface for searching products

The user interface looks for products calling a service

### Build

Build the artifact using nodejs 10 command which is inside this project:
```sh
$ npm install
$ npm install -g @angular/cli
```

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
```sh
$ ng build
```

### Execution

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
```sh
$ ng serve
```

If you only want to use docker, you can generate the image and run the container using this:
```sh
$ docker build --tag wm-product-ui .
$ docker run --publish 8080:8080 --name bb wm-product-ui

