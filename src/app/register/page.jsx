"use client";
import { useState } from "react";
import { Box, Button, TextField, Typography, Container, Paper } from "@mui/material";

export default function RegisterPage() {
	const [form, setForm] = useState({ username: "", password: "" });
	const [message, setMessage] = useState(null)

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const res = await fetch("http://localhost:4000/api/user/create", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(form),
			})

			const {message} = await res.json()
			setMessage(message)
		} catch (error) {
			console.error("Registration failed:", error)
		}
	};

	return (
		<Container maxWidth="sm" sx={{ minHeight: "100vh", display: "flex", alignItems: "center" }}>
			<Paper elevation={3} sx={{ p: 4, width: "100%" }}>
				<Typography variant="h4" component="h1" gutterBottom align="center">
					Register
				</Typography>
				<Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
					<TextField
						label="Username"
						name="username"
						value={form.username}
						onChange={handleChange}
						required
						fullWidth
					/>
					<TextField
						label="Password"
						name="password"
						type="password"
						value={form.password}
						onChange={handleChange}
						required
						fullWidth
					/>
					<Button type="submit" variant="contained" color="primary" fullWidth>
						Register
					</Button>
				</Box>
				<p>
					{message && message}
				</p>
			</Paper>
		</Container>
	);
}