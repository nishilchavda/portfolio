// api/send-email.js
const nodemailer = require("nodemailer");

// Create the transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

export default async function handler(req, res) {
  // 1. Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: "Method Not Allowed" });
  }

  try {
    const { name, email, subject, msg } = req.body;

    // 2. Input Validation
    if (!name || !email || !subject || !msg) {
      return res.status(400).json({
        success: false,
        message: "Please Provide all Fields",
      });
    }

    // 3. Send Email
    await transporter.sendMail({
      to: process.env.EMAIL,
      from: process.env.EMAIL,
      subject: `Portfolio Contact: Message from ${name}`,
      replyTo: email,
      html: `<div style="margin:0;padding:0;background-color:#020617;color:#ffffff;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;line-height:1.6;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#020617;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;background-color:#0f172a;border-radius:16px;border:1px solid #1e293b;overflow:hidden;box-shadow:0 10px 25px rgba(0,0,0,0.5);">
          <!-- Header -->
          <tr>
            <td style="padding:32px 40px;background:linear-gradient(135deg, #2563eb, #7c3aed);background-color:#2563eb;text-align:center;">
              <h1 style="margin:0;color:#ffffff;font-size:26px;font-weight:700;letter-spacing:-0.5px;">New Connection! 🚀</h1>
              <p style="margin:8px 0 0;color:#e0e7ff;font-size:15px;opacity:0.9;">Someone reached out from your portfolio.</p>
            </td>
          </tr>
          <!-- Body -->
          <tr>
            <td style="padding:40px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding-bottom:24px;">
                    <p style="margin:0 0 8px;color:#94a3b8;font-size:13px;text-transform:uppercase;letter-spacing:1px;font-weight:600;">Contact Details</p>
                    <div style="background-color:#1e293b;border-radius:8px;padding:20px;border:1px solid #334155;">
                      <table width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                          <td width="30%" style="color:#94a3b8;font-size:14px;padding-bottom:12px;">Name:</td>
                          <td style="color:#ffffff;font-size:15px;font-weight:600;padding-bottom:12px;">${name}</td>
                        </tr>
                        <tr>
                          <td style="color:#94a3b8;font-size:14px;padding-bottom:12px;">Email:</td>
                          <td style="color:#60a5fa;font-size:15px;font-weight:600;padding-bottom:12px;"><a href="mailto:${email}" style="color:#60a5fa;text-decoration:none;">${email}</a></td>
                        </tr>
                        <tr>
                          <td style="color:#94a3b8;font-size:14px;">Subject:</td>
                          <td style="color:#ffffff;font-size:15px;font-weight:600;">${subject}</td>
                        </tr>
                      </table>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p style="margin:0 0 8px;color:#94a3b8;font-size:13px;text-transform:uppercase;letter-spacing:1px;font-weight:600;">Message</p>
                    <div style="background-color:#1e293b;border-radius:8px;padding:24px;border:1px solid #334155;color:#e2e8f0;font-size:16px;line-height:1.6;white-space:pre-wrap;">${msg}</div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="padding:24px 40px;background-color:#020617;border-top:1px solid #1e293b;text-align:center;">
              <p style="margin:0;color:#64748b;font-size:13px;">Reply directly to this email to respond to <strong>${name}</strong>.</p>
              <a href="mailto:${email}" style="display:inline-block;margin-top:16px;padding:12px 24px;background-color:#2563eb;color:#ffffff;text-decoration:none;border-radius:6px;font-weight:600;font-size:14px;">Reply Now</a>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</div>`,
    });

    return res.status(200).json({
      success: true,
      message: "Your Message Sent",
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Send Email Api Error",
      error: error.message,
    });
  }
}