let IS_PROD = true;

const server = IS_PROD
    ? "https://zoom-app-2.onrender.com"   // YOUR backend on Render
    : "http://localhost:8000";

export default server;
