export function sendEmail(userName) {

return `
<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
  /* Use System-Safe Web Fonts for Readability */
  body { 
    background-color: #050505; 
    margin: 0; 
    padding: 0; 
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
  }
  .wrapper { 
    background-color: #050505; 
    color: #94a3b8; 
    padding: 40px 10px; 
  }
  .container { 
    max-width: 600px; 
    margin: 0 auto; 
    border: 1px solid rgba(34, 197, 94, 0.3); 
    border-radius: 12px; 
    background-color: #0a0a0a; 
    overflow: hidden;
    position: relative;
  }
  
  /* SCANNER LINE ANIMATION (Supported in Apple Mail & modern clients) */
  .scanner-bar {
    height: 2px;
    width: 100%;
    background: linear-gradient(to right, transparent, #22c55e, transparent);
    position: absolute;
    top: 0;
    z-index: 50;
    filter: blur(1px);
    animation: scan 5s linear infinite;
  }
  @keyframes scan {
    0% { top: 0%; opacity: 0; }
    50% { opacity: 1; }
    100% { top: 100%; opacity: 0; }
  }

  .header { 
    padding: 25px; 
    background-color: #0f0f0f; 
    text-align: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  }
  .content { 
    padding: 35px; 
    text-align: left; 
    line-height: 1.7; 
  }
  .highlight { 
    color: #22c55e; 
    font-weight: 600; 
  }
  
  /* Readable Professional Body Font */
  .body-text {
    font-size: 16px;
    color: #cbd5e1;
    margin-bottom: 20px;
  }

  .btn-container { text-align: center; margin: 30px 0; }
  .portfolio-btn {
    display: inline-block;
    padding: 15px 30px;
    background-color: #22c55e;
    color: #000000 !important;
    text-decoration: none;
    /* font-family: 'Courier New', Courier, monospace; */
    font-weight: bold;
    font-size: 13px;
    text-transform: uppercase;
    letter-spacing: 2px;
    border-radius: 4px;
  }
  
  .signature {
    margin-top: 30px;
    padding-top: 20px;
    border-top: 1px solid rgba(255, 255, 255, 0.05);
  }
</style>
</head>
<body>
  <div class="wrapper">
    <div class="container">
      <div class="scanner-bar"></div>

      <div class="header">
        <h2 style="margin: 0; color: #ffffff; text-transform: uppercase; font-style: italic; letter-spacing: -1px; font-family: 'Courier New', Courier, monospace;">
          HARSHAD<span style="color: #22c55e;">_HIREMATH</span>
        </h2>
      </div>
      
      <div class="content">
        <p class="body-text">Hello <span class="highlight">${UserName}</span>,</p>
        
        <p class="body-text">
          Thank you for contacting me through my portfolio website. I’ve <span class="highlight">successfully received</span> your message and will review it carefully.
        </p>
        
        <p class="body-text">
          I’ll get back to you as soon as possible. I appreciate you taking the time to connect.
        </p>

        <div class="btn-container">
          <a href="https://harshadhiremath.vercel.app" class="portfolio-btn">
            View_Portfolio
          </a>
        </div>

        <div class="signature">
           <p style="margin: 0; font-size: 15px; color: #ffffff;">Best regards,</p>
           <p style="margin: 5px 0 0 0; color: #22c55e; font-weight: bold; font-family: 'Courier New', Courier, monospace;">Harshad Hiremath</p>
           <p style="margin: 0; font-size: 12px; color: #64748b; text-transform: uppercase; letter-spacing: 1px;">Software Engineer</p>
        </div>
      </div>
    </div>
  </div>
</body>
</html>
`;

};
