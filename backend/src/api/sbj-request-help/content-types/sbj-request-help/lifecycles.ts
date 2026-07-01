export default {
  async afterCreate(event: { result: Record<string, any> }) {
    const { result } = event;

    try {
      await strapi.plugins['email'].services.email.send({
        to: process.env.NOTIFY_EMAIL,
        from: process.env.SMTP_USERNAME,
        subject: `New Help Request — ${result.name}`,
        html: `
          <div style="font-family:sans-serif;max-width:600px;margin:auto;border:1px solid #eee;border-radius:8px;overflow:hidden;">
            <div style="background:#FF671F;padding:20px 24px;">
              <h2 style="color:#fff;margin:0;">New Help Request — SBJ Trust</h2>
            </div>
            <div style="padding:24px;">
              <table style="width:100%;border-collapse:collapse;">
                <tr>
                  <td style="padding:8px 0;color:#888;width:160px;">Name</td>
                  <td style="padding:8px 0;font-weight:600;">${result.name || '—'}</td>
                </tr>
                <tr>
                  <td style="padding:8px 0;color:#888;">Phone</td>
                  <td style="padding:8px 0;">${result.phone || '—'}</td>
                </tr>
                <tr>
                  <td style="padding:8px 0;color:#888;">Email</td>
                  <td style="padding:8px 0;">${result.email || '—'}</td>
                </tr>
                <tr>
                  <td style="padding:8px 0;color:#888;">Type of Help</td>
                  <td style="padding:8px 0;">${result.typeOfHelp || '—'}</td>
                </tr>
                <tr>
                  <td style="padding:8px 0;color:#888;vertical-align:top;">Situation</td>
                  <td style="padding:8px 0;">${result.describeYourSituation || '—'}</td>
                </tr>
              </table>
              <hr style="border:none;border-top:1px solid #eee;margin:16px 0;" />
              <p style="color:#aaa;font-size:12px;margin:0;">
                Submitted on ${new Date(result.createdAt).toLocaleString('en-IN')} · SBJ Trust Admin
              </p>
            </div>
          </div>
        `,
      });
    } catch (err) {
      strapi.log.error('Failed to send help request email:', err);
    }
  },
};
