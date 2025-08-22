// Define your customizable inputs
const statusCode = 503;
const title = "En maintenance";
const message =
  "Notre site est actuellement en maintenance. Nous revenons bientôt avec une nouvelle version.";

export default {
  async fetch(request) {
    // Serve the maintenance page as a response
    return new Response(generateMaintenancePage(), {
      status: statusCode,
      headers: {
        "Content-Type": "text/html",
        "Retry-After": "3600", // Suggest retry after 1 hour
      },
    });
  },
};

function generateMaintenancePage() {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${title}</title>
        <style>
            body {
                margin: 0;
                font-family: Arial, sans-serif;
                display: flex;
                align-items: center;
                justify-content: center;
                height: 100vh;
                background-color: #f4f4f4;
                color: #333;
                text-align: center;
            }
            .container {
                max-width: 600px;
                padding: 20px;
            }
            h1 {
                font-size: 2rem;
                color: #0056b3;
                margin-bottom: 10px;
            }
            p {
                font-size: 1rem;
                margin-bottom: 20px;
                line-height: 1.5;
            }
            .contact {
                margin-top: 20px;
                font-size: 0.9rem;
                color: #666;
            }
            .contact a {
                color: #0056b3;
                text-decoration: none;
            }
            .contact a:hover {
                text-decoration: underline;
            }
            .logo {
                margin: 20px 0;
                max-width: 150px;
            }
            .timer {
                font-weight: bold;
                color: #e63946;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>${title}</h1>
            <p>${message}</p>
        </div>
    </body>
    </html>
    `;
}
