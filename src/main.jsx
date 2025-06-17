import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./assets/css/style.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Toaster } from "sonner";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<Router>
			<Toaster position="top-left" richColors />
			<App />
		</Router>
	</StrictMode>
);
