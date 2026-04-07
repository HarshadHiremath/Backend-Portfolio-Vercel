const Status = 
`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>System Status | Cyber-Core</title>
    <style>
        :root {
            --neon-green: #00ff9c;
            --dark-bg: #050505;
            --glitch-speed: 2s;
        }

        body {
            background-color: var(--dark-bg);
            color: var(--neon-green);
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            font-family: 'Courier New', Courier, monospace;
            overflow: hidden;
            /* Scanline effect */
            background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), 
                        linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
            background-size: 100% 2px, 3px 100%;
        }

        .container {
            border: 2px solid var(--neon-green);
            padding: 40px;
            position: relative;
            background: rgba(0, 0, 0, 0.8);
            box-shadow: 0 0 15px rgba(0, 255, 156, 0.3), inset 0 0 15px rgba(0, 255, 156, 0.2);
            clip-path: polygon(0 0, 100% 0, 100% 90%, 90% 100%, 0 100%);
        }

        h1 {
            font-size: 1.8rem;
            text-transform: uppercase;
            letter-spacing: 4px;
            margin-bottom: 10px;
            text-shadow: 0 0 10px var(--neon-green);
            animation: pulse 2s infinite;
        }

        .status-indicator {
            display: inline-block;
            width: 12px;
            height: 12px;
            background: var(--neon-green);
            border-radius: 50%;
            margin-right: 10px;
            box-shadow: 0 0 10px var(--neon-green);
        }

        .info-grid {
            text-align: left;
            margin-top: 25px;
            font-size: 0.9rem;
            border-top: 1px solid rgba(0, 255, 156, 0.3);
            padding-top: 15px;
        }

        .info-item {
            margin: 8px 0;
            opacity: 0.8;
        }

        .btn {
            display: inline-block;
            margin-top: 25px;
            padding: 10px 20px;
            color: var(--dark-bg);
            background: var(--neon-green);
            text-decoration: none;
            font-weight: bold;
            text-transform: uppercase;
            transition: 0.3s;
            border: none;
            cursor: pointer;
        }

        .btn:hover {
            background: transparent;
            color: var(--neon-green);
            box-shadow: 0 0 20px var(--neon-green);
            outline: 1px solid var(--neon-green);
        }

        @keyframes pulse {
            0% { opacity: 1; }
            50% { opacity: 0.7; }
            100% { opacity: 1; }
        }
    </style>
</head>
<body>

<div class="container">
    <h1><span class="status-indicator"></span>System Online</h1>
    <p> BACKEND_SERVICE_API_v1.1.2.1 </p>
    
    <div class="info-grid">
        <div class="info-item"><strong>BASE_URL:</strong> https://harshadhiremath.vercel.app</div>
        <div class="info-item"><strong>DATABASE:</strong> CONNECTED</div>
        <div class="info-item"><strong>LATENCY:</strong> < 40ms</div>
        <div class="info-item"><strong>SECURE_BY:</strong> Harshad Hiremath & Team</div>
    </div>

    <a href="https://harshadhiremath.vercel.app" class="btn">Return to Project</a>
</div>

</body>
</html>
`

export default Status;