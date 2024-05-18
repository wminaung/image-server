# Express Static File Server

This project is an example of how to serve static files using an Express application.

## Getting Started

Follow these instructions to set up and run the project on your local machine.

### Prerequisites

- Node.js installed on your machine
- npm (Node Package Manager) or yarn

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/yourusername/express-static-file-server.git
   cd express-static-file-server
   ```

## 1. Define API Endpoint

Define an API endpoint for uploading images. The endpoint URL should be in the format `apiurl /foodman` with the HTTP method `POST`. Ensure that the field name for the image in the request payload is `foodman`.

Example:

```plaintext
API URL: http://${hostname}/api/foodman
Method: POST
Field Name: foodman
```

## 2. Response Type

```

export interface ImageUploadResponseType {
  url: string; // full url
  path: string;
  size: number;
  filename: string;
  host: string | undefined;
  protocol: string;
}

```
