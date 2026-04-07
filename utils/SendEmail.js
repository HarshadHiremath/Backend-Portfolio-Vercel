export function sendEmail1(user) {
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
        <p class="body-text">Hello <span class="highlight">${user}</span>,</p>
        
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

export function sendEmail2(user, email, phone, message) {

return `
<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

<style>
  /* Base Reset & Professional Typography */
  body {
    margin: 0;
    padding: 0;
    background-color: #050505;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  table { border-collapse: collapse; width: 100%; }

  /* 🔥 DYNAMIC HORIZONTAL SCANNER */
  @keyframes scan {
    0% { top: 0%; opacity: 0; }
    50% { opacity: 1; }
    100% { top: 100%; opacity: 0; }
  }

  .scanner-line {
    position: absolute;
    height: 2px;
    width: 100%;
    background: linear-gradient(to right, transparent, #22c55e, transparent);
    box-shadow: 0 0 12px rgba(34, 197, 94, 0.8);
    z-index: 50;
    pointer-events: none;
    animation: scan 4s linear infinite;
  }

  /* Mobile Optimization */
  @media only screen and (max-width: 600px) {
    .container { width: 95% !important; border-radius: 8px !important; }
    .content-area { padding: 25px 20px !important; }
    .label-text { font-size: 10px !important; }
    .value-text { font-size: 16px !important; }
    .message-container { padding: 15px !important; font-size: 14px !important; }
  }
</style>
</head>

<body>

<table bgcolor="#050505" cellpadding="0" cellspacing="0">
  <tr>
    <td align="center" style="padding: 30px 10px;">

      <table class="container" cellpadding="0" cellspacing="0" bgcolor="#0a0a0a"
             style="max-width: 600px; width: 100%; border: 1px solid rgba(34, 197, 94, 0.25); border-radius: 16px; overflow: hidden; position: relative; box-shadow: 0 15px 40px rgba(0,0,0,0.6);">

        <tr>
          <td style="position: relative; height: 0; line-height: 0;">
            <div class="scanner-line"></div>
          </td>
        </tr>

        <tr>
          <td align="center" bgcolor="#0f0f0f" style="padding: 20px; border-bottom: 1px solid rgba(255,255,255,0.05);">
            <h2 style="margin: 0; color: #ffffff; text-transform: uppercase; font-style: italic; letter-spacing: -1px; font-family: 'Courier New', Courier, monospace; font-size: 20px;">
              COMMUNICATION<span style="color: #22c55e;">_PROTOCOL</span>
            </h2>
          </td>
        </tr>

        <tr>
          <td class="content-area" style="padding: 40px; color: #94a3b8;">

            <div style="display: inline-block; padding: 4px 10px; border: 1px solid #22c55e; color: #22c55e; font-size: 14px; font-family: 'Courier New', monospace; text-transform: uppercase; margin-bottom: 30px; letter-spacing: 1px; border-radius: 4px; font-weight: 1000;">
              ● CONTACT_SUBMISSION
            </div>

            <div style="margin-bottom: 25px;">
              <span class="label-text" style="display: block; font-family: 'Courier New', monospace; font-size: 16px; color: #22c55e; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 6px; font-weight: 900;">
                &gt; Source_Identity
              </span>
              <span class="value-text" style="display: block; font-size: 20px; color: #ffffff; font-weight: 800; letter-spacing: -0.5px;">
                ${user}
              </span>
            </div>

            <div style="margin-bottom: 25px;">
              <span class="label-text" style="display: block; font-family: 'Courier New', monospace; font-size: 16px; color: #22c55e; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 6px; font-weight: 1000;">
                &gt; Communication_Node
              </span>
              <a href="mailto:{{email}}" class="value-text" style="display: block; font-size: 18px; color: white; text-decoration: none; font-weight: 500; border-bottom: 1px dashed rgba(34, 197, 94, 0.3); width: fit-content; padding-bottom: 2px;">
                ${email}
              </a>
            </div>

            <div style="margin-bottom: 25px;">
              <span class="label-text" style="display: block; font-family: 'Courier New', monospace; font-size: 16px; color: #22c55e; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 6px; font-weight: bold;">
                &gt; Secure_Line
              </span>
              <a href="tel:{{phone}}" class="value-text" style="display: block; font-size: 20px; color: #ffffff; text-decoration: none; font-weight: 600;">
                ${phone}
              </a>
            </div>

            <div style="margin-top: 35px;">
              <span class="label-text" style="display: block; font-family: 'Courier New', monospace; font-size: 16px; color: #22c55e; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 12px; font-weight: bold;">
                &gt; Encrypted_Message
              </span>
              <div class="message-container" style="background-color: #050505; border: 1px solid rgba(255,255,255,0.08); padding: 25px; border-radius: 12px; color: white; font-size: 20px; line-height: 1.7; font-weight: 600; min-height: 100px; box-shadow: inset 0 2px 10px rgba(0,0,0,0.5);">
                ${message}
              </div>
            </div>

            <div style="margin-top: 45px; padding-top: 25px; border-top: 1px solid rgba(255,255,255,0.05); text-align: center;">
              <p style="margin: 0; font-size: 14px; color: green; font-family: 'Courier New', monospace; text-transform: uppercase; font-weight: 800;">
                Powered by Harshad Group of Companies Pvt. Ltd.
              </p>
            </div>

          </td>
        </tr>

      </table>

    </td>
  </tr>
</table>

</body>
</html>
`;

};
